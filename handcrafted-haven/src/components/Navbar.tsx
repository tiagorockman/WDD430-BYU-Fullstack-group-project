'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { logout } from '@/app/actions/auth'

type NavbarProps = {
  isLoggedIn: boolean
}

export default function Navbar({ isLoggedIn }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/products', label: 'Marketplace' },
    { href: '/#makers', label: 'Makers' },
    { href: '/#featured', label: 'Featured' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9c7]/60 bg-[#fdf8f3]/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3b2314] text-sm font-semibold uppercase tracking-[0.28em] text-[#fdf8f3]">
            HH
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[#3b2314]">
              Handcrafted Haven
            </p>
            <p className="text-sm text-[#7a5a45]">Handmade goods, artisan stories</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-medium text-[#5b4334] md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-[#7a4019] ${pathname === link.href ? 'font-semibold text-[#7a4019]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products/new"
            className="rounded-full border border-[#b88b63] px-4 py-2 text-[#3b2314] transition hover:bg-[#f3dec1]"
          >
            Become a seller
          </Link>
          {isLoggedIn ? (
            <form action={logout}>
              <button
                type="submit"
                className="rounded-full bg-[#3b2314] px-4 py-2 text-[#fdf8f3] transition hover:bg-[#5d2f13]"
              >
                Sign out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-[#3b2314] px-4 py-2 text-[#fdf8f3] transition hover:bg-[#5d2f13]"
            >
              Sign in
            </Link>
          )}
        </nav>

        <button
          className="flex items-center justify-center rounded-xl border border-[#ead9c7] p-2 text-[#5b4334] transition hover:bg-[#f3dec1] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav
          className="border-t border-[#ead9c7] bg-[#fdf8f3] px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 text-sm font-medium text-[#5b4334]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 transition hover:bg-[#f3dec1] hover:text-[#7a4019]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/products/new"
                className="block rounded-full border border-[#b88b63] px-4 py-3 text-center text-[#3b2314] transition hover:bg-[#f3dec1]"
                onClick={() => setIsOpen(false)}
              >
                Become a seller
              </Link>
            </li>
            <li className="mt-2">
              {isLoggedIn ? (
                <form action={logout}>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#3b2314] px-4 py-3 text-center text-[#fdf8f3] transition hover:bg-[#5d2f13]"
                  >
                    Sign out
                  </button>
                </form>
              ) : (
                <Link
                  href="/login"
                  className="block rounded-full bg-[#3b2314] px-4 py-3 text-center text-[#fdf8f3] transition hover:bg-[#5d2f13]"
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
