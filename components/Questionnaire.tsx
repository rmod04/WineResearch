'use client'

import { useState, FormEvent } from 'react'

type Q1Answer = 'a' | 'b' | 'c' | null
type Q13Answer = 'a' | 'b' | 'c' | null

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
}

const initial: FormState = {
  q1: null, q2_name: '', q2_contact: '', q2_age: '', q3_city: '', q4_destination: '',
  q5_length: '', q6_companions: '', q6_other: '', q7_groupSize: '', q8_budget: '',
  q9_budgetUSD: '', q9_wineBudget: '', q10_nonneg: '', q11_additional: '',
  q12_bookings: [], q13: null,
  q14_environments: [], q14_other: '', q15_activities: [], q15_other: '',
  q16_interests: [], q16_other: '', q17_cuisine: '', q17_specify: '',
  q18_relationship: '', q19_experiences: [], q20_preferences: '',
  q21_dates: '', q22_intensity: '', q23_independence: '',
}

function toggleArray(arr: string[], val: string): string[] {
  return arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]
}

function CheckBox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
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
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-gold/30" />
      <span className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold">{label}</span>
      <div className="flex-1 h-px bg-gold/30" />
    </div>
  )
}

export default function Questionnaire() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const showPart2 = form.q1 === 'b' || form.q1 === 'c'
  const showPart3 = form.q13 === 'a' || form.q13 === 'b'
  const showPart4 = form.q1 === 'c'

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: val }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')

    const body = buildEmailBody(form, showPart2, showPart3, showPart4)

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_QUESTIONNAIRE_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Wine Journey Enquiry — ${form.q2_name || 'Anonymous'}`,
          _replyto: form.q2_contact,
          responses: body,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again or email us directly at corktotable@gmail.com')
      }
    } catch {
      setError('Network error. Please try again or email us directly at corktotable@gmail.com')
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-20 px-6 text-center max-w-2xl mx-auto">
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-montserrat text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Thank You</p>
        <h2 className="font-cormorant text-4xl font-light text-burgundy mb-6">
          Your journey begins here.
        </h2>
        <p className="font-montserrat text-sm text-mid leading-loose">
          We have received your responses and will be in touch soon to start planning your trip. In the meantime, feel free to explore our wine tourism pages or reach out on WhatsApp.
        </p>
        <div className="w-16 h-px bg-gold mx-auto mt-8" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <p className="section-label mb-3">A Vineyard Awaits</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-burgundy mb-4">
          Tell us about your journey.
        </h2>
        <p className="font-montserrat text-xs text-mid leading-loose max-w-xl mx-auto">
          All questions are optional — the more you share, the more personalised your itinerary will be.
        </p>
        <div className="divider-gold" />
      </div>

      {/* ── Part 1: Core Travel ───────────────────────────────── */}
      <Divider label="Part 1 · Core Travel" />

      {/* Q1 */}
      <div className="mb-10">
        <QLabel num="Q1" text="How would you like your itinerary structured?" />
        <div className="flex flex-col gap-3">
          {[
            { val: 'a', label: 'A shortlist of options (hotels, restaurants, activities etc.) with pricing — less inputs required' },
            { val: 'b', label: 'Specific recommendations tailored to your travel personality — more inputs required' },
            { val: 'c', label: 'An exact day-by-day itinerary — further inputs required' },
          ].map(({ val, label }) => (
            <Radio key={val} checked={form.q1 === val} onChange={() => set('q1', val as Q1Answer)} label={label} />
          ))}
        </div>
      </div>

      {/* Q2 */}
      <div className="mb-10">
        <QLabel num="Q2" text="Your details" />
        <div className="flex flex-col gap-4">
          {[
            { key: 'q2_name' as const, placeholder: 'Full name', type: 'text' },
            { key: 'q2_contact' as const, placeholder: 'Email or phone number', type: 'text' },
            { key: 'q2_age' as const, placeholder: 'Age (optional)', type: 'text' },
          ].map(({ key, placeholder, type }) => (
            <input
              key={key}
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={(e) => set(key, e.target.value)}
              className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
            />
          ))}
        </div>
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
            'Spend the bare minimum — I want to save as much as possible',
            'Spend less — moderate prices are important',
            'Spend a reasonable amount — I would like to indulge every now and then',
            'Spend more — luxurious arrangements are important',
            "I don't have a budget — I just want this trip to be the best experience ever",
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
            placeholder="🍷 Wine experiences budget (USD) — optional"
            value={form.q9_wineBudget}
            onChange={(e) => set('q9_wineBudget', e.target.value)}
            className="w-full border-b border-mid/40 bg-transparent py-2.5 font-montserrat text-sm text-charcoal placeholder-mid/50 focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>
      </div>

      {/* Q10 */}
      <div className="mb-10">
        <QLabel num="Q10" text="Are there any non-negotiables for this trip?" note="A pool, a Michelin-starred meal, a specific street — anything you absolutely must have" />
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
        <QLabel num="Q13" text="Would you like wine experiences included in your trip?" note="🍷 If you select (a) or (b), a separate section will pick up your wine preferences" />
        <div className="flex flex-col gap-3">
          {[
            { val: 'a', label: 'Yes — wine is a key part of this trip' },
            { val: 'b', label: 'Yes — I\'m open to it if it fits naturally' },
            { val: 'c', label: 'No — wine is not a priority for this trip' },
          ].map(({ val, label }) => (
            <Radio key={val} checked={form.q13 === val} onChange={() => set('q13', val as Q13Answer)} label={label} />
          ))}
        </div>
      </div>

      {/* ── Part 2: Travel Personality ────────────────────────── */}
      {showPart2 && (
        <>
          <Divider label="Part 2 · Your Travel Personality" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            These questions help us understand the kind of traveller you are — your pace, your environment, your interests. They unlock a much deeper level of personalisation in your itinerary.
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

      {/* ── Part 3: Wine Personality ──────────────────────────── */}
      {showPart3 && (
        <>
          <Divider label="Part 3 · Your Wine Personality" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            🍷 These questions help us personalise the wine elements of your trip — even if wine is just one part of a broader journey.
          </p>

          {/* Q18 */}
          <div className="mb-10">
            <QLabel num="Q18" text="How would you describe your relationship with wine?" />
            <div className="flex flex-col gap-3">
              {[
                "I'm curious — still exploring and learning",
                "I enjoy wine regularly but don't consider myself an expert",
                "I'm a serious enthusiast — wine is a big part of how I travel",
                "I'm a collector or professional — wine is central to this trip",
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
            <QLabel num="Q20" text="Any wine style preferences or a specific producer you'd love to visit?" note="🍷 Name any producer, appellation, or experience that is a must-have for this trip" />
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

      {/* ── Part 4: Itinerary Specifications ─────────────────── */}
      {showPart4 && (
        <>
          <Divider label="Part 4 · Itinerary Specifications" />
          <p className="font-montserrat text-xs text-mid italic leading-relaxed mb-10 border-l-2 border-gold pl-4">
            💡 Just a few final inputs so we can build your exact day-by-day itinerary.
          </p>

          {/* Q21 */}
          <div className="mb-10">
            <QLabel num="Q21" text="Preferred departure date and number of nights?" />
            <input
              type="text"
              placeholder="e.g. 15 September 2025, 10 nights"
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
                <label key={val} className="flex flex-col items-center gap-2 cursor-pointer">
                  <span
                    className={`w-10 h-10 border flex items-center justify-center font-montserrat text-sm transition-colors ${
                      form.q22_intensity === val
                        ? 'bg-burgundy border-burgundy text-cream'
                        : 'border-mid text-mid hover:border-burgundy'
                    }`}
                    onClick={() => set('q22_intensity', val)}
                  >
                    {val}
                  </span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-montserrat text-[9px] text-mid">Relaxed</span>
              <span className="font-montserrat text-[9px] text-mid">Packed</span>
            </div>
          </div>

          {/* Q23 */}
          <div className="mb-10">
            <QLabel num="Q23" text="How independent vs. guided do you prefer your travel?" note="1 = fully guided · 5 = fully independent" />
            <div className="flex gap-4 mt-2">
              {['1', '2', '3', '4', '5'].map((val) => (
                <label key={val} className="flex flex-col items-center gap-2 cursor-pointer">
                  <span
                    className={`w-10 h-10 border flex items-center justify-center font-montserrat text-sm transition-colors ${
                      form.q23_independence === val
                        ? 'bg-burgundy border-burgundy text-cream'
                        : 'border-mid text-mid hover:border-burgundy'
                    }`}
                    onClick={() => set('q23_independence', val)}
                  >
                    {val}
                  </span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="font-montserrat text-[9px] text-mid">Fully guided</span>
              <span className="font-montserrat text-[9px] text-mid">Fully independent</span>
            </div>
          </div>
        </>
      )}

      {/* ── Submit ────────────────────────────────────────────── */}
      <div className="mt-12 text-center">
        <div className="divider-gold" />
        {error && (
          <p className="font-montserrat text-xs text-rose mb-4">{error}</p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? 'Sending…' : 'Submit My Preferences'}
        </button>
        <p className="font-montserrat text-[10px] text-mid mt-4">
          We will be in touch shortly to begin planning your journey.
        </p>
      </div>
    </form>
  )
}

function buildEmailBody(form: FormState, part2: boolean, part3: boolean, part4: boolean): string {
  const lines: string[] = []
  const add = (label: string, val: string | string[]) => {
    if (!val || (Array.isArray(val) && val.length === 0)) return
    lines.push(`${label}: ${Array.isArray(val) ? val.join(', ') : val}`)
  }

  lines.push('=== PART 1: CORE TRAVEL ===')
  add('Q1 Itinerary type', form.q1 === 'a' ? 'Shortlist' : form.q1 === 'b' ? 'Tailored recommendations' : form.q1 === 'c' ? 'Day-by-day itinerary' : '')
  add('Name', form.q2_name)
  add('Contact', form.q2_contact)
  add('Age', form.q2_age)
  add('Departure city', form.q3_city)
  add('Destination(s)', form.q4_destination)
  add('Trip length', form.q5_length)
  add('Travelling with', form.q6_companions + (form.q6_other ? ` — ${form.q6_other}` : ''))
  add('Group size', form.q7_groupSize)
  add('Budget preference', form.q8_budget)
  add('Budget (USD)', form.q9_budgetUSD)
  add('Wine budget (USD)', form.q9_wineBudget)
  add('Non-negotiables', form.q10_nonneg)
  add('Additional info', form.q11_additional)
  add('Bookings needed', form.q12_bookings)
  add('Wine experiences', form.q13 === 'a' ? 'Yes — key part' : form.q13 === 'b' ? 'Yes — open to it' : form.q13 === 'c' ? 'No' : '')

  if (part2) {
    lines.push('\n=== PART 2: TRAVEL PERSONALITY ===')
    add('Environments', [...form.q14_environments, ...(form.q14_other ? [form.q14_other] : [])])
    add('Activities', [...form.q15_activities, ...(form.q15_other ? [form.q15_other] : [])])
    add('Interests', [...form.q16_interests, ...(form.q16_other ? [form.q16_other] : [])])
    add('Cuisine', form.q17_cuisine + (form.q17_specify ? ` — ${form.q17_specify}` : ''))
  }

  if (part3) {
    lines.push('\n=== PART 3: WINE PERSONALITY ===')
    add('Wine relationship', form.q18_relationship)
    add('Wine experience types', form.q19_experiences)
    add('Wine preferences / must-visit', form.q20_preferences)
  }

  if (part4) {
    lines.push('\n=== PART 4: ITINERARY SPECIFICATIONS ===')
    add('Dates & nights', form.q21_dates)
    add('Trip intensity (1-5)', form.q22_intensity)
    add('Independence level (1-5)', form.q23_independence)
  }

  return lines.join('\n')
}
