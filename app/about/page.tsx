import Image from 'next/image'
import Link from 'next/link'
import { about } from '@/content/about'
import { site } from '@/content/site'

export const metadata = {
  title: 'About — Rohan Modwel · Cork To Table',
  description: 'WSET Level 3 Distinction wine professional, writer, and travel consultant. The person behind Cork To Table.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden bg-charcoal">
        <Image
          src="/images/photo-cellar.jpg"
          alt="Vaulted winery cellar with oak barrels"
          fill
          className="object-cover opacity-60"
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
                <Image
                  src="/images/headshot.jpg"
                  alt="Rohan Modwel — Cork To Table"
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

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <Link href="/contact" className="btn-outline-dark">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
