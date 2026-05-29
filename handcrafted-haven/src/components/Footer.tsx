import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#ead9c7] bg-[#fffaf5]/75">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3b2314] text-xs font-semibold uppercase tracking-[0.28em] text-[#fdf8f3]">
                HH
              </div>
              <p className="font-display text-base font-semibold text-[#3b2314]">
                Handcrafted Haven
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#7a5a45]">
              A marketplace concept for independent artisans and thoughtful shoppers.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-10 text-sm text-[#5b4334]">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4019]">
                Shop
              </p>
              <Link href="/products" className="transition hover:text-[#7a4019]">Marketplace</Link>
              <Link href="/#featured" className="transition hover:text-[#7a4019]">Featured</Link>
              <Link href="/#makers" className="transition hover:text-[#7a4019]">Makers</Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4019]">
                Sell
              </p>
              <Link href="/products/new" className="transition hover:text-[#7a4019]">List a product</Link>
            </div>
          </nav>
        </div>

        <div className="mt-8 border-t border-[#ead9c7] pt-6 text-xs text-[#7a5a45]">
          Built for WDD430 · Responsive design · Seller-first flows
        </div>
      </div>
    </footer>
  )
}
