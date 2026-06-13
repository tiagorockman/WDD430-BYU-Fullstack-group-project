import Link from 'next/link'
import { getSessionProducts } from '@/app/lib/session'
import { products } from '@/app/lib/data'

const categories = ['All', 'Ceramics', 'Textiles', 'Woodcraft', 'Jewelry']

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; listed?: string }>
}) {
  const { category: activeCategory = 'All', listed } = await searchParams

  const sessionProducts = await getSessionProducts()
  const allProducts = [...products, ...sessionProducts]

  const filtered =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
      {listed === 'true' && (
        <div className="mb-8 rounded-2xl border border-[#4a7c59]/30 bg-[#4a7c59]/10 px-6 py-4 text-sm font-medium text-[#2d5239]">
          Your product has been listed successfully! It will appear in the catalog shortly.
        </div>
      )}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a4019]">
            Browse all items
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-[#3b2314]">
            Marketplace
          </h1>
          <p className="mt-2 text-sm text-[#7a5a45]">
            {filtered.length} {filtered.length === 1 ? 'item' : 'items'} · handmade by independent artisans
          </p>
        </div>
        <Link
          href="/products/new"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#7a4019] px-5 py-3 text-sm font-semibold text-[#fdf8f3] shadow-[0_12px_28px_rgba(122,64,25,0.22)] transition hover:bg-[#5d2f13]"
        >
          + List a product
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === 'All' ? '/products' : `/products?category=${cat}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-[#3b2314] text-[#fdf8f3]'
                : 'border border-[#dfc2a4] bg-white text-[#5b4334] hover:border-[#7a4019] hover:text-[#7a4019]'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-[1.8rem] border border-[#ead9c7] bg-white shadow-[0_12px_32px_rgba(59,35,20,0.07)] transition hover:shadow-[0_20px_48px_rgba(59,35,20,0.13)]"
          >
            <div className={`h-44 bg-gradient-to-br ${product.tone}`} />
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4019]">
                  {product.sellerName}
                </p>
                <span className="shrink-0 rounded-full bg-[#f3dec1] px-2.5 py-0.5 text-xs font-medium text-[#7a4019]">
                  {product.category}
                </span>
              </div>
              <h2 className="mt-2 font-display text-xl font-semibold text-[#3b2314]">
                {product.name}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#604837]">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#7a5a45]">
                  <span className="text-[#c9813a]">★</span>
                  {product.rating} · {product.reviews} reviews
                </div>
                <span className="text-lg font-semibold text-[#3b2314]">
                  ${product.price}
                </span>
              </div>
              <button className="mt-4 w-full rounded-full border border-[#dfc2a4] py-2.5 text-sm font-medium text-[#3b2314] transition hover:border-[#7a4019] hover:bg-[#f3dec1]">
                View item
              </button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg font-medium text-[#7a5a45]">No items in this category yet.</p>
          <Link href="/products/new" className="mt-4 inline-block text-sm text-[#7a4019] underline underline-offset-4 hover:no-underline">
            Be the first to list one
          </Link>
        </div>
      )}
    </div>
  )
}
