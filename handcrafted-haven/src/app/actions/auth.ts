'use server'
import { redirect } from 'next/navigation'
import { createSession, deleteSession } from '@/app/lib/session'

const USERS = [
  { id: '1', email: 'demo@handcraftedhaven.com', password: 'password123', name: 'Demo User' },
]

export type LoginState =
  | { error: string }
  | undefined

export async function login(state: LoginState, formData: FormData): Promise<LoginState> {
  const email = (formData.get('email') as string)?.trim()
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required.' }
  }

  const user = USERS.find((u) => u.email === email && u.password === password)

  if (!user) {
    return { error: 'Invalid email or password.' }
  }

  await createSession(user.id)
  redirect('/')
}

export async function logout() {
  await deleteSession()
  redirect('/login')
}
