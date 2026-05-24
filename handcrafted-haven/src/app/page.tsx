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

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3b2314] text-sm font-semibold uppercase tracking-[0.28em] text-[#fdf8f3]">
            HH
          </div>
          <div>
            <p className="font-display text-lg font-semibold text-[#3b2314]">
              Handcrafted Haven
            </p>
            <p className="text-sm text-[#7a5a45]">
              Handmade goods, artisan stories
            </p>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-medium text-[#5b4334] md:flex"
        >
          <a href="#marketplace" className="transition hover:text-[#7a4019]">
            Marketplace
          </a>
          <a href="#makers" className="transition hover:text-[#7a4019]">
            Makers
          </a>
          <a href="#featured" className="transition hover:text-[#7a4019]">
            Featured
          </a>
          <a
            href="#join"
            className="rounded-full border border-[#b88b63] px-4 py-2 text-[#3b2314] transition hover:bg-[#f3dec1]"
          >
            Become a seller
          </a>
        </nav>
      </header>

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

        
      </main>

      <footer className="border-t border-[#ead9c7] bg-[#fffaf5]/75">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-[#7a5a45] sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>Handcrafted Haven is a marketplace concept for independent artisans and thoughtful shoppers.</p>
          <p>Built for WDD430 with accessibility, responsive design, and seller-first flows in mind.</p>
        </div>
      </footer>
    </div>
  );
}
