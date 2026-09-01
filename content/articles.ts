export type Article = {
  slug: string
  title: string
  subtitle?: string
  dateLabel: string
  category: string
  excerpt: string
  thumbnail: string
  thumbnailAlt: string
  isSubstack?: boolean
  substackUrl?: string
  /**
   * Set true to pull an article off the site without deleting it.
   * Hidden articles are filtered out of the Stories & Trends listing,
   * and their route folder should be prefixed with an underscore so
   * Next.js stops building the page (see app/stories-and-trends/).
   */
  hidden?: boolean
}

export const articles: Article[] = [
  {
    slug: 'the-reward-for-curiosity',
    title: 'The Reward for Curiosity',
    subtitle: 'The wine palate grows over time, and better wine doesn\'t have to cost more',
    dateLabel: 'August 2026',
    category: 'Research · Substack',
    excerpt:
      'Quality can be found across all varieties and labels. So why do many wine drinkers still feel unsure of venturing beyond the territory of what is already known? The data has an interesting story to tell.',
    thumbnail: '/images/photo-palate-arc.jpg',
    thumbnailAlt: 'The palate arc — a four-phase wheel of wine preference',
    isSubstack: true,
    substackUrl: '', // leave empty until the post is live; the page then shows "Coming Soon"
  },
  {
    slug: 'every-wine-has-its-moment',
    title: 'Every Wine Has Its Moment',
    subtitle: 'How season, setting, company, or even music changes the wine in your glass',
    dateLabel: 'April 2026',
    category: 'Research · Substack',
    excerpt:
      'Why does a cold evening make you reach for something heavier without thinking? Why does a glass with friends feel different from the one alone? The data and the voices have answers.',
    thumbnail: '/images/photo-substack-chart.jpg',
    thumbnailAlt: 'Wine consumption data and research visualisations',
    isSubstack: true,
    substackUrl: 'https://corktotable.substack.com/p/every-wine-has-its-moment',
  },
  {
    slug: 'spain-wine-travel-diaries',
    title: 'Wine Travel Diaries: Spain',
    subtitle: 'From the Duero to the Ebro',
    dateLabel: 'April 2026',
    category: 'Travel',
    excerpt:
      'Driving out of Madrid, the flat plains of the Meseta eventually give way to river valleys and vine-covered slopes. Three wineries, one grape variety, three completely different stories about soil, altitude, and commitment.',
    thumbnail: '/images/photo-spain-hero.jpg',
    thumbnailAlt: 'Vineyards along a Spanish river valley',
    // HIDDEN Aug 2026 — Liquid Magazine (India) is publishing this piece
    // in October 2026 and asked for it to come off the site until then.
    // TO RESTORE after their issue is out:
    //   1. delete this `hidden: true` line
    //   2. rename app/stories-and-trends/_spain-wine-travel-diaries
    //      back to spain-wine-travel-diaries (drop the underscore)
    //   3. add a "First published in Liquid Magazine, October 2026" credit
    hidden: true,
  },
  {
    slug: 'wine-paris-2026',
    title: 'Wine Paris 2026: A World Uncorked',
    subtitle: 'Reflections from the Global Stage Through an Indian Lens',
    dateLabel: 'February 2026',
    category: 'Travel · Industry',
    excerpt:
      'A wet and blustery day in Paris, a visit from the French President, and thousands of exhibitors filling the halls of Porte de Versailles. One message stood out: the Indian market is no longer a distant prospect.',
    thumbnail: '/images/photo-wine-paris-hero.jpg',
    thumbnailAlt: 'Wine Paris 2026 trade exhibition hall',
  },
  {
    slug: 'greece-winemaking-powerhouse',
    title: "Greece's Emergence as a Winemaking Powerhouse",
    dateLabel: 'November 2025',
    category: 'Wine Regions',
    excerpt:
      'Over 300 indigenous grape varieties, a winemaking history stretching back 4,000 years, and a quiet revival the wider wine world has only recently begun to appreciate.',
    thumbnail: '/images/photo-greece-hero.jpg',
    thumbnailAlt: 'Greek vineyard landscape',
  },
]

/**
 * Find one article by its slug. Article pages use this to read their own
 * Substack post URL, so each piece links to its own post rather than to the
 * publication homepage. An empty substackUrl makes the page fall back to
 * "Substack · Coming Soon".
 */
export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
