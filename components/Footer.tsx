import Link from 'next/link'
import { site } from '@/content/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-burgundy text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <p className="font-cormorant text-3xl font-light mb-2">{site.brandName}</p>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-cream/60 mb-4">
              {site.websiteName}
            </p>
            <div className="w-10 h-px bg-gold mb-4" />
            <p className="font-cormorant text-lg italic text-cream/80 leading-relaxed">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/wine-tourism', label: 'Wine Tourism' },
                { href: '/travel-planning', label: 'Travel Planning' },
                { href: '/about', label: 'About Rohan' },
                { href: '/my-world', label: 'My World' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div>
            <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
              >
                Instagram — {site.instagramHandle}
              </a>
              {site.substackUrl ? (
                <a
                  href={site.substackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-montserrat text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
                >
                  Substack — {site.substackLabel}
                </a>
              ) : (
                <span className="font-montserrat text-[11px] tracking-widest uppercase text-cream/40">
                  Substack — Coming Soon
                </span>
              )}
              <a
                href={`mailto:${site.contactEmail}`}
                className="font-montserrat text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
              >
                {site.contactEmail}
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-[11px] tracking-widest uppercase text-cream/70 hover:text-cream transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-montserrat text-[10px] tracking-widest uppercase text-cream/40">
            © {year} Cork To Table · {site.founderName} · {site.basedIn}
          </p>
          <p className="font-montserrat text-[10px] tracking-widest uppercase text-cream/40">
            {site.credentials}
          </p>
        </div>
      </div>
    </footer>
  )
}
