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
}

export const articles: Article[] = [
  {
    slug: 'every-wine-has-its-moment',
    title: 'Every Wine Has Its Moment',
    dateLabel: 'April 2026',
    category: 'Research · Substack',
    excerpt:
      'Why does a cold evening make you reach for something heavier without thinking? Why does a glass with friends feel different from the one alone? The data and the voices have answers.',
    thumbnail: '/images/photo-substack-chart.jpg',
    thumbnailAlt: 'Wine consumption data and research visualisations',
    isSubstack: true,
    substackUrl: '', // TODO: add Substack URL when live
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
