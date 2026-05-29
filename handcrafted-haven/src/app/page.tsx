const featuredCategories = [
  {
    name: "Ceramics",
    description: "Stoneware mugs, bowls, and table pieces shaped in small batches.",
  },
  {
    name: "Textiles",
    description: "Handwoven linens, quilted accents, and naturally dyed fabrics.",
  },
  {
    name: "Woodcraft",
    description: "Heirloom serving boards, carved decor, and workshop-made furniture.",
  },
  {
    name: "Jewelry",
    description: "Thoughtful metalwork and gemstone pieces with artisan provenance.",
  },
];

const marketplaceHighlights = [
  {
    title: "Curated discovery",
    description:
      "Browse collections that feel like a craft fair, with better filtering, richer stories, and fewer generic listings.",
  },
  {
    title: "Meaningful maker profiles",
    description:
      "Every seller has space to share their process, location, and the care behind each handmade item.",
  },
  {
    title: "Trust built in",
    description:
      "Reviews, ratings, and responsive product pages help shoppers buy with confidence across every device.",
  },
];

const sampleProducts = [
  {
    name: "Walnut Pour-Over Set",
    maker: "North Pine Studio",
    price: "$64",
    tone: "from-[#5b3521] to-[#c9813a]",
  },
  {
    name: "Sage Loom Throw",
    maker: "Thread & Hearth",
    price: "$92",
    tone: "from-[#4a7c59] to-[#e8c99a]",
  },
  {
    name: "Amber Clay Vase",
    maker: "Mesa House",
    price: "$48",
    tone: "from-[#7a4019] to-[#f3dec1]",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_right,_rgba(201,129,58,0.28),_transparent_32%),radial-gradient(circle_at_left,_rgba(74,124,89,0.18),_transparent_30%)]"
      />

      <main id="top">
        <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-16 pt-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:px-10 lg:pb-24 lg:pt-14">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#d7b08a] bg-[#fff7ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#7a4019]">
              Marketplace for handmade goods
            </span>
            <h1 className="mt-6 max-w-xl font-display text-5xl font-semibold leading-[1.02] text-[#3b2314] sm:text-6xl">
              Bring artisan stories and beautiful objects into one warm, modern storefront.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#604837]">
              Handcrafted Haven connects talented makers with customers who care
              about quality, provenance, and sustainable buying. The experience
              is curated, story-rich, and built to feel welcoming on every
              screen.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-[#7a4019] px-6 py-3.5 text-sm font-semibold text-[#fdf8f3] shadow-[0_18px_40px_rgba(122,64,25,0.28)] transition hover:bg-[#5d2f13]"
              >
                Explore featured pieces
              </a>
              <a
                href="#join"
                className="inline-flex items-center justify-center rounded-full border border-[#c7a180] bg-[#fdf8f3]/90 px-6 py-3.5 text-sm font-semibold text-[#3b2314] transition hover:border-[#7a4019] hover:text-[#7a4019]"
              >
                Open your artisan shop
              </a>
            </div>

            <dl className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-3xl border border-[#ead9c7] bg-[#fffaf5] p-5 shadow-[0_16px_40px_rgba(59,35,20,0.06)]">
                <dt className="text-sm font-medium text-[#7a5a45]">Curated makers</dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-[#3b2314]">
                  120+
                </dd>
              </div>
              <div className="rounded-3xl border border-[#ead9c7] bg-[#fffaf5] p-5 shadow-[0_16px_40px_rgba(59,35,20,0.06)]">
                <dt className="text-sm font-medium text-[#7a5a45]">Craft categories</dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-[#3b2314]">
                  18
                </dd>
              </div>
              <div className="rounded-3xl border border-[#ead9c7] bg-[#fffaf5] p-5 shadow-[0_16px_40px_rgba(59,35,20,0.06)]">
                <dt className="text-sm font-medium text-[#7a5a45]">Average rating</dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-[#3b2314]">
                  4.9
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-[#c9813a]/20 blur-2xl lg:block" />
            <div className="absolute -right-8 bottom-16 hidden h-32 w-32 rounded-full bg-[#4a7c59]/20 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#dfc2a4] bg-[#fffaf5] p-5 shadow-[0_28px_80px_rgba(59,35,20,0.16)]">
              <div className="rounded-[1.6rem] bg-[#3b2314] p-6 text-[#fdf8f3]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[#e8c99a]">
                      Artisan spotlight
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-semibold">
                      North Pine Studio
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#4a7c59] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#fdf8f3]">
                    Handmade
                  </span>
                </div>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#f5e8db]">
                  Functional home goods made from reclaimed walnut, hand-finished
                  in a small mountain workshop.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[1.4rem] bg-[linear-gradient(160deg,#c9813a_0%,#8b4b23_100%)] p-5">
                    <div className="flex h-full min-h-52 flex-col justify-between rounded-[1.1rem] border border-white/20 bg-black/10 p-5 backdrop-blur-sm">
                      <p className="text-sm text-[#fff1df]">Featured item</p>
                      <div>
                        <h3 className="font-display text-2xl font-semibold">
                          Walnut Pour-Over Set
                        </h3>
                        <p className="mt-2 max-w-xs text-sm leading-6 text-[#fff1df]">
                          Carved stand, stoneware dripper, and hand-thrown mug.
                        </p>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-2xl font-semibold">$64</span>
                        <span className="text-sm text-[#fff1df]">4.9 stars</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.3rem] bg-[#f3dec1] p-4 text-[#3b2314]">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#7a4019]">
                        Fast filters
                      </p>
                      <p className="mt-3 text-sm leading-6">
                        Search by category, price, or keyword to find pieces with
                        a real point of view.
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#e8c99a]">
                        Seller dashboard
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#f5e8db]">
                        Manage listings, update inventory, and keep your craft
                        story current.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {featuredCategories.map((category) => (
                  <article
                    key={category.name}
                    className="rounded-[1.4rem] border border-[#ead9c7] bg-white p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4019]">
                      {category.name}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#604837]">
                      {category.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="marketplace"
          className="border-y border-[#ead9c7] bg-[#fffaf5]/90 backdrop-blur-sm"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a4019]">
                Why it feels different
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-[#3b2314]">
                A warmer marketplace built around makers, not just products.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {marketplaceHighlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-[#e7d3be] bg-white p-6 shadow-[0_12px_30px_rgba(59,35,20,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3dec1] text-sm font-semibold text-[#7a4019]">
                    {item.title.slice(0, 1)}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[#3b2314]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#604837]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7a4019]">
                Featured this week
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-[#3b2314]">
                Crafted objects that feel personal before they even arrive.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#604837]">
              The landing page introduces the future catalog with rich previews,
              clear pricing, and enough texture to hint at the full shopping
              experience without overwhelming first-time visitors.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.88fr]">
            <div className="grid gap-6 md:grid-cols-3">
              {sampleProducts.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[1.8rem] border border-[#ead9c7] bg-white shadow-[0_18px_45px_rgba(59,35,20,0.08)]"
                >
                  <div className={`h-52 bg-gradient-to-br ${product.tone}`} />
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a4019]">
                      {product.maker}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-[#3b2314]">
                      {product.name}
                    </h3>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-base text-[#604837]">Small-batch release</span>
                      <span className="text-lg font-semibold text-[#3b2314]">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside
              id="makers"
              className="rounded-[2rem] bg-[#4a7c59] p-8 text-[#f7f1e8] shadow-[0_26px_60px_rgba(74,124,89,0.25)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#dfeadf]">
                For artisans
              </p>
              <h2 className="mt-4 max-w-sm font-display text-4xl font-semibold">
                Your work deserves a storefront with character.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#eef5ef]">
                Seller tools will make it easy to publish listings, tell your
                story, upload photos, and manage inventory from one protected
                dashboard.
              </p>

              <ul className="mt-8 space-y-4 text-sm leading-7 text-[#f2f8f3]">
                <li className="rounded-[1.2rem] border border-white/15 bg-white/10 px-4 py-3">
                  Listing form with category, pricing, quantity, and images
                </li>
                <li className="rounded-[1.2rem] border border-white/15 bg-white/10 px-4 py-3">
                  Seller profile with bio, location, and product collection
                </li>
                <li className="rounded-[1.2rem] border border-white/15 bg-white/10 px-4 py-3">
                  Dashboard controls for editing, deleting, and tracking reviews
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section
          id="join"
          className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24"
        >
          <div className="overflow-hidden rounded-[2.4rem] border border-[#d9b794] bg-[#3b2314] px-7 py-10 text-[#fdf8f3] shadow-[0_28px_80px_rgba(59,35,20,0.24)] sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e8c99a]">
                  Next step
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold">
                  The first sprint starts with a homepage that sells the vision.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#f4e7d9]">
                  This landing page gives your team a strong visual direction for
                  the rest of the build: warm artisan branding, clear buyer and
                  seller pathways, and reusable card patterns for the catalog and
                  profile flows.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full bg-[#c9813a] px-6 py-3.5 text-sm font-semibold text-[#3b2314] transition hover:bg-[#d79852]"
                >
                  Review the homepage
                </a>
                <a
                  href="#marketplace"
                  className="inline-flex items-center justify-center rounded-full border border-[#e1c7af] px-6 py-3.5 text-sm font-semibold text-[#fdf8f3] transition hover:bg-white/10"
                >
                  Plan the next section
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
