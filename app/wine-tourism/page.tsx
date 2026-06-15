import Image from 'next/image'
import Link from 'next/link'
import { partners } from '@/content/partners'
import { experiences } from '@/content/experiences'

export const metadata = {
  title: 'Wine Tourism — Cork To Table',
  description:
    'Bespoke wine tourism experiences curated by Rohan Modwel. Winery partnerships, harvest trips, and journeys built around the world\'s great wine regions.',
}

export default function WineTourismPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/winery-thumb-1.jpg"
          alt="Vineyard at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="section-label text-gold mb-4">Wine Tourism</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Where the journey begins in the vineyard.
          </h1>
        </div>
      </section>

      {/* ── Manifesto ────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-6">Why Wine Travel?</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-8">
            The best way to understand a wine is to stand in the place it came from.
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose">
            Wine tourism is not about collecting stamps in a passport or ticking off famous labels. It is about the conversation you have with a winemaker at the end of a long harvest day, the way the light falls across a valley at 6am, the meal that was never on any menu. We build trips for people who want to understand wine from the inside — and come home knowing a place, not just a bottle.
          </p>
        </div>
      </section>

      {/* ── Partners ─────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="section-label text-gold mb-4">Winery Partners</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream max-w-2xl">
              Destinations we work with directly.
            </h2>
            <p className="font-montserrat text-xs text-cream/50 mt-4 max-w-xl leading-relaxed">
              Every partnership on this page is personal. We have visited, tasted, and built relationships with the people behind each estate. These are not brochure recommendations — they are places we stand behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <Link
                key={partner.slug}
                href={`/partners/${partner.slug}`}
                className="group relative overflow-hidden bg-burgundy/20 border border-cream/10 hover:border-gold/50 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                </div>
                <div className="p-8">
                  <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-gold mb-2">
                    {partner.region} · {partner.country}
                  </p>
                  <h3 className="font-cormorant text-2xl md:text-3xl text-cream font-light mb-3">
                    {partner.name}
                  </h3>
                  <p className="font-cormorant text-lg italic text-cream/60 mb-4">
                    {partner.tagline}
                  </p>
                  <p className="font-montserrat text-xs text-cream/60 leading-relaxed mb-6">
                    {partner.shortDescription}
                  </p>
                  {partner.comingSoon ? (
                    <span className="font-montserrat text-[10px] tracking-widest uppercase text-gold/60 border border-gold/30 px-4 py-2">
                      Experiences Coming Soon
                    </span>
                  ) : (
                    <span className="font-montserrat text-[10px] tracking-widest uppercase text-gold border-b border-gold/50 pb-0.5 group-hover:border-gold transition-colors">
                      View Experiences →
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Placeholder for more partners */}
          <div className="mt-8 border border-dashed border-cream/20 p-10 text-center">
            <p className="font-cormorant text-2xl italic text-cream/40 mb-2">
              More partnerships in development.
            </p>
            <p className="font-montserrat text-[10px] tracking-widest uppercase text-cream/30">
              New destinations announced as confirmed
            </p>
          </div>
        </div>
      </section>

      {/* ── Signature Experiences ────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-burgundy">
              Signature Wine Experiences
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="border border-burgundy/15 p-8 hover:border-gold transition-colors duration-300 group"
              >
                <p className="text-3xl mb-5">{exp.icon}</p>
                <h3 className="font-cormorant text-2xl text-burgundy font-light mb-3 group-hover:text-gold transition-colors">
                  {exp.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="font-montserrat text-xs text-mid leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden bg-burgundy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Ready to plan?</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6">
            Tell us where you want to go.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-montserrat text-xs text-cream/70 leading-loose max-w-xl mx-auto mb-10">
            Every itinerary is built from scratch — around your pace, your palate, and the kind of travel that means something. Get in touch and we will take it from there.
          </p>
          <Link href="/contact" className="btn-outline">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
