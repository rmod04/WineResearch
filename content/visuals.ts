// Where the interactive visuals are published from: the substack branch,
// deployed to GitHub Pages, then proxied under our own domain by the
// /visuals rewrites in next.config.js. See CLAUDE.md for that pipeline.
//
// Readers should see a Cork To Table address, not a github.io one, so these
// point at the branded path rather than the Pages host directly.
//
// BASE and ORIGIN must always move together. VisualEmbed checks the origin of
// incoming height messages against ORIGIN and targets its postMessage at it;
// if ORIGIN names a different host from the one BASE actually loads, every
// message is silently dropped and each embed sticks at its fallback height.
//
// This deliberately does NOT live in components/VisualEmbed.tsx. That file is
// a client component, and when a server component imports a value from a
// 'use client' module, Next.js hands back a client-reference proxy instead of
// the value — which interpolates into a URL as "[object Object]". Keeping
// these here means both server and client code get the real strings.
export const VISUALS_BASE = 'https://corktotable.co/visuals'
export const VISUALS_ORIGIN = 'https://corktotable.co'
