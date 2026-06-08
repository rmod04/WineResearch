import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'

export const metadata = {
  title: 'Stories & Trends — Cork To Table',
  description:
    'Travel writing, wine data research, and dispatches from the road. Cork To Table\'s writing and research home.',
}

export default function StoriesAndTrendsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <Image
          src="/images/winery-thumb-1.jpg"
          alt="Vineyard at dusk — the view that inspired the writing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="section-label text-gold mb-4">Stories & Trends</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Writing. Research. Wine.
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-6">What Lives Here</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-8">
            The wine world, told in stories and in data.
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose">
            This is where the writing lives. Travel dispatches from wine regions, data-led research on where the wine industry is going, and the occasional piece that doesn&apos;t fit neatly into either category but needed to be written. Substack articles embed here directly — with charts, maps, and the context that makes numbers readable.
          </p>
        </div>
      </section>

      {/* ── Three pillars ────────────────────────────────────────── */}
      <section className="bg-cream pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Tales from My Travels */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/winery-thumb-4.jpg"
                  alt="Harvest — picking grapes in the vineyard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-burgundy/10 transition-colors duration-300" />
              </div>
              <p className="section-label mb-3">From the Road</p>
              <h3 className="font-cormorant text-2xl text-burgundy font-light mb-3">
                Tales from My Travels
              </h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="font-montserrat text-xs text-mid leading-relaxed mb-6">
                Personal dispatches from wine regions, cellar doors, and the places in between. Not reviews — stories. The light, the people, the bottles that meant something.
              </p>
              <span className="font-montserrat text-[10px] tracking-widest uppercase text-mid/50 border border-mid/20 px-4 py-1.5">
                Coming Soon
              </span>
            </div>

            {/* Cork To Table Events */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Wine dinner table"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-burgundy/10 transition-colors duration-300" />
              </div>
              <p className="section-label mb-3">Supper Club · India</p>
              <h3 className="font-cormorant text-2xl text-burgundy font-light mb-3">
                Cork To Table Events
              </h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="font-montserrat text-xs text-mid leading-relaxed mb-6">
                Wine dinners, tasting evenings, and community gatherings based in India. Each event is a table set around a bottle — and the conversation it starts. Follow along on Instagram.
              </p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy border-b border-burgundy/40 pb-0.5 hover:border-burgundy transition-colors"
              >
                {site.instagramHandle} on Instagram →
              </a>
            </div>

            {/* Cork To Data Table — Substack */}
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src="/images/winery-thumb-3.jpg"
                  alt="Late harvest grapes on the vine"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-burgundy/20 group-hover:bg-burgundy/10 transition-colors duration-300" />
              </div>
              <p className="section-label mb-3">Substack · Research</p>
              <h3 className="font-cormorant text-2xl text-burgundy font-light mb-3">
                {site.substackLabel}
              </h3>
              <div className="w-8 h-px bg-gold mb-4" />
              <p className="font-montserrat text-xs text-mid leading-relaxed mb-6">
                Data-led research stories on the wine world — market trends, production shifts, and the statistics behind the headlines. Articles embed here with interactive charts and visuals.
              </p>
              {site.substackUrl ? (
                <a
                  href={site.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy border-b border-burgundy/40 pb-0.5 hover:border-burgundy transition-colors"
                >
                  Read on Substack →
                </a>
              ) : (
                <span className="font-montserrat text-[10px] tracking-widest uppercase text-mid/50 border border-mid/20 px-4 py-1.5">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Substack embed placeholder ───────────────────────────── */}
      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto border border-dashed border-cream/20 p-12 text-center">
          <p className="font-cormorant text-2xl italic text-cream/40 mb-2">
            Substack articles with interactive visuals — coming soon.
          </p>
          <p className="font-montserrat text-[10px] tracking-widest uppercase text-cream/25">
            Research pieces will embed here directly once the publication is live
          </p>
        </div>
      </section>
    </>
  )
}
