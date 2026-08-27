import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { site } from '@/content/site'

export const metadata = {
  title: 'Contact — Cork To Table',
  description: 'Get in touch with Rohan Modwel to begin planning your wine journey. Email, WhatsApp, or enquiry form.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80"
          alt="Wine cellar"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight max-w-3xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ── Contact options + form ───────────────────────────────── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Left: contact info */}
            <div>
              <p className="section-label mb-6">Get in Touch</p>
              <div className="divider-gold-left" />
              <p className="font-montserrat text-sm text-charcoal leading-loose mb-10">
                Whether you&apos;d like to enquire about an event, host your own wine evening, have a travel destination in mind, or simply want to know which wine to purchase for the next occasion: reach out and we will figure out the rest together over a glass, or a bottle!
              </p>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-px h-10 bg-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Email</p>
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="font-montserrat text-sm text-charcoal hover:text-burgundy transition-colors"
                    >
                      {site.contactEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="w-px h-10 bg-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-1">WhatsApp</p>
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-montserrat text-sm text-charcoal hover:text-burgundy transition-colors"
                    >
                      Message on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex gap-4 items-start">
                  <div className="w-px h-10 bg-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Instagram</p>
                    <a
                      href={site.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-montserrat text-sm text-charcoal hover:text-burgundy transition-colors"
                    >
                      {site.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <p className="section-label mb-6">Enquiry Form</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
