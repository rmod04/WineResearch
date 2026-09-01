import { site } from '@/content/site'

/**
 * Substack subscribe block.
 *
 * The iframe is Substack's own signup widget, so an email entered here is
 * captured without the reader leaving the page. Substack serves it on a white
 * background with a grey border, which sits awkwardly on cream, so it is
 * wrapped in a branded frame that carries the publication name and the note.
 *
 * `showNote` adds the one-line description of the publication. Use it where a
 * reader may not know what The Deeper Pour is (the About page). On the article
 * pages they have just read a piece, so the note is redundant there.
 *
 * The iframe is lazy-loaded: it sits below the fold everywhere it is used, and
 * there is no reason to fetch Substack's widget before a reader scrolls to it.
 */
export default function SubscribeBlock({ showNote = false }: { showNote?: boolean }) {
  return (
    <div className="border border-gold/30 bg-cream/60 px-6 py-8 text-center">
      <p className="font-montserrat text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
        {site.substackLabel}
      </p>
      <p className="font-cormorant text-2xl italic text-burgundy leading-snug mb-4">
        {site.substackTagline}
      </p>

      {showNote && (
        <p className="font-montserrat text-xs text-mid leading-relaxed max-w-md mx-auto mb-6">
          {site.substackNote}
        </p>
      )}

      <div className="flex justify-center">
        <iframe
          src="https://corktotable.substack.com/embed"
          title={`Subscribe to ${site.substackLabel}`}
          loading="lazy"
          scrolling="no"
          className="w-full max-w-[480px] h-[320px] border-0 bg-transparent"
        />
      </div>
    </div>
  )
}
