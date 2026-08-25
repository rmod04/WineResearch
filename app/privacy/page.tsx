import { privacy } from '@/content/privacy'

export const metadata = {
  title: 'Privacy Policy — Cork To Table',
  description:
    'How Cork To Table collects, uses and protects the personal information you share through this website.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-label mb-3">Legal</p>
        <h1 className="font-cormorant text-4xl md:text-5xl font-light text-burgundy mb-3">
          {privacy.title}
        </h1>
        <p className="font-montserrat text-[11px] tracking-widest uppercase text-mid">
          Last updated: {privacy.lastUpdated}
        </p>
        <div className="divider-gold-left" />

        <div className="flex flex-col gap-10 mt-4">
          {privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-cormorant text-2xl text-burgundy font-light mb-3">
                {section.heading}
              </h2>
              <div className="w-8 h-px bg-gold mb-4" />
              <div className="flex flex-col gap-4">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-montserrat text-sm text-charcoal leading-loose"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
