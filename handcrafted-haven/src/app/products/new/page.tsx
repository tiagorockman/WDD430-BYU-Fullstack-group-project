import { redirect } from 'next/navigation'
import Link from 'next/link'

const categories = ['Ceramics', 'Textiles', 'Woodcraft', 'Jewelry', 'Other']

export default function NewProductPage() {
  async function createProduct(formData: FormData) {
    'use server'

    const data = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      quantity: formData.get('quantity') as string,
      imageUrl: formData.get('imageUrl') as string,
    }

    if (!data.name || !data.category || !data.price) {
      return
    }

    // TODO: persist to database
    console.log('New product listing:', data)

    redirect('/products?listed=true')
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-10 lg:px-10">
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-sm text-[#7a5a45] transition hover:text-[#7a4019]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to marketplace
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a4019]">
          Seller dashboard
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-[#3b2314]">
          List a new product
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#7a5a45]">
          Fill in the details below and your item will appear in the marketplace catalog.
        </p>
      </div>

      <form action={createProduct} className="mt-10 space-y-7">
        <div className="rounded-[2rem] border border-[#ead9c7] bg-white p-8 shadow-[0_12px_32px_rgba(59,35,20,0.07)]">
          <h2 className="font-display text-xl font-semibold text-[#3b2314]">
            Product details
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-[#3b2314]">
                Product name <span className="text-[#7a4019]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Walnut Pour-Over Set"
                className="mt-2 w-full rounded-xl border border-[#dfc2a4] bg-[#fffaf5] px-4 py-3 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[#3b2314]">
                Category <span className="text-[#7a4019]">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-[#dfc2a4] bg-[#fffaf5] px-4 py-3 text-sm text-[#3b2314] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
              >
                <option value="" disabled>Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-[#3b2314]">
                Price (USD) <span className="text-[#7a4019]">*</span>
              </label>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm text-[#7a5a45]">
                  $
                </span>
                <input
                  id="price"
                  name="price"
                  type="number"
                  required
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full rounded-xl border border-[#dfc2a4] bg-[#fffaf5] py-3 pl-8 pr-4 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-[#3b2314]">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe your item — materials, process, dimensions, and what makes it special."
                className="mt-2 w-full resize-none rounded-xl border border-[#dfc2a4] bg-[#fffaf5] px-4 py-3 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-[#3b2314]">
                Quantity in stock
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                defaultValue={1}
                className="mt-2 w-full rounded-xl border border-[#dfc2a4] bg-[#fffaf5] px-4 py-3 text-sm text-[#3b2314] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-[#3b2314]">
                Image URL
              </label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                placeholder="https://..."
                className="mt-2 w-full rounded-xl border border-[#dfc2a4] bg-[#fffaf5] px-4 py-3 text-sm text-[#3b2314] placeholder-[#b8a090] outline-none transition focus:border-[#7a4019] focus:ring-2 focus:ring-[#7a4019]/20"
              />
              <p className="mt-1.5 text-xs text-[#7a5a45]">
                Paste a public image URL. File upload coming soon.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-[#dfc2a4] px-6 py-3 text-sm font-medium text-[#5b4334] transition hover:border-[#7a4019] hover:text-[#7a4019]"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#7a4019] px-8 py-3 text-sm font-semibold text-[#fdf8f3] shadow-[0_12px_28px_rgba(122,64,25,0.22)] transition hover:bg-[#5d2f13]"
          >
            Publish listing
          </button>
        </div>
      </form>
    </div>
  )
}
