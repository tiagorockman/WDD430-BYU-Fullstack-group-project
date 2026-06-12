import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getSession } from '@/app/lib/session'
import {
  getSellerByUserId,
  getProductsBySeller,
  getSellerStats,
} from '@/app/lib/data'
import { deleteProduct } from '@/app/actions/products'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ deleted?: string; listed?: string }>
}) {
  const session = await getSession()
  if (!session) redirect('/login')

  const { deleted, listed } = await searchParams

  const seller = getSellerByUserId(session.userId)
  const sellerProducts = seller ? getProductsBySeller(seller.id) : []
  const stats = seller ? getSellerStats(seller.id) : { productCount: 0, totalReviews: 0, avgRating: 0 }

  const totalRevenue = sellerProducts.reduce((sum, p) => sum + p.price * p.quantity, 0)

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
      {/* Banner notifications */}
      {deleted === 'true' && (
        <div className="mb-6 rounded-2xl border border-[#b8722e]/30 bg-[#b8722e]/10 px-6 py-4 text-sm font-medium text-[#7a4019]">
          Product removed from your listings.
        </div>
      )}
      {listed === 'true' && (
        <div className="mb-6 rounded-2xl border border-[#4a7c59]/30 bg-[#4a7c59]/10 px-6 py-4 text-sm font-medium text-[#2d5239]">
          Your new product has been listed successfully.
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a4019]">
            Seller dashboard
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-[#3b2314]">
            {seller ? seller.name : 'My Shop'}
          </h1>
          {seller && (
            <Link
              href={`/sellers/${seller.id}`}
              className="mt-2 inline-flex items-center gap-1 text-sm text-[#7a5a45] transition hover:text-[#7a4019]"
            >
              View public profile
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
          )}
        </div>
        <Link
          href="/products/new"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#7a4019] px-5 py-3 text-sm font-semibold text-[#fdf8f3] shadow-[0_12px_28px_rgba(122,64,25,0.22)] transition hover:bg-[#5d2f13]"
        >
          + Add listing
        </Link>
      </div>

      {/* Stats cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active listings" value={String(stats.productCount)} />
        <StatCard label="Avg rating" value={stats.avgRating > 0 ? `${stats.avgRating} ★` : '—'} />
        <StatCard label="Total reviews" value={String(stats.totalReviews)} />
        <StatCard label="Potential revenue" value={totalRevenue > 0 ? `$${totalRevenue.toLocaleString()}` : '$0'} />
      </div>

      {/* Product table */}
      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-[#3b2314]">Your listings</h2>

        {sellerProducts.length === 0 ? (
          <div className="mt-6 rounded-[2rem] border border-dashed border-[#dfc2a4] px-8 py-16 text-center">
            <p className="text-base font-medium text-[#7a5a45]">No products listed yet.</p>
            <Link
              href="/products/new"
              className="mt-4 inline-flex items-center rounded-full bg-[#7a4019] px-5 py-2.5 text-sm font-semibold text-[#fdf8f3] transition hover:bg-[#5d2f13]"
            >
              Add your first listing
            </Link>
          </div>
        ) : (
          <div className="mt-4 overflow-hidden rounded-[1.6rem] border border-[#ead9c7] bg-white shadow-[0_8px_24px_rgba(59,35,20,0.06)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#ead9c7] bg-[#fdf8f3] text-left text-xs font-semibold uppercase tracking-[0.12em] text-[#7a5a45]">
                  <th className="px-6 py-4">Product</th>
                  <th className="hidden px-6 py-4 sm:table-cell">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="hidden px-6 py-4 md:table-cell">Stock</th>
                  <th className="hidden px-6 py-4 md:table-cell">Rating</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ead9c7]">
                {sellerProducts.map((product) => (
                  <tr key={product.id} className="transition hover:bg-[#fffaf5]">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br ${product.tone}`} />
                        <span className="font-medium text-[#3b2314]">{product.name}</span>
                      </div>
                    </td>
                    <td className="hidden px-6 py-4 sm:table-cell">
                      <span className="rounded-full bg-[#f3dec1] px-2.5 py-0.5 text-xs font-medium text-[#7a4019]">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#3b2314]">${product.price}</td>
                    <td className="hidden px-6 py-4 text-[#604837] md:table-cell">{product.quantity}</td>
                    <td className="hidden px-6 py-4 md:table-cell">
                      <div className="flex items-center gap-1 text-xs text-[#7a5a45]">
                        <span className="text-[#c9813a]">★</span>
                        {product.rating} <span className="text-[#b8a090]">({product.reviews})</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/products/new?edit=${product.id}`}
                          className="rounded-lg border border-[#dfc2a4] px-3 py-1.5 text-xs font-medium text-[#5b4334] transition hover:border-[#7a4019] hover:text-[#7a4019]"
                        >
                          Edit
                        </Link>
                        <form action={deleteProduct}>
                          <input type="hidden" name="id" value={product.id} />
                          <button
                            type="submit"
                            className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Profile settings section */}
      {seller && (
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#ead9c7] bg-white p-8 shadow-[0_12px_32px_rgba(59,35,20,0.07)]">
          <h2 className="font-display text-xl font-semibold text-[#3b2314]">Shop profile</h2>
          <p className="mt-1 text-sm text-[#7a5a45]">How your shop appears to buyers.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">Shop name</p>
              <p className="mt-1.5 text-sm font-medium text-[#3b2314]">{seller.name}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">Location</p>
              <p className="mt-1.5 text-sm font-medium text-[#3b2314]">{seller.location}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">Specialty</p>
              <p className="mt-1.5 text-sm font-medium text-[#3b2314]">{seller.specialty}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">Member since</p>
              <p className="mt-1.5 text-sm font-medium text-[#3b2314]">{seller.memberSince}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">Bio</p>
              <p className="mt-1.5 text-sm leading-6 text-[#604837]">{seller.bio}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-[#ead9c7] pt-6">
            <button
              disabled
              className="rounded-full border border-[#dfc2a4] px-5 py-2.5 text-sm font-medium text-[#7a5a45] opacity-60 cursor-not-allowed"
            >
              Edit profile (coming soon)
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.6rem] border border-[#ead9c7] bg-white p-6 shadow-[0_8px_24px_rgba(59,35,20,0.06)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a5a45]">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-[#3b2314]">{value}</p>
    </div>
  )
}
