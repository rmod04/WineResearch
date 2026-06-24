import Questionnaire from '@/components/Questionnaire'

export const metadata = {
  title: 'Plan Your Journey — Cork To Table',
  description: 'Tell us about your ideal wine travel experience and we will build your itinerary from scratch.',
  robots: { index: false, follow: false }, // hidden from search engines
}

export default function PlanPage() {
  return (
    <div className="bg-cream min-h-screen pt-24">
      <Questionnaire />
    </div>
  )
}
