/** @type {import('next').NextConfig} */

// The interactive visuals are published from the substack branch to GitHub
// Pages. Readers arriving from the newsletter should see a Cork To Table
// address rather than a github.io one, so each visual is given a short,
// branded URL here. Netlify serves the GitHub Pages file behind the scenes
// and the reader's address bar keeps saying corktotable.co.
//
// To add a visual later: copy a line and change the two names.
const VISUALS = {
  // Piece 1 — Every Wine Has Its Moment
  'occasion-shift': 'visual_occasion_shift',
  'instagram': 'visual_instagram',
  'seasonal-instinct': 'visual_seasonal_instinct',
  'colour-shift': 'visual_oiv_colour_shift',
  'reddit-voices': 'visual_reddit_voices',

  // Piece 2 — The Reward For Curiosity
  'palate-arc': 'visual_palate_arc',
  'price-quality': 'visual_price_quality',
  'curiosity-ladder': 'visual_curiosity_ladder',
  'story-over-status': 'visual_story_over_status',
  'where-value-lives': 'visual_where_value_lives',
}

const VISUALS_HOST = 'https://rmod04.github.io/WineResearch'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async rewrites() {
    return [
      // Pretty names, e.g. /visuals/palate-arc
      ...Object.entries(VISUALS).map(([slug, file]) => ({
        source: `/visuals/${slug}`,
        destination: `${VISUALS_HOST}/${file}.html`,
      })),
      // Fallback: the raw filename still works, e.g. /visuals/visual_palate_arc.html
      {
        source: '/visuals/:path*',
        destination: `${VISUALS_HOST}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
