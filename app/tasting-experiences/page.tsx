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
    icon: '🍛',
    title: 'Wine & Indian Cuisine',
    description:
      'We all know Indian food is among the most complex in the world. This evening explores what actually works, and why. Spiced dishes and slow cooked meats await.',
  },
  {
    icon: '🗺️',
    title: 'A Journey Through One Region',
    description:
      'A single region, explored in depth. Bordeaux, Tuscany, California, Mendoza, Barossa... the list goes on. Many wines, one common story.',
  },
  {
    icon: '🌿',
    title: 'The Language of Terroir',
    description:
      'What does a wine taste like when the land it comes from has a distinct character? Soil, altitude, weather systems, water bodies, hills. It all plays a subtle yet critical part.',
  },
  {
    icon: '✍️',
    title: 'Choose Your Own Theme',
    description:
      'Every occasion is different. A birthday celebration, a corporate dinner, a curated experience for a specific guest list. We can build the theme around the people and the moment.',
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Tasting Experiences
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-8">
            An evening built around the bottle.
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose mb-6">
            The best thing about an evening with wine is that it gets better with company, food, and a bit of context. The kind that makes you look at a glass differently and think: I'd like another one of those. Bring an appetite, go back home with a memory.
          </p>
        </div>
      </section>

      {/* ── Themes ───────────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream">
              Tasting Themes
            </h2>
            <div className="divider-gold" />
            <p className="font-montserrat text-xs text-cream/60 leading-relaxed max-w-xl mx-auto">
              Wine and food is such a vast domain. Here's some ways in which we narrow it down.
            </p>
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
                Whether it's a larger dinner party or a more intimate gathering for guests, we work with the host to choose a theme that suits the occasion, curate the wines and food pairings, and lead the evening at whatever level of depth the table wants, all the way from casual exploration to a more structured guided tasting.
              </p>
              <p className="font-montserrat text-sm text-mid leading-loose italic">
                Can be hosted in a public venue or host's residence as per preference. Available for travel to other cities on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-burgundy py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6">
            Planning an evening around wine?
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
