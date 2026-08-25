'use client'

import { useEffect, useRef, useState } from 'react'

import { VISUALS_ORIGIN } from '@/content/visuals'


// Used until the visual reports its real height, and as a floor if a
// message never arrives (script blocked, very old browser, etc.).
const FALLBACK_HEIGHT = 560

// Only a sanity ceiling, not a layout constraint — see the clamp below.
const MAX_HEIGHT = 20000

/**
 * Embeds an interactive visual and sizes the frame to its exact content.
 *
 * The visual and the website sit on different domains, so this page cannot
 * simply measure the iframe's contents — browsers forbid that. Instead each
 * visual measures itself and posts its height across with postMessage; we
 * listen for that and resize. Result: no inner scrollbar, and no dead space
 * above or below a short visual.
 */
export default function VisualEmbed({
  src,
  title,
  maxHeight,
}: {
  src: string
  title: string
  /**
   * Optional cap, in pixels. Leave unset for the normal behaviour, where the
   * frame grows to the full content height and never scrolls internally.
   *
   * Set it only for visuals that are genuinely too long to sit inline — the
   * appendix-style quote lists run to many thousands of pixels and swamp the
   * article. Those get a fixed window with their own scrollbar instead.
   */
  maxHeight?: number
}) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number>(FALLBACK_HEIGHT)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // Only trust messages from the visuals host, and only from this frame.
      if (event.origin !== VISUALS_ORIGIN) return
      if (frameRef.current && event.source !== frameRef.current.contentWindow) return

      const data = event.data
      if (
        data &&
        data.type === 'c2t-visual-height' &&
        typeof data.height === 'number' &&
        isFinite(data.height) &&
        data.height > 0
      ) {
        // Guard against a runaway value from a mis-measuring page. The
        // ceiling is deliberately generous: the frame has scrolling off, so
        // anything clamped away is invisible and unreachable, and the long
        // quote-list visuals genuinely run past 10,000px.
        setHeight(Math.min(Math.round(data.height), MAX_HEIGHT))
      }
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // When a cap is set and the content exceeds it, the frame stops at the cap
  // and scrolls internally. Otherwise it grows to fit and never scrolls.
  const isCapped = typeof maxHeight === 'number' && height > maxHeight
  const renderedHeight = isCapped ? (maxHeight as number) : height

  return (
    <div className="my-10">
      <div className="border border-gold/20 overflow-hidden">
        <iframe
          ref={frameRef}
          src={src}
          title={title}
          className="w-full block"
          style={{
            height: `${renderedHeight}px`,
            border: 'none',
            transition: 'height 0.25s ease',
          }}
          scrolling={isCapped ? 'yes' : 'no'}
        />
      </div>
      {isCapped && (
        <p className="font-montserrat text-[10px] tracking-widest uppercase text-mid/70 mt-2 text-right">
          Scroll inside the panel to read more
        </p>
      )}
    </div>
  )
}
