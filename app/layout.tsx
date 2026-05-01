import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

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
  title: 'The Wine Meridian — Cork To Table',
  description: 'Wine tourism, bespoke travel, and curated wine experiences by Rohan Modwel. WSET Level 3 Distinction wine professional and travel consultant based in New Delhi.',
  keywords: 'wine tourism, wine travel, bespoke wine trips, cork to table, Rohan Modwel, WSET, wine experiences India',
  openGraph: {
    title: 'The Wine Meridian — Cork To Table',
    description: 'Journeys built around the world\'s great wines.',
    type: 'website',
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
