import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/winery-1.jpg"
          alt="Vineyard rows at golden hour"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-burgundy/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-cream leading-none mb-6">
            {site.brandName}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-cormorant text-xl md:text-2xl italic text-cream/90 leading-relaxed max-w-2xl mx-auto mb-10">
            {site.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tasting-experiences" className="btn-outline">
              Tasting Experiences
            </Link>
            <Link href="/wine-tourism" className="btn-outline">
              Wine Tourism
            </Link>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-cream/60">
            Scroll
          </span>
          <div className="w-px h-10 bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* ── Three feature tiles ───────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream">
              Pour yourself a glass, and browse.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              {
                href: '/tasting-experiences',
                label: 'Tasting Experiences',
                headline: 'The Table Where Wine Makes Sense',
                description:
                  'An evening where the glass is a starting point, not the main event. Themed food pairings, shared conversations, wine made to be enjoyed. Available for private dinners too.',
                image: '/images/photo-tasting-tile.jpg',
                cta: 'Discover',
              },
              {
                href: '/wine-tourism',
                label: 'Wine Tourism',
                headline: 'Out of Office: Wine Tasting',
                description:
                  'Some wines are just understood better once you stand where they were made. Immersive journeys into some of the world\'s greatest wine regions.',
                image: '/images/winery-thumb-2.jpg',
                cta: 'Explore',
              },
              {
                href: '/stories-and-trends',
                label: 'Stories & Trends',
                headline: 'Read Between the Vines',
                description:
                  'Where the pen is mightier than the bottle. Dispatches from the road, a glimpse into the story behind the bottle, and the data behind the trends.',
                image: '/images/photo-writing-tile.jpg',
                cta: 'Read',
              },
            ].map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group relative overflow-hidden min-h-[520px] flex flex-col justify-end"
              >
                <Image
                  src={tile.image}
                  alt={tile.headline}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40"
                />
                {/* Stronger scrim on mobile, where the text block is taller
                    and would otherwise run into the brighter part of the photo. */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/20 md:from-charcoal/90 md:via-charcoal/30 md:to-transparent" />
                <div className="relative z-10 p-8">
                  <p className="font-montserrat text-[9px] tracking-[0.35em] uppercase text-cream mb-3">
                    {tile.label}
                  </p>
                  <h3 className="font-cormorant text-2xl md:text-3xl text-cream font-light mb-3">
                    {tile.headline}
                  </h3>
                  <p className="font-montserrat text-xs text-cream/80 leading-relaxed mb-5">
                    {tile.description}
                  </p>
                  <span className="font-montserrat text-[10px] tracking-widest uppercase text-gold border-b border-gold/50 pb-0.5 group-hover:border-gold transition-colors">
                    {tile.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/photo-cta-outdoor.jpg"
          alt="Wine glass on an outdoor table in autumn"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-burgundy/75" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-4 leading-tight">
            A great wine goes hand-in-hand with great memories.
          </h2>
          <p className="font-cormorant text-2xl md:text-3xl italic text-cream/80 mb-8">
            Ready to create yours?
          </p>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <Link href="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
