import { NextRequest, NextResponse } from 'next/server'
import { createHmac } from 'crypto'

const SECRET = process.env.SESSION_SECRET ?? 'handcrafted-haven-dev-secret'

function isValidSession(token: string): boolean {
  const lastDot = token.lastIndexOf('.')
  if (lastDot === -1) return false
  const userId = token.slice(0, lastDot)
  const sig = token.slice(lastDot + 1)
  const expected = createHmac('sha256', SECRET).update(userId).digest('hex')
  return sig === expected
}

const protectedPaths = ['/products/new']

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = req.cookies.get('session')?.value
  const authenticated = token ? isValidSession(token) : false

  if (protectedPaths.some((p) => path.startsWith(p)) && !authenticated) {
    const loginUrl = new URL('/login', req.nextUrl)
    return NextResponse.redirect(loginUrl)
  }

  if (path === '/login' && authenticated) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
