// ─────────────────────────────────────────────────────────────
// PRIVACY POLICY — edit this file to update the policy text.
// Rendered by app/privacy/page.tsx. Each section is a heading
// followed by one or more paragraphs.
// ─────────────────────────────────────────────────────────────

export interface PolicySection {
  heading: string
  body: string[]
}

export const privacy = {
  title: 'Privacy Policy',
  lastUpdated: 'August 2026',
  sections: [
    {
      heading: 'Who we are',
      body: [
        'Cork To Table is a wine education, tasting and travel consultancy run by Rohan Modwel, based in New Delhi, India. This policy explains what personal information we collect through corktotable.co, why we collect it, and what we do with it. Questions about anything below can go to corktotable@gmail.com.',
      ],
    },
    {
      heading: 'This site is for adults',
      body: [
        'Our services involve alcohol and are intended for people aged 25 and over, in line with the legal drinking age across most Indian states. We do not knowingly collect personal information from anyone below that age. If you believe someone underage has submitted information to us, write to us and we will delete it.',
      ],
    },
    {
      heading: 'What we collect',
      body: [
        'We only collect what you type into our forms. Nothing is gathered in the background.',
        'Through the contact form: your name, email address, and your message.',
        'Through the trip planning questionnaire: your name and contact details, and optionally your age, departure city, destinations, travel dates, group size, budget, and your travel and wine preferences. Every question apart from your name and contact details is optional.',
      ],
    },
    {
      heading: 'Incomplete questionnaires',
      body: [
        'If you begin the questionnaire, enter your name and contact details, and then close the page without finishing, we receive the answers you had given up to that point. We do this so we can follow up in case you meant to return and could not. If you would rather we deleted a partial submission, email us and we will remove it.',
      ],
    },
    {
      heading: 'Why we use it',
      body: [
        'To reply to you, to prepare travel itineraries and event recommendations, and to arrange bookings you have asked us to make. We do not sell your information, and we do not send marketing emails unless you ask us to.',
      ],
    },
    {
      heading: 'Who we share it with',
      body: [
        'Our forms are handled by Formspree, a form service based in the United States, which stores submissions and emails them to us. Our website is hosted by Vercel, also based in the United States.',
        'Where you have asked us to arrange something on your trip, we share the details necessary to make that booking with the relevant partner. That may include wineries, hotels, restaurants, guides or transport providers, and they may be located outside India. We share only what the booking requires, such as your name, dates and group size.',
      ],
    },
    {
      heading: 'Cookies and embedded content',
      body: [
        'Cork To Table does not set any cookies of its own and does not use advertising or tracking cookies.',
        'Some pages embed content from other companies, and those companies may set cookies or store data in your browser when the page loads. Our partner pages embed Google Maps, which is operated by Google. Our Stories and Trends page may embed content from Substack. These embeds are governed by the privacy policies of Google and Substack respectively, and we have no control over what they store. If you would prefer to avoid this, most browsers allow you to block third-party cookies in their settings.',
      ],
    },
    {
      heading: 'Server logs',
      body: [
        'Our host, Vercel, automatically records technical information when you visit, including your IP address, browser type and the pages you requested. This is standard for any website and is used to deliver the site and keep it secure.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        'Enquiries and questionnaire responses are kept for as long as we are working with you and for up to three years afterwards, so we can pick up a conversation where it left off. You can ask us to delete yours sooner.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Under India’s Digital Personal Data Protection Act, you may ask us for a copy of the information we hold about you, ask us to correct it, ask us to delete it, or withdraw your consent to us holding it. Write to corktotable@gmail.com and we will respond within a reasonable period.',
        'If you are unhappy with how we have handled your information, write to us at the same address and we will do our best to put it right. You also have the right to escalate the matter to the Data Protection Board of India.',
      ],
    },
    {
      heading: 'Changes',
      body: [
        'If we change this policy we will update the date at the top of this page.',
      ],
    },
  ] as PolicySection[],
}
