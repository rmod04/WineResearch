import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/content/site'

export const metadata = {
  title: 'Tasting Experiences — Cork To Table',
  description:
    'Curated wine and food tasting evenings with specific themes. Available for private dinners. Hosted by Rohan Modwel, WSET Level 3 Distinction.',
}

const themes = [
  {
    icon: '🍷',
    title: 'Old World vs New World',
    description:
      'A structured comparison of the same grape across continents — how soil, climate, and philosophy shape what ends up in the glass. Bordeaux versus Napa. Burgundy versus Oregon.',
  },
  {
    icon: '🫒',
    title: 'Wine & Indian Cuisine',
    description:
      'India\'s food is among the most complex in the world. This evening explores what actually works — and why — from aromatic whites with spiced dishes to structured reds with slow-cooked meats.',
  },
  {
    icon: '🗺️',
    title: 'A Journey Through One Region',
    description:
      'A single region, explored in depth. Burgundy, Mosel, Rioja, Barossa — six wines, one story. For those who want to understand not just taste, but place.',
  },
  {
    icon: '🍾',
    title: 'Bubbles Beyond Champagne',
    description:
      'Champagne is the benchmark, but the world of sparkling wine is vast. Crémant, Cava, Franciacorta, Pétillant Naturel — this evening makes the case for looking beyond the name.',
  },
  {
    icon: '🌿',
    title: 'The Language of Terroir',
    description:
      'What does a wine taste like when the land it comes from has a distinct character? Volcanic soils, limestone, chalk, slate — this tasting is about geology you can drink.',
  },
  {
    icon: '✍️',
    title: 'Bespoke Theme',
    description:
      'Every occasion is different. A birthday, a corporate dinner, a curated experience for a specific guest list — we build the theme around the people and the moment.',
  },
]

export default function TastingExperiencesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/photo-dining-hero.jpg"
          alt="Restaurant dining with wine and vineyard views"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="section-label text-gold mb-4">Tasting Experiences</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            An evening built around the bottle.
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-6">What We Host</p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-8">
            Wine and food, in conversation with each other.
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose mb-6">
            A tasting evening is not a class. There is no exam at the end, and no expectation that you arrive knowing anything. What we create instead is a table where wine and food are explored together — where the pairing is the point, and the conversation that follows is the experience.
          </p>
          <p className="font-montserrat text-sm text-charcoal leading-loose">
            Each evening is built around a specific theme — a region, a contrast, a grape, a question worth asking. The food is chosen to complement or challenge the wines, and every bottle comes with the story of the place it came from.
          </p>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label text-gold mb-4">Evening Themes</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream">
              Every evening has a story.
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <div
                key={theme.title}
                className="border border-cream/10 p-8 hover:border-gold/50 transition-colors duration-300 group"
              >
                <p className="text-3xl mb-5">{theme.icon}</p>
                <h3 className="font-cormorant text-2xl text-cream font-light mb-3 group-hover:text-gold transition-colors">
                  {theme.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="font-montserrat text-xs text-cream/60 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Dinners ──────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/photo-private-dinner.jpg"
                alt="A private home dinner with wine pairing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-6">Private Dinners</p>
              <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-6">
                Entirely yours, built for your table.
              </h2>
              <div className="w-8 h-px bg-gold mb-8" />
              <p className="font-montserrat text-sm text-charcoal leading-loose mb-6">
                Every tasting experience can be customised for a private setting — a dinner party, a celebration, a corporate evening, or an intimate gathering for guests who share a love of good wine.
              </p>
              <p className="font-montserrat text-sm text-charcoal leading-loose mb-6">
                We work with the host to choose a theme that suits the occasion, curate the wines and food pairings, and lead the evening at whatever level of depth the table wants — from casual exploration to a more structured guided tasting.
              </p>
              <p className="font-montserrat text-sm text-mid leading-loose italic">
                Hosted in Delhi, and available for travel to other cities on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-burgundy py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Interested?</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6">
            Let&apos;s plan an evening around wine.
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="font-montserrat text-xs text-cream/70 leading-loose max-w-xl mx-auto mb-10">
            Whether it is a one-off tasting or a recurring supper club format, get in touch and we will build something around your guests and your occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-outline">
              Get In Touch
            </Link>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[11px] tracking-widest uppercase px-8 py-3.5 border border-gold/50 text-gold hover:border-gold hover:text-cream transition-all duration-300"
            >
              {site.instagramHandle} on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
