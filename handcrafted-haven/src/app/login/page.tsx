'use client'
import { useActionState } from 'react'
import Link from 'next/link'
import { login } from '@/app/actions/auth'

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <div className="flex min-h-[calc(100vh-9rem)] items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b2314] text-sm font-semibold uppercase tracking-[0.28em] text-[#fdf8f3]">
            HH
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold text-[#3b2314]">Sign in</h1>
          <p className="mt-1 text-sm text-[#7a5a45]">Welcome back to Handcrafted Haven</p>
        </div>

        <form action={action} className="space-y-4">
          {state?.error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {state.error}
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-[#3b2314]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-[#dfc2a4] bg-white px-4 py-3 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-[#3b2314]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-[#dfc2a4] bg-white px-4 py-3 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="mt-2 w-full rounded-full bg-[#7a4019] px-6 py-3 text-sm font-semibold text-[#fdf8f3] shadow-[0_8px_20px_rgba(122,64,25,0.22)] transition hover:bg-[#5d2f13] disabled:opacity-60"
          >
            {pending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-[#ead9c7] bg-[#fdf8f3] px-4 py-3 text-xs text-[#7a5a45]">
          <p className="font-semibold text-[#3b2314]">Demo credentials</p>
          <p className="mt-1">Email: demo@handcraftedhaven.com</p>
          <p>Password: password123</p>
        </div>

        <p className="mt-6 text-center text-sm text-[#7a5a45]">
          Just browsing?{' '}
          <Link
            href="/"
            className="text-[#7a4019] underline underline-offset-4 hover:no-underline"
          >
            Continue as guest
          </Link>
        </p>
      </div>
    </div>
  )
}
