import Image from 'next/image'
import Link from 'next/link'
import { about } from '@/content/about'
import { site } from '@/content/site'

export const metadata = {
  title: 'About — Rohan Modwel · Cork To Table',
  description:
    'WSET Level 3 Distinction wine professional, writer, and travel consultant. The person behind Cork To Table.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-charcoal">
        <Image
          src="/images/photo-cellar.jpg"
          alt="Vaulted winery cellar with oak barrels"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            {about.headline}
          </h1>
        </div>
      </section>

      {/* ── Intro + Bio ──────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Brand intro */}
          <div className="max-w-3xl mb-16">
            <p className="font-montserrat text-sm text-charcoal leading-loose">
              {about.intro}
            </p>
            <div className="divider-gold-left" />
          </div>

          {/* About the Founder label */}
          <p className="section-label mb-10">About the Founder</p>

          {/* Headshot + bio — side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start mb-12">

            {/* Headshot */}
            <div className="relative flex-shrink-0 w-fit pb-6 md:pb-4">
              <div className="relative w-44 h-60 overflow-hidden">
                <Image
                  src="/images/headshot.jpg"
                  alt="Rohan Modwel — Cork To Table"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '40% 20%' }}
                />
              </div>
              {/* Credential badge */}
              <div className="absolute -bottom-2 -right-3 bg-burgundy px-4 py-3 shadow-lg">
                <p className="font-montserrat text-[8px] tracking-[0.2em] uppercase text-gold mb-1">
                  {site.credentials}
                </p>
                <p className="font-cormorant text-sm text-cream font-light">
                  {site.founderName}
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="pt-4 md:pt-2">
              {about.bio.map((para, i) => (
                <p
                  key={i}
                  className={`font-montserrat text-sm text-charcoal leading-loose ${
                    i > 0 ? 'mt-5' : ''
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Quote — full width below both headshot and bio */}
          <div className="divider-gold-left" />
          <blockquote className="font-cormorant text-xl md:text-2xl italic text-burgundy leading-relaxed border-l-2 border-gold pl-6">
            &ldquo;{about.philosophy}&rdquo;
          </blockquote>
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
                <p className="font-cormorant text-lg text-cream font-light leading-snug whitespace-pre-line">
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
