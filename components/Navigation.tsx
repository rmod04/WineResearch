'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/content/site'

const navLinks = [
  { href: '/tasting-experiences', label: 'Tasting Experiences' },
  { href: '/wine-tourism', label: 'Wine Tourism' },
  { href: '/stories-and-trends', label: 'Stories & Trends' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Cork To Table — Home">

          {/* Unscrolled: corkscrew SVG with spin animation */}
          {!scrolled && (
            <div className="corkscrew-icon text-cream flex-shrink-0">
              <svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="5" r="2.5" fill="currentColor"/>
                <circle cx="19.5" cy="5" r="2.5" fill="currentColor"/>
                <rect x="2.5" y="2.5" width="17" height="5" rx="2.5" fill="currentColor"/>
                <rect x="10.25" y="7.5" width="1.5" height="9" rx="0.75" fill="currentColor"/>
                <path
                  d="M11 16.5 C17 16.5 17 21 11 21 C5 21 5 25.5 11 25.5 C17 25.5 17 30 11 30 C5 30 5 34.5 11 34.5 C14 34.5 15 37 13.5 38.5"
                  stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" fill="none"
                />
              </svg>
            </div>
          )}

          {/* Scrolled: stamp logo with subtle scale on hover */}
          {scrolled && (
            <div className="relative w-14 h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo-transparent.png"
                alt="Cork To Table"
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* Brand name slides in on hover */}
          <div className="overflow-hidden grid grid-cols-[0fr] group-hover:grid-cols-[1fr] transition-all duration-500 ease-out">
            <span
              className={`overflow-hidden whitespace-nowrap font-cormorant text-xl font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-burgundy' : 'text-cream'
              }`}
            >
              {site.brandName}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-montserrat text-[11px] font-semibold tracking-widest uppercase transition-colors duration-200 ${
                scrolled
                  ? 'text-charcoal hover:text-burgundy'
                  : 'text-cream hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? 'bg-cream' : scrolled ? 'bg-charcoal' : 'bg-cream'
              } ${menuOpen && i === 0 ? 'rotate-45 translate-y-2.5' : ''} ${
                menuOpen && i === 1 ? 'opacity-0' : ''
              } ${menuOpen && i === 2 ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-charcoal transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 py-8' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-7 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-montserrat text-[12px] tracking-widest uppercase font-semibold text-cream hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
