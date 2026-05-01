import Image from 'next/image'
import Link from 'next/link'
import { partners } from '@/content/partners'

export const metadata = {
  title: 'Bhutan Wine Company — Cork To Table',
  description: 'Wine at the edge of the world. Bespoke wine tourism experiences with the Bhutan Wine Company in the Paro Valley.',
}

export default function BhutanPage() {
  const partner = partners.find((p) => p.slug === 'bhutan-wine-company')!

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link
            href="/wine-tourism"
            className="font-montserrat text-[10px] tracking-widest uppercase text-gold/70 hover:text-gold transition-colors mb-6 inline-block"
          >
            ← Wine Tourism
          </Link>
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            {partner.region} · {partner.country}
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            {partner.name}
          </h1>
          <p className="font-cormorant text-xl italic text-cream/70 mt-3">
            {partner.tagline}
          </p>
        </div>
      </section>

      {/* ── About the estate ─────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-6">About the Estate</p>
          <h2 className="font-cormorant text-3xl font-light text-burgundy leading-relaxed mb-6">
            {partner.shortDescription}
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose">
            {partner.fullDescription}
          </p>
        </div>
      </section>

      {/* ── Experiences ──────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="section-label mb-4">Curated Experiences</p>
            <h2 className="font-cormorant text-4xl font-light text-cream">
              What a journey here looks like.
            </h2>
          </div>

          {partner.comingSoon ? (
            <div className="border border-dashed border-gold/30 p-16 text-center max-w-2xl mx-auto">
              <p className="font-cormorant text-3xl italic text-cream/60 mb-4">
                Experience packages coming soon.
              </p>
              <p className="font-montserrat text-xs text-cream/40 leading-relaxed mb-8">
                We are currently finalising the details of our partnership with {partner.name}. To register your interest or ask a question, get in touch directly.
              </p>
              <Link href="/contact" className="btn-outline">
                Register Your Interest
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partner.experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="border border-cream/10 p-8 hover:border-gold/50 transition-colors duration-300"
                >
                  <h3 className="font-cormorant text-2xl text-cream font-light mb-3">
                    {exp.title}
                  </h3>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="font-montserrat text-xs text-cream/60 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Enquire ──────────────────────────────────────────────── */}
      <section className="bg-burgundy py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Interested?</p>
          <h2 className="font-cormorant text-4xl font-light text-cream mb-6">
            Start with the questionnaire.
          </h2>
          <p className="font-montserrat text-xs text-cream/70 leading-loose mb-8">
            Fill in your travel and wine preferences and we will build a journey around {partner.name} that fits you perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/travel-planning#questionnaire" className="btn-outline">
              Plan My Journey
            </Link>
            <Link href="/contact" className="btn-outline">
              Enquire Directly
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
