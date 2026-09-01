import { site } from '@/content/site'

/**
 * Substack subscribe block.
 *
 * The iframe is Substack's own signup widget, so an email entered here is
 * captured without the reader leaving the page. It is loaded with
 * `?transparent=1` so Substack drops its white background and grey border and
 * the cream page shows through.
 *
 * `showNote` adds the one-line description of the publication. Use it where a
 * reader may not know what The Deeper Pour is (About, Stories & Trends). On an
 * article page they have just read a piece, so the note is redundant there.
 *
 * The iframe is lazy-loaded: it sits below the fold everywhere it is used, so
 * there is no reason to fetch Substack's widget before a reader scrolls to it.
 */
export default function SubscribeBlock({ showNote = false }: { showNote?: boolean }) {
  return (
    <div className="border border-gold/30 px-6 py-8 text-center">
      <p className="font-montserrat text-sm tracking-widest uppercase text-burgundy mb-4">
        Subscribe to {site.substackLabel}
      </p>

      {showNote && (
        <p className="font-montserrat text-xs text-mid leading-relaxed max-w-md mx-auto mb-6">
          {site.substackNote}
        </p>
      )}

      <div className="flex justify-center">
        <iframe
          src="https://corktotable.substack.com/embed?transparent=1"
          title={`Subscribe to ${site.substackLabel}`}
          loading="lazy"
          scrolling="no"
          className="w-full max-w-[480px] h-[320px] border-0 bg-transparent"
        />
      </div>
    </div>
  )
}
