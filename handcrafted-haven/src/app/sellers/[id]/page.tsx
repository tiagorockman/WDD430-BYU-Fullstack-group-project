import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getSellerById,
  getProductsBySeller,
  getReviewsBySeller,
} from '@/app/lib/data'

export default async function SellerPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const seller = getSellerById(id)
  if (!seller) notFound()

  const products = getProductsBySeller(seller.id)
  const reviews = getReviewsBySeller(seller.id)

  const avgRating =
    products.length > 0
      ? Math.round((products.reduce((s, p) => s + p.rating, 0) / products.length) * 10) / 10
      : 0

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
      {/* Seller header */}
      <div className="overflow-hidden rounded-[2rem] border border-[#ead9c7] bg-white shadow-[0_12px_32px_rgba(59,35,20,0.07)]">
        <div className={`h-32 bg-gradient-to-br ${seller.tone}`} />
        <div className="px-8 pb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="-mt-8 flex items-end gap-4">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${seller.tone} text-lg font-semibold text-white shadow-lg`}>
                {seller.initials}
              </div>
              <div className="pb-1">
                <h1 className="font-display text-3xl font-semibold text-[#3b2314]">{seller.name}</h1>
                <p className="mt-1 text-sm text-[#7a5a45]">{seller.specialty} · {seller.location}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="rounded-full border border-[#ead9c7] px-4 py-2 text-[#7a5a45]">
                Member since {seller.memberSince}
              </div>
              {avgRating > 0 && (
                <div className="rounded-full border border-[#ead9c7] px-4 py-2 text-[#7a5a45]">
                  <span className="text-[#c9813a]">★</span> {avgRating} avg rating
                </div>
              )}
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#604837]">{seller.bio}</p>
        </div>
      </div>

      {/* Products */}
      <div className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-[#3b2314]">Listings</h2>
        {products.length === 0 ? (
          <p className="mt-4 text-sm text-[#7a5a45]">No products listed yet.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[1.8rem] border border-[#ead9c7] bg-white shadow-[0_12px_32px_rgba(59,35,20,0.07)]"
              >
                <div className={`h-40 bg-gradient-to-br ${product.tone}`} />
                <div className="p-5">
                  <span className="rounded-full bg-[#f3dec1] px-2.5 py-0.5 text-xs font-medium text-[#7a4019]">
                    {product.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[#3b2314]">{product.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#604837]">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-[#7a5a45]">
                      <span className="text-[#c9813a]">★</span>
                      {product.rating} · {product.reviews} reviews
                    </div>
                    <span className="text-lg font-semibold text-[#3b2314]">${product.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display text-2xl font-semibold text-[#3b2314]">Reviews</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-[1.6rem] border border-[#ead9c7] bg-white p-6 shadow-[0_8px_24px_rgba(59,35,20,0.06)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-[#3b2314]">{review.author}</p>
                    <p className="text-xs text-[#7a5a45]">{review.productName}</p>
                  </div>
                  <div className="flex shrink-0 items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-[#c9813a]' : 'text-[#dfc2a4]'}>★</span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#604837]">{review.comment}</p>
                <p className="mt-3 text-xs text-[#b8a090]">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/products" className="text-sm text-[#7a4019] underline underline-offset-4 hover:no-underline">
          ← Back to marketplace
        </Link>
      </div>
    </div>
  )
}
