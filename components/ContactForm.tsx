'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', gotcha: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/myeglglk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New enquiry from ${form.name}`,
          _replyto: form.email,
          ...(form.gotcha.trim() ? { _gotcha: form.gotcha } : {}),
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email us directly at corktotable@gmail.com')
      }
    } catch {
      setError('Network error. Please email us directly at corktotable@gmail.com')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-10 h-px bg-gold mx-auto mb-6" />
        <p className="font-cormorant text-2xl text-burgundy font-light mb-3">Message received.</p>
        <p className="font-montserrat text-xs text-mid leading-relaxed">
          Thank you for getting in touch. We&apos;ll be back with you shortly. In the meantime, pour yourself something nice.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
      />
      <input
        type="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
      />
      <textarea
        rows={5}
        placeholder="Your message"
        required
        value={form.message}
        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
        className="w-full border border-mid/30 bg-transparent p-3 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors resize-none"
      />
      {/* Honeypot: invisible to humans, filled in by spam bots. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.gotcha}
        onChange={(e) => setForm((p) => ({ ...p, gotcha: e.target.value }))}
        style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
      />
      {error && <p className="font-montserrat text-xs text-rose">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="btn-primary self-start disabled:opacity-50"
      >
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
