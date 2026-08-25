'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'

const QUESTIONNAIRE_ENDPOINT = 'https://formspree.io/f/xgawrwpz'

// ─────────────────────────────────────────────────────────────
// FLOW LOGIC (summary)
//
//   core (Q1–Q13)
//     └─ if Q13 = a/b  → wine (Q18–Q20)
//     └─ then:
//          Q1 = a      → thank you (submit)
//          Q1 = b or c → ask ("tell us more?")
//                          ├─ No  → thank you (submit)
//                          └─ Yes → personality (Q14–Q17)
//                                     ├─ Q1 = b → thank you (submit)
//                                     └─ Q1 = c → itinerary (Q21–Q23) → thank you (submit)
//
//   Submission happens once, on entering the thank-you step.
// ─────────────────────────────────────────────────────────────

type Q1Answer = 'a' | 'b' | 'c' | null
type Q13Answer = 'a' | 'b' | 'c' | null
type Step = 'core' | 'wine' | 'ask' | 'personality' | 'itinerary' | 'thanks'

interface FormState {
  // Part 1
  q1: Q1Answer
  q2_name: string
  q2_contact: string
  q2_age: string
  q3_city: string
  q4_destination: string
  q5_length: string
  q6_companions: string
  q6_other: string
  q7_groupSize: string
  q8_budget: string
  q9_budgetUSD: string
  q9_wineBudget: string
  q10_nonneg: string
  q11_additional: string
  q12_bookings: string[]
  q13: Q13Answer
  // Branch gate
  wantsMore: 'yes' | 'no' | null
  // Part 2
  q14_environments: string[]
  q14_other: string
  q15_activities: string[]
  q15_other: string
  q16_interests: string[]
  q16_other: string
  q17_cuisine: string
  q17_specify: string
  // Part 3
  q18_relationship: string
  q19_experiences: string[]
  q20_preferences: string
  // Part 4
  q21_dates: string
  q22_intensity: string
  q23_independence: string
  // Honeypot: invisible to humans, filled in by spam bots.
  gotcha: string
}

const initial: FormState = {
  q1: null, q2_name: '', q2_contact: '', q2_age: '', q3_city: '', q4_destination: '',
  q5_length: '', q6_companions: '', q6_other: '', q7_groupSize: '', q8_budget: '',
  q9_budgetUSD: '', q9_wineBudget: '', q10_nonneg: '', q11_additional: '',
  q12_bookings: [], q13: null, wantsMore: null,
  q14_environments: [], q14_other: '', q15_activities: [], q15_other: '',
  q16_interests: [], q16_other: '', q17_cuisine: '', q17_specify: '',
  q18_relationship: '', q19_experiences: [], q20_preferences: '',
  q21_dates: '', q22_intensity: '', q23_independence: '',
  gotcha: '',
}

function toggleArray(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

// Q2 accepts an email OR a phone number, but Formspree's _replyto
// header must be a valid email or it rejects the whole submission.
function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

// Digits with an optional leading +. Spaces, hyphens and brackets are
// allowed while typing (e.g. "+91 (987) 157-6702") but stripped out
// before validating, so only the + and the digits actually count.
function isPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-()]/g, '')
  return /^\+?\d{7,15}$/.test(cleaned)
}

// Returns the problem with Q2, or null when both answers are usable.
function validateContactDetails(name: string, contact: string): string | null {
  if (!name.trim()) return 'Please enter your name so we know who we are planning for.'
  if (!contact.trim()) return 'Please enter a contact detail so we can get back to you.'
  if (!isEmail(contact) && !isPhone(contact)) {
    return 'Please enter either a valid email address or a phone number (digits only, with an optional + for the country code).'
  }
  return null
}

// The full route the traveller will take, given their answers so far.
function projectedPath(form: FormState): Step[] {
  const path: Step[] = ['core']
  if (form.q13 === 'a' || form.q13 === 'b') path.push('wine')
  if (form.q1 === 'b' || form.q1 === 'c') {
    path.push('ask')
    if (form.wantsMore === 'yes') {
      path.push('personality')
      if (form.q1 === 'c') path.push('itinerary')
    }
  }
  path.push('thanks')
  return path
}

function nextStep(current: Step, form: FormState): Step {
  const path = projectedPath(form)
  const i = path.indexOf(current)
  return path[i + 1] ?? 'thanks'
}

function CheckBox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors ${
          checked ? 'bg-burgundy border-burgundy' : 'border-mid group-hover:border-burgundy'
        }`}
      >
        {checked && <span className="text-cream text-[10px]">✓</span>}
      </span>
      <span className="font-montserrat text-xs text-charcoal leading-relaxed">{label}</span>
    </label>
  )
}

function Radio({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={`mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
          checked ? 'border-burgundy' : 'border-mid group-hover:border-burgundy'
        }`}
      >
        {checked && <span className="w-2 h-2 rounded-full bg-burgundy block" />}
      </span>
      <span className="font-montserrat text-xs text-charcoal leading-relaxed">{label}</span>
    </label>
  )
}

function QLabel({ num, text, note }: { num: string; text: string; note?: string }) {
  return (
    <div className="mb-4">
      <p className="font-montserrat text-[10px] tracking-widest uppercase text-gold mb-1">{num}</p>
      <p className="font-cormorant text-xl text-burgundy font-light leading-snug">{text}</p>
      {note && <p className="font-montserrat text-[10px] text-mid mt-1 italic">{note}</p>}
    </div>
  )
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="flex-1 h-px bg-gold/30" />
      <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold text-center">{label}</span>
      <div className="flex-1 h-px bg-gold/30" />
    </div>
  )
}

export default function Questionnaire() {
  const [form, setForm] = useState<FormState>(initial)
  const [step, setStep] = useState<Step>('core')
  const [history, setHistory] = useState<Step[]>([])
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [q2Error, setQ2Error] = useState(false)

  // Mirror of the live state, readable from event listeners that were
  // registered once on mount and would otherwise see stale values.
  const liveRef = useRef({ form, step, completed: false, partialSent: false })
  useEffect(() => {
    liveRef.current.form = form
    liveRef.current.step = step
  }, [form, step])

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: val }))
  }

  // Scroll back to the top whenever the traveller moves to a new page.
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  // ── Partial capture ─────────────────────────────────────────
  // If someone gets past the contact questions and then closes the
  // tab without finishing, send what they gave us so we can follow
  // up by hand. Fires at most once, and never after a real submit.
  useEffect(() => {
    function sendPartial() {
      const live = liveRef.current
      if (live.completed || live.partialSent) return
      if (live.step === 'thanks') return

      // Fires from any page, including the first, as long as there is
      // enough here to actually reach the person. Anything less would
      // just be noise in the dashboard.
      const f = live.form
      if (validateContactDetails(f.q2_name, f.q2_contact) !== null) return
      live.partialSent = true

      const payload = {
        _subject: `INCOMPLETE — Wine Journey Enquiry — ${f.q2_name || 'Unknown'}`,
        ...(isEmail(f.q2_contact) ? { _replyto: f.q2_contact.trim() } : {}),
        // Only sent when a bot has filled it in. Sending it empty adds
        // a stray column to the dashboard for no benefit.
        ...(f.gotcha.trim() ? { _gotcha: f.gotcha } : {}),
        'A00 Submission status': 'INCOMPLETE — traveller left before reaching the final step',
        ...buildFields(f, { personality: true, wine: true, itinerary: true }),
      }
      // Must be FormData, not JSON. Browsers only let sendBeacon use
      // content types that need no CORS preflight, and application/json
      // is not one of them, so a JSON beacon is silently dropped.
      const data = new FormData()
      Object.entries(payload).forEach(([key, value]) => data.append(key, String(value)))

      if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon(QUESTIONNAIRE_ENDPOINT, data)
      } else {
        fetch(QUESTIONNAIRE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
          keepalive: true,
        }).catch(() => {})
      }
    }

    // pagehide covers closing the tab and navigating away. visibilitychange
    // is the more reliable signal on mobile, where tabs are often suspended
    // rather than closed outright.
    function onVisibilityChange() {
      if (document.visibilityState === 'hidden') sendPartial()
    }

    window.addEventListener('pagehide', sendPartial)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('pagehide', sendPartial)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  async function submitAll(finalForm: FormState) {
    setSending(true)
    setError('')

    const path = projectedPath(finalForm)
    const sections = {
      personality: path.includes('personality'),
      wine: path.includes('wine'),
      itinerary: path.includes('itinerary'),
    }

    try {
      const res = await fetch(QUESTIONNAIRE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Wine Journey Enquiry — ${finalForm.q2_name || 'Anonymous'}`,
          // Only set the reply-to header when the contact given is an
          // email. Formspree validates this field and rejects the whole
          // submission if it is a phone number.
          ...(isEmail(finalForm.q2_contact) ? { _replyto: finalForm.q2_contact.trim() } : {}),
          ...(finalForm.gotcha.trim() ? { _gotcha: finalForm.gotcha } : {}),
          'A00 Submission status': 'COMPLETE',
          ...buildFields(finalForm, sections),
        }),
      })
      if (!res.ok) {
        const detail = await res.text().catch(() => '')
        // Surfaced in the browser console so the exact cause is visible.
        console.error('Formspree rejected the submission', res.status, detail)
        setError(
          `Something went wrong sending your answers (error ${res.status}). Please try again or email us directly at corktotable@gmail.com`
        )
        return false
      }
      return true
    } catch {
      setError('Network error. Please try again or email us directly at corktotable@gmail.com')
      return false
    } finally {
      setSending(false)
    }
  }

  async function goForward(e: FormEvent) {
    e.preventDefault()

    // Name and contact are the only mandatory answers: without them
    // there is no way to reply, however good the rest of the form is.
    if (step === 'core') {
      const problem = validateContactDetails(form.q2_name, form.q2_contact)
      if (problem) {
        setQ2Error(true)
        setError(problem)
        document.getElementById('q2-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        return
      }
    }

    setQ2Error(false)
    setError('')
    const target = nextStep(step, form)

    if (target === 'thanks') {
      const ok = await submitAll(form)
      if (!ok) return
    }

    liveRef.current.completed = target === 'thanks'
    setHistory((h) => [...h, step])
    setStep(target)
  }

  function goBack() {
    setError('')
    setHistory((h) => {
      if (h.length === 0) return h
      setStep(h[h.length - 1])
      return h.slice(0, -1)
    })
  }

  // ── Thank you ────────────────────────────────────────────────
  if (step === 'thanks') {
    return (
      <div className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Thank You</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-burgundy mb-6">
          Your journey begins here.
        </h2>
        <p className="font-montserrat text-sm text-mid leading-loose lg:whitespace-nowrap">
          We have received your responses and will get back to you shortly to start planning your trip.
        </p>
        <p className="font-montserrat text-sm text-mid leading-loose">
          The countdown begins!
        </p>
        <div className="w-16 h-px bg-gold mx-auto mt-8" />
      </div>
    )
  }

  const path = projectedPath(form)
  const stepIndex = Math.max(0, path.indexOf(step))
  const totalSteps = path.length - 1 // exclude the thank-you page
  const progress = ((stepIndex + 1) / totalSteps) * 100
  const isLastStep = nextStep(step, form) === 'thanks'

  return (
    <form onSubmit={goForward} className="max-w-3xl mx-auto px-6 py-12">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="text-center mb-10">
        <p className="section-label mb-3">A Vineyard Awaits</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-burgundy mb-4">
          Tell us about your journey.
        </h2>
        <p className="font-montserrat text-xs text-mid leading-loose max-w-xl mx-auto">
          We know you&rsquo;re super excited to try that next glass of wine (or a bottle)! Just fill in some details below, and we&rsquo;ll take care of the rest. All you have to do is review our suggestions, make necessary preparations, and pack your bags!
        </p>
        <p className="font-montserrat text-[11px] text-mid/80 italic leading-loose max-w-xl mx-auto mt-3">
          All questions are optional, however the more information you can provide, the better we&rsquo;d be able to personalise your trip!
        </p>
        <div className="divider-gold" />
      </div>

      {/* ── Progress ────────────────────────────────────────────── */}
      <div className="mb-10">
        <div className="h-px w-full bg-mid/20">
          <div className="h-px bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <p className="font-montserrat text-[9px] tracking-[0.25em] uppercase text-mid mt-2 text-right">
          Step {stepIndex + 1} of {totalSteps}
        </p>
      </div>

      {/* ── Step: Core Travel ───────────────────────────────────── */}
      {step === 'core' && (
        <>
          <Divider label="Core Travel" />

          {/* Q1 */}
          <div className="mb-10">
            <QLabel num="Q1" text="How would you like your itinerary structured?" />
            <div className="flex flex-col gap-3">
              {[
                { val: 'a', label: 'A shortlist of options (hotels, restaurants, activities etc.) with pricing' },
                { val: 'b', label: 'Specific recommendations tailored to your travel personality' },
                { val: 'c', label: 'An exact day-by-day itinerary' },
              ].map(({ val, label }) => (
                <Radio key={val} checked={form.q1 === val} onChange={() => set('q1', val as Q1Answer)} label={label} />
              ))}
            </div>
          </div>

          {/* Q2 */}
          <div className="mb-10" id="q2-anchor">
            <QLabel num="Q2" text="Your details" note="Name and contact details are required so we can reply." />
            <div className="flex flex-col gap-4">
              {[
                {
                  key: 'q2_name' as const,
                  placeholder: 'Full name (required)',
                  invalid: !form.q2_name.trim(),
                },
                {
                  key: 'q2_contact' as const,
                  placeholder: 'Email or phone number (required)',
                  invalid: !isEmail(form.q2_contact) && !isPhone(form.q2_contact),
                },
                { key: 'q2_age' as const, placeholder: 'Age (optional)', invalid: false },
              ].map(({ key, placeholder, invalid }) => {
                const flagged = q2Error && invalid
                return (
                  <input
                    key={key}
                    type="text"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => set(key, e.target.value)}
                    aria-invalid={flagged}
                    className={`w-full border-b bg-transparent py-2.5 font-montserrat text-sm text-charcoal focus:outline-none focus:border-burgundy transition-colors ${
                      flagged ? 'border-rose placeholder-rose/70' : 'border-mid/40 placeholder-mid/50'
                    }`}
                  />
                )
              })}
            </div>
            {q2Error && validateContactDetails(form.q2_name, form.q2_contact) && (
              <p className="font-montserrat text-[11px] text-rose mt-3">
                {validateContactDetails(form.q2_name, form.q2_contact)}
              </p>
            )}
          </div>

          {/* Q3 */}
          <div className="mb-10">
            <QLabel num="Q3" text="Which city are you travelling from?" />
            <input
              type="text"
              placeholder="Departure city"
              value={form.q3_city}
              onChange={(e) => set('q3_city', e.target.value)}
              className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
            />
          </div>

          {/* Q4 */}
          <div className="mb-10">
            <QLabel num="Q4" text="Which region or country do you wish to travel to?" note="You may enter multiple regions" />
            <input
              type="text"
              placeholder="e.g. Tuscany, Burgundy, Mosel…"
              value={form.q4_destination}
              onChange={(e) => set('q4_destination', e.target.value)}
              className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
            />
          </div>

          {/* Q5 */}
          <div className="mb-10">
            <QLabel num="Q5" text="What is the planned length of your trip?" />
            <div className="flex flex-col gap-3">
              {[
                { val: '1-3 days', label: '1–3 days' },
                { val: '4-7 days', label: '4–7 days' },
                { val: '8-14 days', label: '8–14 days' },
                { val: '15+ days', label: '15 days or more' },
              ].map(({ val, label }) => (
                <Radio key={val} checked={form.q5_length === val} onChange={() => set('q5_length', val)} label={label} />
              ))}
            </div>
          </div>

          {/* Q6 */}
          <div className="mb-10">
            <QLabel num="Q6" text="With whom are you travelling?" />
            <div className="flex flex-col gap-3">
              {['Solo', 'My partner', 'My family (partner and kids)', 'My family (parents and siblings)', 'My extended family', 'My friends', 'Work colleagues', 'Other'].map((val) => (
                <Radio key={val} checked={form.q6_companions === val} onChange={() => set('q6_companions', val)} label={val} />
              ))}
            </div>
            {form.q6_companions === 'Other' && (
              <input
                type="text"
                placeholder="Please specify"
                value={form.q6_other}
                onChange={(e) => set('q6_other', e.target.value)}
                className="mt-3 w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            )}
          </div>

          {/* Q7 */}
          <div className="mb-10">
            <QLabel num="Q7" text="What is the total size of your travelling group?" />
            <input
              type="number"
              min="1"
              placeholder="Number of travellers"
              value={form.q7_groupSize}
              onChange={(e) => set('q7_groupSize', e.target.value)}
              className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
            />
          </div>

          {/* Q8 */}
          <div className="mb-10">
            <QLabel num="Q8" text="What is your budget and luxury preference?" />
            <div className="flex flex-col gap-3">
              {[
                'Spend the bare minimum; I want to save as much as possible',
                'Spend less; moderate prices are important',
                'Spend a reasonable amount; I would like to indulge every now and then',
                'Spend more; luxurious arrangements are important',
                "I don't have a budget; I just want this trip to be the best experience ever",
              ].map((val) => (
                <Radio key={val} checked={form.q8_budget === val} onChange={() => set('q8_budget', val)} label={val} />
              ))}
            </div>
          </div>

          {/* Q9 */}
          <div className="mb-10">
            <QLabel num="Q9" text="Do you have an exact budget in mind?" note="Optional — enter amounts in USD" />
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Total trip budget (USD)"
                value={form.q9_budgetUSD}
                onChange={(e) => set('q9_budgetUSD', e.target.value)}
                className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
              <input
                type="text"
                placeholder="🍷 Wine experiences budget (USD), optional"
                value={form.q9_wineBudget}
                onChange={(e) => set('q9_wineBudget', e.target.value)}
                className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            </div>
          </div>

          {/* Q10 */}
          <div className="mb-10">
            <QLabel num="Q10" text="Are there any non-negotiables for this trip?" note="A pool, a Michelin-starred meal, a specific street. Anything you absolutely must have." />
            <textarea
              rows={3}
              placeholder="Tell us your must-haves…"
              value={form.q10_nonneg}
              onChange={(e) => set('q10_nonneg', e.target.value)}
              className="w-full border border-mid/30 bg-transparent p-3 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors resize-none"
            />
          </div>

          {/* Q11 */}
          <div className="mb-10">
            <QLabel num="Q11" text="Any other information that might help us?" />
            <textarea
              rows={3}
              placeholder="Anything else about your trip or travelling group…"
              value={form.q11_additional}
              onChange={(e) => set('q11_additional', e.target.value)}
              className="w-full border border-mid/30 bg-transparent p-3 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors resize-none"
            />
          </div>

          {/* Q12 */}
          <div className="mb-10">
            <QLabel num="Q12" text="Which bookings would you like us to help with?" note="Select all that apply" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Flights', 'Hotels / Stays', 'Sightseeing / Tours', 'Interim Transportation', 'Dining', 'Concerts / Sports Events', 'Visas', 'Travel Insurance', 'I just want an itinerary'].map((val) => (
                <CheckBox
                  key={val}
                  checked={form.q12_bookings.includes(val)}
                  onChange={() => set('q12_bookings', toggleArray(form.q12_bookings, val))}
                  label={val}
                />
              ))}
            </div>
          </div>

          {/* Q13 */}
          <div className="mb-10">
            <QLabel num="Q13" text="Would you like wine experiences included in your trip?" note="🍷 Even one great winemaker dinner can transform a trip. If you select either Yes option, a separate section will pick up your wine preferences." />
            <div className="flex flex-col gap-3">
              {[
                { val: 'a', label: 'Yes, wine is a key part of this trip' },
                { val: 'b', label: "Yes, I'm open to it if it fits naturally" },
                { val: 'c', label: 'No, wine is not a priority for this trip' },
              ].map(({ val, label }) => (
                <Radio key={val} checked={form.q13 === val} onChange={() => set('q13', val as Q13Answer)} label={label} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── Step: Wine Personality (Q18–Q20) ────────────────────── */}
      {step === 'wine' && (
        <>
          <Divider label="Tell us about your wine personality" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            🍷 These questions help us personalise the wine elements of your trip, even if wine is just one part of a broader journey.
          </p>

          {/* Q18 */}
          <div className="mb-10">
            <QLabel num="Q18" text="How would you describe your relationship with wine?" />
            <div className="flex flex-col gap-3">
              {[
                "I'm curious, still exploring and learning",
                "I enjoy wine regularly but don't consider myself an expert",
                "I'm a serious enthusiast, wine is a big part of how I travel",
                "I'm a collector or professional, wine is central to this trip",
              ].map((val) => (
                <Radio key={val} checked={form.q18_relationship === val} onChange={() => set('q18_relationship', val)} label={val} />
              ))}
            </div>
          </div>

          {/* Q19 */}
          <div className="mb-10">
            <QLabel num="Q19" text="What kinds of wine experiences interest you most?" note="Select all that apply" />
            <div className="flex flex-col gap-3">
              {[
                'Vineyard visits & tours',
                'Harvest & grape-picking participation',
                'Wine & food pairing dinners',
                'Wine region road trips',
                'Staying at a vineyard or wine estate',
                'Wine bar hopping',
                'Learning experiences (wine courses etc.)',
              ].map((val) => (
                <CheckBox
                  key={val}
                  checked={form.q19_experiences.includes(val)}
                  onChange={() => set('q19_experiences', toggleArray(form.q19_experiences, val))}
                  label={val}
                />
              ))}
            </div>
          </div>

          {/* Q20 */}
          <div className="mb-10">
            <QLabel num="Q20" text="Any wine style preferences or a specific producer you'd love to visit?" note="🍷 Name any producer, appellation, or experience that is a must-have for this trip." />
            <textarea
              rows={3}
              placeholder="e.g. Domaine de la Romanée-Conti, Napa Cabernet producers, anything Mosel Riesling…"
              value={form.q20_preferences}
              onChange={(e) => set('q20_preferences', e.target.value)}
              className="w-full border border-mid/30 bg-transparent p-3 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors resize-none"
            />
          </div>
        </>
      )}

      {/* ── Step: The gate question ─────────────────────────────── */}
      {step === 'ask' && (
        <div className="py-6">
          <Divider label="One more thing" />
          <div className="text-center mb-10">
            <h3 className="font-cormorant text-3xl md:text-4xl font-light text-burgundy leading-snug mb-4">
              Do you want to tell us more about your travel personality and preferences?
            </h3>
            <p className="font-montserrat text-xs text-mid leading-loose max-w-lg mx-auto">
              {form.q1 === 'c'
                ? 'Click Yes to help us build your day-by-day itinerary with far more precision.'
                : 'Click Yes to unlock a deeper level of personalisation in our recommendations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              type="button"
              onClick={() => set('wantsMore', 'yes')}
              className={`border p-8 text-center transition-colors ${
                form.wantsMore === 'yes'
                  ? 'bg-burgundy border-burgundy'
                  : 'border-mid/40 hover:border-burgundy'
              }`}
            >
              <p className={`font-cormorant text-2xl font-light mb-2 ${form.wantsMore === 'yes' ? 'text-cream' : 'text-burgundy'}`}>
                Yes
              </p>
              <p className={`font-montserrat text-[11px] leading-relaxed ${form.wantsMore === 'yes' ? 'text-cream/70' : 'text-mid'}`}>
                Take me to the next few questions
              </p>
            </button>

            <button
              type="button"
              onClick={() => set('wantsMore', 'no')}
              className={`border p-8 text-center transition-colors ${
                form.wantsMore === 'no'
                  ? 'bg-burgundy border-burgundy'
                  : 'border-mid/40 hover:border-burgundy'
              }`}
            >
              <p className={`font-cormorant text-2xl font-light mb-2 ${form.wantsMore === 'no' ? 'text-cream' : 'text-burgundy'}`}>
                No
              </p>
              <p className={`font-montserrat text-[11px] leading-relaxed ${form.wantsMore === 'no' ? 'text-cream/70' : 'text-mid'}`}>
                We can discuss it in person
              </p>
            </button>
          </div>
        </div>
      )}

      {/* ── Step: Travel Personality (Q14–Q17) ──────────────────── */}
      {step === 'personality' && (
        <>
          <Divider label="Your Travel Personality" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            💡 These questions help us understand the kind of traveller you are: your pace, your environment, your interests.
          </p>

          {/* Q14 */}
          <div className="mb-10">
            <QLabel num="Q14" text="What kind of environments would you most prefer?" note="Select all that apply" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Wilderness / Forest', 'Beach', 'Hills / Mountains', 'Desert', 'Cold climate / Snowy regions', 'Urban centres', 'Other'].map((val) => (
                <CheckBox
                  key={val}
                  checked={form.q14_environments.includes(val)}
                  onChange={() => set('q14_environments', toggleArray(form.q14_environments, val))}
                  label={val}
                />
              ))}
            </div>
            {form.q14_environments.includes('Other') && (
              <input
                type="text"
                placeholder="Please specify"
                value={form.q14_other}
                onChange={(e) => set('q14_other', e.target.value)}
                className="mt-3 w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            )}
          </div>

          {/* Q15 */}
          <div className="mb-10">
            <QLabel num="Q15" text="Which activities or tours would you like, other than wine?" note="Select all that apply" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Active walking on flat terrain',
                'Active hiking on hilly terrain',
                'Sports focus (cycling / rowing / kayaking)',
                'Water sports / theme parks',
                'Large-ship cruising',
                'Deluxe train trips',
                'Family-focused activities',
                'Historical sights / museums',
                'Local cuisine',
                'Bar-hopping',
                'Local culture (art / music / dance)',
                'Nightlife',
                'Romantic / couple-friendly activities',
                'Other',
              ].map((val) => (
                <CheckBox
                  key={val}
                  checked={form.q15_activities.includes(val)}
                  onChange={() => set('q15_activities', toggleArray(form.q15_activities, val))}
                  label={val}
                />
              ))}
            </div>
            {form.q15_activities.includes('Other') && (
              <input
                type="text"
                placeholder="Please specify"
                value={form.q15_other}
                onChange={(e) => set('q15_other', e.target.value)}
                className="mt-3 w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            )}
          </div>

          {/* Q16 */}
          <div className="mb-10">
            <QLabel num="Q16" text="What are your general interests and hobbies?" note="Select all that apply" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Beach / Water Sports', 'Sailing / Boating', 'Snorkelling / Scuba',
                'Adventure (hiking / zip-lining / rafting)', 'Horseback riding', 'Biking',
                'Football', 'Golf', 'Car Aficionado', 'Music & Theatre', 'Museums',
                'Historical Sites', 'Cooking', 'Wine', 'Spirits & Cocktails',
                'Fine Dining', 'Fashion / Shopping', 'Wellness / Spa', 'Photography', 'Other',
              ].map((val) => (
                <CheckBox
                  key={val}
                  checked={form.q16_interests.includes(val)}
                  onChange={() => set('q16_interests', toggleArray(form.q16_interests, val))}
                  label={val}
                />
              ))}
            </div>
            {form.q16_interests.includes('Other') && (
              <input
                type="text"
                placeholder="Please specify"
                value={form.q16_other}
                onChange={(e) => set('q16_other', e.target.value)}
                className="mt-3 w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            )}
          </div>

          {/* Q17 */}
          <div className="mb-10">
            <QLabel num="Q17" text="Do you have a preferred cuisine style while travelling?" />
            <div className="flex flex-col gap-3">
              {['Local and traditional', 'Fine dining & Michelin', 'Street food & markets', 'Home-style & comfort food', 'Specific cuisine', 'No strong preference'].map((val) => (
                <Radio key={val} checked={form.q17_cuisine === val} onChange={() => set('q17_cuisine', val)} label={val} />
              ))}
            </div>
            {form.q17_cuisine === 'Specific cuisine' && (
              <input
                type="text"
                placeholder="Please specify"
                value={form.q17_specify}
                onChange={(e) => set('q17_specify', e.target.value)}
                className="mt-3 w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
              />
            )}
          </div>
        </>
      )}

      {/* ── Step: Itinerary Specifications (Q21–Q23) ────────────── */}
      {step === 'itinerary' && (
        <>
          <Divider label="Itinerary Specifications" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            💡 Just a few final inputs so we can build your exact day-by-day itinerary.
          </p>

          {/* Q21 */}
          <div className="mb-10">
            <QLabel num="Q21" text="Preferred departure date and number of nights?" />
            <input
              type="text"
              placeholder="e.g. 15 September 2026, 10 nights"
              value={form.q21_dates}
              onChange={(e) => set('q21_dates', e.target.value)}
              className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
            />
          </div>

          {/* Q22 */}
          <div className="mb-10">
            <QLabel num="Q22" text="What is your ideal trip intensity?" note="1 = as relaxing as possible · 5 = lots of moving around and sightseeing" />
            <div className="flex gap-4 mt-2">
              {['1', '2', '3', '4', '5'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => set('q22_intensity', val)}
                  className={`w-10 h-10 border flex items-center justify-center font-montserrat text-sm transition-colors ${
                    form.q22_intensity === val
                      ? 'bg-burgundy border-burgundy text-cream'
                      : 'border-mid text-mid hover:border-burgundy'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-1 max-w-[280px]">
              <span className="font-montserrat text-[9px] text-mid">Relaxed</span>
              <span className="font-montserrat text-[9px] text-mid">Packed</span>
            </div>
          </div>

          {/* Q23 */}
          <div className="mb-10">
            <QLabel num="Q23" text="How independent vs. guided do you prefer your travel?" note="1 = fully guided · 5 = fully independent" />
            <div className="flex gap-4 mt-2">
              {['1', '2', '3', '4', '5'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => set('q23_independence', val)}
                  className={`w-10 h-10 border flex items-center justify-center font-montserrat text-sm transition-colors ${
                    form.q23_independence === val
                      ? 'bg-burgundy border-burgundy text-cream'
                      : 'border-mid text-mid hover:border-burgundy'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-1 max-w-[280px]">
              <span className="font-montserrat text-[9px] text-mid">Fully guided</span>
              <span className="font-montserrat text-[9px] text-mid">Fully independent</span>
            </div>
          </div>
        </>
      )}

      {/* ── Honeypot ────────────────────────────────────────────────
          Parked off-screen rather than type="hidden", because bots
          skip hidden inputs but happily fill visible text ones. No
          human sees it, so anything that arrives with it filled in
          came from a machine and Formspree bins it automatically. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.gotcha}
        onChange={(e) => set('gotcha', e.target.value)}
        style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, opacity: 0 }}
      />

      {/* ── Navigation ──────────────────────────────────────────── */}
      <div className="mt-12 text-center">
        <div className="divider-gold" />
        {error && <p className="font-montserrat text-xs text-rose mb-4">{error}</p>}

        <div className="flex items-center justify-center gap-6">
          {history.length > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="font-montserrat text-[11px] tracking-widest uppercase text-mid hover:text-burgundy transition-colors"
            >
              ← Back
            </button>
          )}
          <button
            type="submit"
            disabled={sending || (step === 'ask' && form.wantsMore === null)}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? 'Sending…' : isLastStep ? 'Submit My Preferences' : 'Continue'}
          </button>
        </div>

        {!isLastStep && (
          <p className="font-montserrat text-[10px] text-mid mt-4">
            Your answers are only sent once you reach the final step.
          </p>
        )}
      </div>
    </form>
  )
}

// ─────────────────────────────────────────────────────────────
// Builds the submission payload: one named field per question.
//
// IMPORTANT: every submission sends the SAME 24 fields in the SAME
// order, whether or not the traveller answered them. Formspree
// builds its dashboard columns from the fields it receives, so a
// submission that omitted half of them would knock the table out of
// alignment. Unanswered questions are sent as "-" rather than an
// empty string, since a truly empty value can be dropped in transit
// and would reintroduce the same problem.
//
// Field names are zero-padded (Q01, Q02…) so they sort correctly.
// ─────────────────────────────────────────────────────────────
const BLANK = '-'

function buildFields(
  form: FormState,
  sections: { personality: boolean; wine: boolean; itinerary: boolean }
): Record<string, string> {
  const fields: Record<string, string> = {}
  const add = (label: string, val: string | string[]) => {
    const text = (Array.isArray(val) ? val.join(', ') : val).trim()
    fields[label] = text || BLANK
  }
  const withOther = (selected: string[], other: string) => [
    ...selected.filter((x) => x !== 'Other'),
    ...(other.trim() ? [other.trim()] : []),
  ]
  // Sections the traveller was never routed through are marked as
  // such, so a blank there reads differently from a skipped question.
  const NOT_ASKED = 'Not asked'
  const gated = (shown: boolean, val: string | string[]) =>
    shown ? val : NOT_ASKED

  // ── Core travel ─────────────────────────────────────────────
  add('Q01 Itinerary type', form.q1 === 'a' ? 'Shortlist of options with pricing' : form.q1 === 'b' ? 'Tailored recommendations' : form.q1 === 'c' ? 'Exact day-by-day itinerary' : '')
  add('Q02 Name', form.q2_name)
  add('Q02 Contact', form.q2_contact)
  add('Q02 Age', form.q2_age)
  add('Q03 Departure city', form.q3_city)
  add('Q04 Destinations', form.q4_destination)
  add('Q05 Trip length', form.q5_length)
  add('Q06 Travelling with', form.q6_companions === 'Other' && form.q6_other.trim() ? form.q6_other : form.q6_companions)
  add('Q07 Group size', form.q7_groupSize)
  add('Q08 Budget preference', form.q8_budget)
  add('Q09 Budget USD', form.q9_budgetUSD)
  add('Q09 Wine budget USD', form.q9_wineBudget)
  add('Q10 Non-negotiables', form.q10_nonneg)
  add('Q11 Additional info', form.q11_additional)
  add('Q12 Bookings needed', form.q12_bookings)
  add('Q13 Wine experiences', form.q13 === 'a' ? 'Yes, key part of the trip' : form.q13 === 'b' ? 'Yes, open to it' : form.q13 === 'c' ? 'No' : '')

  // ── Travel personality (Q14–Q17) ────────────────────────────
  add('Q14 Environments', gated(sections.personality, withOther(form.q14_environments, form.q14_other)))
  add('Q15 Activities', gated(sections.personality, withOther(form.q15_activities, form.q15_other)))
  add('Q16 Interests', gated(sections.personality, withOther(form.q16_interests, form.q16_other)))
  add('Q17 Cuisine', gated(sections.personality, form.q17_cuisine === 'Specific cuisine' && form.q17_specify.trim() ? form.q17_specify : form.q17_cuisine))

  // ── Wine personality (Q18–Q20) ──────────────────────────────
  add('Q18 Wine relationship', gated(sections.wine, form.q18_relationship))
  add('Q19 Wine experience types', gated(sections.wine, form.q19_experiences))
  add('Q20 Wine must visit or style', gated(sections.wine, form.q20_preferences))

  // ── Itinerary specifications (Q21–Q23) ──────────────────────
  add('Q21 Dates and nights', gated(sections.itinerary, form.q21_dates))
  add('Q22 Trip intensity 1 to 5', gated(sections.itinerary, form.q22_intensity))
  add('Q23 Independence 1 to 5', gated(sections.itinerary, form.q23_independence))

  add('Q24 Shared travel personality', form.wantsMore === 'yes' ? 'Yes' : form.wantsMore === 'no' ? 'No, to be discussed in person' : NOT_ASKED)

  return fields
}
