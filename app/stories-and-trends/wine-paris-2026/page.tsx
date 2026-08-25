import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Wine Paris 2026: A World Uncorked — Cork To Table',
  description:
    'Reflections from Wine Paris 2026 through an Indian lens — on the grandeur of the fair, the wines tasted, and why India is now an active strategic priority for the global wine industry.',
}

export default function WineParis2026Page() {
  return (
    <>
      {/* ── Article header ───────────────────────────────────────── */}
      <section className="bg-burgundy pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Travel · Industry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-cream leading-tight mb-3">
            Wine Paris 2026: A World Uncorked
          </h1>
          <p className="font-cormorant text-2xl italic text-cream/70 mb-6">
            Reflections from the Global Stage Through an Indian Lens
          </p>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="font-montserrat text-[11px] tracking-widest uppercase text-cream/60">
            February 2026
          </p>
          <p className="font-montserrat text-[11px] italic text-cream/50 leading-relaxed mt-4">
            This piece was first published in the{' '}
            <a
              href="https://www.indianwineacademy.com/articles/item_3_973/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold border-b border-gold/40 hover:border-gold transition-colors"
            >
              Indian Wine Academy
            </a>{' '}
            newsletter.
          </p>
        </div>
      </section>

      {/* ── Featured image ───────────────────────────────────────── */}
      <div className="relative h-[50vh] min-h-[320px]">
        <Image
          src="/images/photo-wine-paris-hero.jpg"
          alt="Wine Paris 2026 trade exhibition hall"
          fill
          className="object-cover"
          priority
        />
        {/* TODO: replace with Porte de Versailles hall image from the article document */}
      </div>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="font-montserrat text-sm text-charcoal leading-loose space-y-6">
            <p>
              A wet and blustery day kicked off the monumental three-day Wine Paris 2026 trade show at the Porte de Versailles exhibition centre on the 9th of February. A visit by the French President, Emmanuel Macron, marked the official inauguration, followed by the muffled echoes of footsteps and the rising hum of conversation; thousands of exhibitors, importers, media representatives, critics, business owners, and general enthusiasts filling the vast venue and its several halls very quickly and efficiently.
            </p>
            <p>
              The twenty-two hectare exhibition centre consisting of seven separate pavilions were all occupied to the brim, signifying the grandeur of the event. French winemakers occupied the largest pavilion, with thousands of exhibitors setting up their stations across three floors. Italy followed up second with their own pavilion, while other regions across Europe and the rest of the world were evenly distributed amongst the other halls. The area covered while wandering through any of the stalls, the designated food areas, as well as the vast open space that exists when travelling between some pavilions, was almost guaranteed to ensure your 20K steps for the day. For most people, that wasn&apos;t a problem; the sheer volume and quality of wine made sure of that.
            </p>
            <p>
              As a visitor, there was always a tendency to be overwhelmed. Questions such as &lsquo;Which stalls should I visit?&rsquo;, &lsquo;Whom do I meet with?&rsquo;, &lsquo;Will I get to taste wines from all the different regions being showcased?&rsquo;, flooded the mind. Thankfully, the organisers created an efficient meeting scheduling system which allowed each exhibitor and visitor to conduct their homework in advance and fix up visits to their preferred stalls on a calendarised portal. And suddenly, a potentially overwhelming prospect was turned into a more structured and purposeful one. At no point was any area too crowded or too empty and interactions were more or less seamless, a very impressive feat.
            </p>

            <h2 className="font-cormorant text-2xl font-light text-burgundy pt-4">
              The Wines
            </h2>
            <p>
              Now, onto the wines. It&apos;s hard to describe where to even begin. No one room was short of quality, be it a Semillon from Hunter Valley in Australia, a Cabernet Sauvignon from Stellenbosch in South Africa, or an aged Barolo from Piedmont in Italy. On top of that, visitors had the privilege of trying out labels from unique regions and grape varieties. The earthy Silvaner from Germany in their distinctive Bocksbeutel flasks, the white peppery Grüner Veltliner from Austria, the Liatiko from Crete in Greece (an indigenous red variety with roots stretching back to ancient Greece), or the Verdejo from Rueda in Spain (their spirited answer to Sauvignon Blanc). One tasting which exemplified this enthralling sensation of novelty was the amber wine of Georgia, produced via an 8,000-year-old tradition of burying egg-shaped clay vessels, known as <em>Qvevri</em>, underground to ferment and store the wine on its grape skins.
            </p>
            <p>
              The addition of free-for-all regional tasting sessions and masterclasses made the overall experience more holistic. A journey through Germany&apos;s different wine regions and the different expressions of Riesling emerging from them was one tasting series any wine enthusiast would wax lyrical about, and that&apos;s before we even arrived at the rare nectar-like Beerenauslese and Trockenbeerenauslese wines. Riesling&apos;s aromatic profile and optional touch of residual sweetness also makes it a compelling pairing candidate for spiced Indian food, which was a popular talking point amongst many German and Austrian producers. Another tasting series which could not go unnoticed was the Napa Valley Cabernet Sauvignon Masterclass held by the USA booth. This wine already has strong aspirational appeal in luxury and hospitality contexts, and with its rich, robust, and yet elegantly structured characteristics, it takes just one tasting to understand why.
            </p>
            <p>
              The odd quirky moment also found its way into proceedings. One of these was a blind tasting challenge organized by the Association de la Sommellerie Internationale (ASI), hosted by sommelier Raimonds Tomsons. When the wines were poured, the look of absolute incredulity on the participants&apos; faces (mine included) said it all: it immediately became clear that these were fortified wines. Tasting these blind was tricky for the palate, to say the least, but a remarkable learning opportunity for those venturing into the world of Sherries, Ports, and Muscats. As Mr. Tomsons rightfully reminded us, while we get lost in an array of reds and whites, we must not forget the significance of fortified wines in shaping wine culture as we know it.
            </p>

            <h2 className="font-cormorant text-2xl font-light text-burgundy pt-4">
              India&apos;s Moment
            </h2>
            <p>
              Another objective in which Wine Paris did not fall short was the dissemination of industry knowledge via seminars, interviews, and panel discussions. Any representative of the Indian wine industry would have been thrilled to learn that a dedicated panel had been organised to deliberate on the recently announced Free Trade Agreement (FTA) between India and the EU. Featuring India&apos;s first and only Master of Wine, Sonal Holland, the discussion emphasised the transition towards a new era for wine consumption, a &lsquo;Golden Period&rsquo; for wine in India. It was clear that tariff adjustments will significantly impact growth, and potentially even trigger a cultural reimagining of India&apos;s relationship with wine.
            </p>
            <p>
              As anticipated, enthusiasm about India among many producers at the fair, particularly those from EU nations, was genuine and infectious. Even smaller boutique and family-owned producers now actively seek out opportunity in a prospect that guarantees growth in the near future, especially as traditional markets have faced mounting headwinds in recent times. A 50% surge in wine imports during 2025, before the FTA has even come into force, is testament to this belief. In a nutshell, if there is one overarching message that is relevant to each and every India-centric conversation that echoed through the halls of Wine Paris, it&apos;s that India is no longer a potential and distant prospect, but an active strategic priority. The time to act truly is now.
            </p>
          </div>
        </div>
      </section>

      {/* ── Back link ────────────────────────────────────────────── */}
      <section className="bg-cream pb-20 px-6">
        <div className="max-w-2xl mx-auto border-t border-gold/20 pt-8">
          <Link
            href="/stories-and-trends"
            className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy hover:text-rose transition-colors"
          >
            ← Back to Stories &amp; Trends
          </Link>
        </div>
      </section>
    </>
  )
}
