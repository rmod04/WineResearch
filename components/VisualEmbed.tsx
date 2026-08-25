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
export default function VisualEmbed({ src, title }: { src: string; title: string }) {
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

  return (
    <div className="my-10 border border-gold/20 overflow-hidden">
      <iframe
        ref={frameRef}
        src={src}
        title={title}
        className="w-full block"
        style={{ height: `${height}px`, border: 'none', transition: 'height 0.25s ease' }}
        scrolling="no"
      />
    </div>
  )
}
