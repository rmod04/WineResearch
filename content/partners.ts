// ─────────────────────────────────────────────────────────────
// WINE TOURISM PARTNERS — edit this file to add/update partners
// ─────────────────────────────────────────────────────────────

export interface Partner {
  slug: string
  name: string
  region: string
  country: string
  tagline: string
  shortDescription: string
  fullDescription: string
  experiences: { title: string; description: string }[]
  image: string // Unsplash URL — swap for your own photo
  comingSoon: boolean
}

export const partners: Partner[] = [
  {
    slug: 'bhutan-wine-company',
    name: 'Bhutan Wine Company',
    region: 'Paro Valley',
    country: 'Bhutan',
    tagline: 'Wine at the edge of the world.',
    shortDescription:
      'One of the most extraordinary wine stories on earth — a boutique winery nestled in the Himalayas, producing wine at altitude in one of the planet\'s last great wildernesses.',
    fullDescription:
      'The Bhutan Wine Company represents one of the most singular wine stories in the world. Situated in the Paro Valley, surrounded by monasteries and mountain passes, their vineyard produces wine at altitudes that challenge every convention. A visit here is as much a spiritual journey as a viticultural one — and that is precisely the point.',
    experiences: [
      {
        title: 'Paro Valley Vineyard Visit',
        description:
          'A guided tour of the vineyard, cellar, and production facilities, paired with a tasting of the estate\'s wines against the backdrop of the Himalayan foothills.',
      },
      {
        title: 'Bhutan Wine & Culture Journey',
        description:
          'A bespoke multi-day itinerary combining the Bhutan Wine Company with Bhutan\'s most extraordinary cultural and natural landmarks — dzongs, tiger\'s nest, mountain trails.',
      },
      {
        title: 'Harvest Experience',
        description:
          'Join the team during the harvest season for a hands-on experience of one of the world\'s most unusual grape-picking seasons.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    comingSoon: true,
  },
  {
    slug: 'bischofliche-weinguter-trier',
    name: 'Bischöfliche Weingüter Trier',
    region: 'Mosel',
    country: 'Germany',
    tagline: 'Two thousand years of Riesling.',
    shortDescription:
      'One of Germany\'s most historic wine estates — based in the Roman city of Trier, producing extraordinary Mosel Rieslings from vineyards that have been tended since the Roman era.',
    fullDescription:
      'Bischöfliche Weingüter Trier is among the most storied wine estates in Germany, with a history stretching back over two millennia to the Roman occupation of the Mosel valley. Based in Trier — Germany\'s oldest city — the estate\'s steep slate vineyards produce Rieslings of astonishing precision, minerality, and longevity. A visit here is a journey through wine, history, and one of Europe\'s most beautiful river valleys.',
    experiences: [
      {
        title: 'Mosel Cellar & Tasting',
        description:
          'An intimate tasting in the historic cellars beneath Trier, guided through the estate\'s range of single-vineyard Rieslings from Auslese to Spätlese.',
      },
      {
        title: 'Steep Slate Vineyard Walk',
        description:
          'A guided walk through the estate\'s famous steep-slope vineyards on the Mosel, understanding how slate soil and gradient shape one of wine\'s most distinctive voices.',
      },
      {
        title: 'Trier Wine & History Journey',
        description:
          'A curated multi-day experience combining the estate with Trier\'s Roman amphitheatre, Porta Nigra, and the broader Mosel wine route.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1200&q=80',
    comingSoon: true,
  },
]
