import Image from 'next/image'
import Link from 'next/link'
import Questionnaire from '@/components/Questionnaire'

export const metadata = {
  title: 'Travel Planning — Cork To Table',
  description: 'Bespoke wine travel planning by Rohan Modwel. Fill in the Travel & Wine Personality Questionnaire and we will build a journey around you.',
}

export default function TravelPlanningPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476364174823-3a23f4aa5229?w=1600&q=80"
          alt="Scenic wine country road"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="section-label text-gold mb-4">Travel Planning</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Built around you. Every time.
          </h1>
        </div>
      </section>

      {/* ── What I offer ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-6">What I Offer</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-6">
                Wine travel planning that goes beyond the itinerary.
              </h2>
              <div className="divider-gold-left" />
              <p className="font-montserrat text-sm text-charcoal leading-loose">
                Every trip is built from scratch around the person taking it. I handle the logistics so you can focus on the experience — from finding the right winery access to knowing which table to book, which train to take, and where the light is best at dusk.
              </p>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              {[
                { title: 'Luxury Stays', desc: 'Vineyard estates, boutique hotels, and wine-country accommodation curated for character, not just comfort.' },
                { title: 'Bespoke Itineraries', desc: 'Day-by-day plans built around your pace, your palate, and the experiences that matter most to you.' },
                { title: 'Winery Access', desc: 'Personal introductions and private visits to estates that do not advertise on booking platforms.' },
                { title: 'Full Logistics', desc: 'Flights, transfers, dining reservations, visas — everything, or just the parts you need help with.' },
                { title: 'Travel Perks', desc: 'As a travel consultant, I work with operators who offer complimentary upgrades, amenity credits, and preferred rates.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-px bg-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-montserrat text-xs font-semibold tracking-widest uppercase text-burgundy mb-1">{item.title}</p>
                    <p className="font-montserrat text-xs text-mid leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Questionnaire ────────────────────────────────────────── */}
      <section id="questionnaire" className="bg-cream border-t border-burgundy/10 py-8">
        <Questionnaire />
      </section>

      {/* ── WhatsApp CTA ─────────────────────────────────────────── */}
      <section className="bg-burgundy py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Prefer to talk first?</p>
          <h2 className="font-cormorant text-3xl font-light text-cream mb-6">
            Reach us on WhatsApp.
          </h2>
          <p className="font-montserrat text-xs text-cream/70 leading-loose mb-8">
            No forms needed — just message us directly and we will take it from there.
          </p>
          <a
            href="https://wa.me/919871576702"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Open WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
