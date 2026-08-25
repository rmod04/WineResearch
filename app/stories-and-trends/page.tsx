import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/content/articles'

export const metadata = {
  title: 'Stories & Trends — Cork To Table',
  description:
    'Travel dispatches, wine research, and writing from Rohan Modwel — on wine regions, industry trends, and winery visits.',
}

export default function StoriesAndTrendsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/photo-writing-tile.jpg"
          alt="Writing and research on wine"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Stories &amp; Trends
          </h1>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-relaxed mb-8">
            Stories around wine, told in words instead of flavours.
          </h2>
          <div className="divider-gold-left" />
          <p className="font-montserrat text-sm text-charcoal leading-loose">
            Wine has a way of making things worth writing about. Travel dispatches from wine regions, data-led research on consumer behaviour and where the market is heading, or the occasional piece that refuses to fit neatly into any category. Pour a glass and settle in.
          </p>
        </div>
      </section>

      {/* ── Article list ─────────────────────────────────────────── */}
      <section className="bg-cream pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="divide-y divide-gold/20">
            {articles.filter((a) => !a.hidden).map((article) => (
              <article key={article.slug} className="py-12 first:pt-0">
                <Link
                  href={`/stories-and-trends/${article.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8 md:gap-12 items-start"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.thumbnailAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center py-2">
                    <p className="section-label mb-3">{article.category}</p>
                    <h2 className="font-cormorant text-2xl md:text-3xl font-light text-burgundy leading-tight mb-2 group-hover:text-rose transition-colors duration-300">
                      {article.title}
                    </h2>
                    {article.subtitle && (
                      <p className="font-cormorant text-xl italic text-mid mb-3">
                        {article.subtitle}
                      </p>
                    )}
                    <p className="font-montserrat text-[10px] tracking-widest uppercase text-gold mb-4">
                      {article.dateLabel}
                    </p>
                    <div className="w-8 h-px bg-gold mb-5" />
                    <p className="font-montserrat text-xs text-mid leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <span className="font-montserrat text-[10px] tracking-widest uppercase text-burgundy border-b border-burgundy/40 pb-0.5 w-fit group-hover:border-burgundy transition-colors duration-300">
                      Read Article →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6 mt-16 pt-12 border-t border-gold/20">
            <span className="font-montserrat text-[10px] tracking-widest uppercase text-mid/30 select-none">
              ← Newer
            </span>
            <span className="font-montserrat text-[11px] tracking-widest text-burgundy border border-burgundy px-4 py-1.5">
              01
            </span>
            <span className="font-montserrat text-[10px] tracking-widest uppercase text-mid/30 select-none">
              Older →
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
