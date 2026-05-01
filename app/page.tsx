import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80"
          alt="Vineyard at golden hour"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-burgundy/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-montserrat text-[11px] tracking-[0.35em] uppercase text-gold mb-6">
            Cork To Table · {site.credentials}
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light text-cream leading-none mb-6">
            {site.websiteName}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="font-cormorant text-xl md:text-2xl italic text-cream/90 leading-relaxed max-w-2xl mx-auto mb-10">
            {site.homepagePositioning}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wine-tourism" className="btn-outline">
              Explore Wine Tourism
            </Link>
            <Link href="/travel-planning#questionnaire" className="btn-outline">
              Plan My Journey
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

      {/* ── Manifesto ────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-6">Our Philosophy</p>
          <blockquote className="font-cormorant text-2xl md:text-3xl font-light italic text-burgundy leading-relaxed">
            &ldquo;{site.homepageManifesto}&rdquo;
          </blockquote>
          <div className="divider-gold" />
          <p className="font-montserrat text-sm text-mid tracking-wide">
            — {site.founderName}, {site.founderTitle}
          </p>
        </div>
      </section>

      {/* ── Three feature tiles ───────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Where To Begin</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream">
              Explore the World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              {
                href: '/wine-tourism',
                label: 'Wine Tourism',
                headline: 'Wine Regions & Partners',
                description:
                  'Immersive journeys into the world\'s great wine regions. Our winery partners, curated experiences, and a trip shaped around your palate.',
                image:
                  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
                cta: 'Explore',
              },
              {
                href: '/travel-planning#questionnaire',
                label: 'The Questionnaire',
                headline: 'Plan Your Journey',
                description:
                  'Tell us who you are, how you travel, and what wine means to you. We\'ll build something around that.',
                image:
                  'https://images.unsplash.com/photo-1476364174823-3a23f4aa5229?w=800&q=80',
                cta: 'Begin',
              },
              {
                href: '/about',
                label: 'About',
                headline: 'Rohan Modwel',
                description:
                  'WSET Level 3 Distinction. Wine professional, writer, and travel consultant. The person behind every itinerary.',
                image:
                  'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80',
                cta: 'Meet Rohan',
              },
            ].map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group relative overflow-hidden aspect-[3/4] flex flex-col justify-end"
              >
                <Image
                  src={tile.image}
                  alt={tile.headline}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent" />
                <div className="relative z-10 p-8">
                  <p className="font-montserrat text-[9px] tracking-[0.35em] uppercase text-gold mb-3">
                    {tile.label}
                  </p>
                  <h3 className="font-cormorant text-2xl md:text-3xl text-cream font-light mb-3">
                    {tile.headline}
                  </h3>
                  <p className="font-montserrat text-xs text-cream/70 leading-relaxed mb-5 hidden md:block">
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
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80"
          alt="Wine country landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-burgundy/75" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Ready to travel?</p>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-6 leading-tight">
            Every great wine tells you where it came from.
            <em className="block mt-2">Shouldn&apos;t you?</em>
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <Link href="/travel-planning#questionnaire" className="btn-outline">
            Start the Questionnaire
          </Link>
        </div>
      </section>
    </>
  )
}
