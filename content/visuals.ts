// Where the interactive visuals are published from: the substack branch,
// deployed to GitHub Pages. See CLAUDE.md for that pipeline.
//
// This deliberately does NOT live in components/VisualEmbed.tsx. That file is
// a client component, and when a server component imports a value from a
// 'use client' module, Next.js hands back a client-reference proxy instead of
// the value — which interpolates into a URL as "[object Object]". Keeping
// these here means both server and client code get the real strings.
export const VISUALS_BASE = 'https://rmod04.github.io/WineResearch'
export const VISUALS_ORIGIN = 'https://rmod04.github.io'
