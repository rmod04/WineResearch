import Image from 'next/image'
import Link from 'next/link'
import { partners } from '@/content/partners'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const partner = partners.find((p) => p.slug === params.slug)
  if (!partner) return {}
  return {
    title: `${partner.name} — Cork To Table`,
    description: partner.shortDescription,
  }
}

export default function PartnerPage({ params }: { params: { slug: string } }) {
  const partner = partners.find((p) => p.slug === params.slug)
  if (!partner) notFound()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Top fade keeps nav visible over bright images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            {partner.name}
          </h1>
          <p className="font-cormorant text-xl italic text-cream/70 mt-3">
            {partner.tagline}
          </p>
          <p className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gold mt-4">
            {partner.region} · {partner.country}
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
          {partner.quirkLine && (
            <p className="font-montserrat text-sm text-charcoal leading-loose mt-6">
              {partner.quirkLine}
            </p>
          )}
        </div>
      </section>

      {/* ── Experiences ──────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="section-label text-gold mb-4">Curated Experiences</p>
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
                We are currently finalising the details of our partnership with{' '}
                {partner.name}. To register your interest or ask a question, get
                in touch directly.
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

      {/* ── Location map ─────────────────────────────────────────── */}
      {partner.mapEmbed && (
        <section className="bg-cream py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="section-label mb-6">Find Us</p>
            <h2 className="font-cormorant text-3xl font-light text-burgundy mb-8">
              {partner.region}, {partner.country}
            </h2>
            <div className="relative w-full overflow-hidden border border-gold/20" style={{ aspectRatio: '16/7' }}>
              <iframe
                src={partner.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing the location of ${partner.name}`}
              />
            </div>
            {/* Back link below map */}
            <div className="mt-10">
              <Link
                href="/wine-tourism"
                className="font-montserrat text-[11px] tracking-widest uppercase text-burgundy hover:text-burgundy/70 transition-colors"
              >
                ← Back to Wine Tourism
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Ready to plan ────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden bg-burgundy">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6">
            Ready to plan?
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-montserrat text-xs text-cream/70 leading-loose max-w-xl mx-auto mb-10">
            Every itinerary is designed from scratch around your pace, your palate, and your style. Tell us about your plans and we will take it from there.
          </p>
          <Link href="/plan" className="btn-outline">
            Start Planning
          </Link>
        </div>
      </section>
    </>
  )
}
