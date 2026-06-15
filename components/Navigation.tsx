'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/content/site'

const navLinks = [
  { href: '/wine-tourism', label: 'Wine Tourism' },
  { href: '/tasting-experiences', label: 'Tasting Experiences' },
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
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-cormorant text-xl font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-burgundy' : 'text-cream'
            }`}
          >
            {site.brandName}
          </span>
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
