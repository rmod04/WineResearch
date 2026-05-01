import Image from 'next/image'
import Link from 'next/link'
import { about } from '@/content/about'
import { site } from '@/content/site'

export const metadata = {
  title: 'About — Rohan Modwel · Cork To Table',
  description: 'WSET Level 3 Distinction wine professional, writer, and travel consultant. The person behind Cork To Table and The Wine Meridian.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1600&q=80"
          alt="Wine country at dusk"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="section-label text-gold mb-4">About</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight whitespace-pre-line max-w-2xl">
            {about.headline}
          </h1>
        </div>
      </section>

      {/* ── Bio & headshot ───────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Headshot */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Replace src with your actual headshot path once uploaded */}
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Rohan Modwel"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Credential badge */}
              <div className="absolute -bottom-6 -right-4 bg-burgundy px-6 py-4 shadow-lg">
                <p className="font-montserrat text-[9px] tracking-[0.25em] uppercase text-gold mb-1">
                  {site.credentials}
                </p>
                <p className="font-cormorant text-lg text-cream font-light">
                  {site.founderName}
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="pt-4 md:pt-8">
              <p className="section-label mb-6">The Story</p>
              {about.bio.map((para, i) => (
                <p key={i} className={`font-montserrat text-sm text-charcoal leading-loose ${i > 0 ? 'mt-5' : ''}`}>
                  {para}
                </p>
              ))}
              <div className="divider-gold-left" />
              <blockquote className="font-cormorant text-xl italic text-burgundy leading-relaxed border-l-2 border-gold pl-6">
                &ldquo;{about.philosophy}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials grid ─────────────────────────────────────── */}
      <section className="bg-burgundy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.credentials.map((cred) => (
              <div key={cred.label} className="text-center">
                <div className="w-8 h-px bg-gold mx-auto mb-4" />
                <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                  {cred.label}
                </p>
                <p className="font-cormorant text-lg text-cream font-light leading-snug">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── C2T pillars ──────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Cork To Table</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy mb-4">
            Three ways to explore wine with us.
          </h2>
          <div className="divider-gold" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'C2T Experiences',
                label: 'Wine Tourism',
                desc: 'Bespoke journeys into the world\'s great wine regions. Built around you.',
                href: '/wine-tourism',
                cta: 'Explore',
              },
              {
                name: 'Cork To Table Events',
                label: 'Supper Club & Dining',
                desc: 'Wine dinners, tasting events, and community experiences based in India.',
                href: site.instagramUrl,
                cta: 'Instagram',
                external: true,
              },
              {
                name: 'Cork To Data Table',
                label: 'Substack',
                desc: 'Data-driven research stories on the wine world — trends, numbers, and narratives.',
                href: site.substackUrl || '#',
                cta: site.substackUrl ? 'Read' : 'Coming Soon',
                external: !!site.substackUrl,
                disabled: !site.substackUrl,
              },
            ].map((pillar) => (
              <div key={pillar.name} className="border border-burgundy/15 p-8 text-left hover:border-gold transition-colors duration-300 group">
                <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold mb-3">{pillar.label}</p>
                <h3 className="font-cormorant text-xl text-burgundy font-light mb-3 group-hover:text-gold transition-colors">
                  {pillar.name}
                </h3>
                <p className="font-montserrat text-xs text-mid leading-relaxed mb-6">{pillar.desc}</p>
                {pillar.external ? (
                  <a
                    href={pillar.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy border-b border-burgundy/40 pb-0.5 hover:border-burgundy transition-colors"
                  >
                    {pillar.cta} →
                  </a>
                ) : pillar.disabled ? (
                  <span className="font-montserrat text-[10px] tracking-widest uppercase text-mid/50">
                    {pillar.cta}
                  </span>
                ) : (
                  <Link
                    href={pillar.href}
                    className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy border-b border-burgundy/40 pb-0.5 hover:border-burgundy transition-colors"
                  >
                    {pillar.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-cream mb-6">
            Ready to plan a journey together?
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel-planning#questionnaire" className="btn-outline">
              Start the Questionnaire
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
