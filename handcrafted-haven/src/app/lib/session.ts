import 'server-only'
import { createHmac } from 'crypto'
import { cookies } from 'next/headers'
import type { Product } from './data'

const SECRET = process.env.SESSION_SECRET ?? 'handcrafted-haven-dev-secret'

function sign(userId: string): string {
  return createHmac('sha256', SECRET).update(userId).digest('hex')
}

function verifyToken(token: string): string | null {
  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return null
  const userId = token.slice(0, lastDot)
  const sig = token.slice(lastDot + 1)
  const expected = sign(userId)
  return sig === expected ? userId : null
}

export async function createSession(userId: string) {
  const token = `${userId}.${sign(userId)}`
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies()
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function getSession(): Promise<{ userId: string } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('session')?.value
  if (!token) return null
  const userId = verifyToken(token)
  if (!userId) return null
  return { userId }
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

const PRODUCT_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 7 * 24 * 60 * 60,
}

export async function getSessionProducts(): Promise<Product[]> {
  const cookieStore = await cookies()
  const raw = cookieStore.get('user_products')?.value
  if (!raw) return []
  try {
    return JSON.parse(raw) as Product[]
  } catch {
    return []
  }
}

export async function addSessionProduct(product: Product): Promise<void> {
  const existing = await getSessionProducts()
  const cookieStore = await cookies()
  cookieStore.set('user_products', JSON.stringify([...existing, product]), PRODUCT_COOKIE_OPTIONS)
}

export async function removeSessionProduct(id: string): Promise<void> {
  const existing = await getSessionProducts()
  const cookieStore = await cookies()
  cookieStore.set(
    'user_products',
    JSON.stringify(existing.filter((p) => p.id !== id)),
    PRODUCT_COOKIE_OPTIONS,
  )
}
