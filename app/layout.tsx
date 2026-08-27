import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { site } from '@/content/site'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cork To Table',
  description: 'Wine tourism, bespoke travel, and curated wine experiences by Rohan Modwel. WSET Level 3 Distinction wine professional and travel consultant based in New Delhi.',
  keywords: 'wine tourism, wine travel, bespoke wine trips, cork to table, Rohan Modwel, WSET, wine experiences India',
  // Required so relative image paths below resolve to real, absolute URLs.
  // Without it Next falls back to localhost and share previews break.
  metadataBase: new URL('https://corktotable.co'),
  openGraph: {
    title: site.brandName,
    description: site.tagline,
    url: 'https://corktotable.co',
    siteName: site.brandName,
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${site.brandName}. ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.brandName,
    description: site.tagline,
    images: ['/images/og-default.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
