'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/content/site'

const navLinks = [
  { href: '/wine-tourism', label: 'Wine Tourism' },
  { href: '/travel-planning', label: 'Travel Planning' },
  { href: '/about', label: 'About' },
  { href: '/my-world', label: 'My World' },
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
          <span
            className={`font-montserrat text-[9px] tracking-[0.25em] uppercase mt-0.5 transition-colors duration-300 ${
              scrolled ? 'text-mid' : 'text-cream/70'
            }`}
          >
            {site.websiteName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-montserrat text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                scrolled
                  ? 'text-charcoal hover:text-burgundy'
                  : 'text-cream/90 hover:text-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/travel-planning#questionnaire"
            className={`font-montserrat text-[11px] tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
              scrolled
                ? 'border-burgundy text-burgundy hover:bg-burgundy hover:text-cream'
                : 'border-cream text-cream hover:bg-cream hover:text-burgundy'
            }`}
          >
            Plan My Journey
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? 'bg-charcoal' : 'bg-cream'
              } ${menuOpen && i === 0 ? 'rotate-45 translate-y-2' : ''} ${
                menuOpen && i === 1 ? 'opacity-0' : ''
              } ${menuOpen && i === 2 ? '-rotate-45 -translate-y-2' : ''}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-cream/98 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 py-6' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-montserrat text-[11px] tracking-widest uppercase text-charcoal hover:text-burgundy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/travel-planning#questionnaire"
            onClick={() => setMenuOpen(false)}
            className="btn-outline-dark mt-2"
          >
            Plan My Journey
          </Link>
        </nav>
      </div>
    </header>
  )
}
