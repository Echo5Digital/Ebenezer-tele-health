import Link from 'next/link'
import { CheckCircle2, Info } from 'lucide-react'

const plans = [
  {
    name: 'Minor Illness Visit',
    price: 'TBD',
    description: 'Online evaluation and treatment for sinus infections, colds, flu, UTIs, and more.',
    features: [
      'Video visit with Dr. George',
      'Diagnosis & treatment plan',
      'Electronic prescriptions when appropriate',
      'Same-day availability',
    ],
  },
  {
    name: "Women's Health Visit",
    price: 'TBD',
    description: "Comprehensive virtual care for women's health needs including birth control, hormonal health, and more.",
    features: [
      'Video visit with Dr. George',
      "Women's health specialty care",
      'Prescriptions sent to pharmacy',
      'Private & HIPAA-compliant',
    ],
    featured: true,
  },
  {
    name: 'Weight Loss Consult',
    price: 'TBD',
    description: 'Medically guided weight management overseen by a BC-ADM certified provider.',
    features: [
      'Video visit with Dr. George',
      'Personalized metabolic health plan',
      'Ongoing management support',
      'Clinical — not a quick-fix program',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="bg-white" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--navy)' }}
          >
            Simple, Honest Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            No insurance? No problem. We&apos;re a cash-pay practice with
            clear, upfront pricing — you&apos;ll always know the cost before
            you book.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-5 border ${
                plan.featured
                  ? 'shadow-lg border-primary/30'
                  : 'shadow-sm border-gray-100 bg-white'
              }`}
              style={
                plan.featured
                  ? {
                      background:
                        'linear-gradient(135deg, rgba(42,122,111,0.05) 0%, rgba(184,232,220,0.15) 100%)',
                      borderColor: 'rgba(42,122,111,0.3)',
                    }
                  : {}
              }
            >
              {plan.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: 'var(--navy)' }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <div>
                <span
                  className="text-4xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500 ml-2">/ visit</span>
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={plan.featured ? 'btn-primary text-sm' : 'btn-outline text-sm'}
              >
                Book Your Visit
              </Link>
            </div>
          ))}
        </div>

        {/* Insurance notice */}
        <div
          className="mt-10 rounded-xl p-5 flex items-start gap-3"
          style={{
            backgroundColor: 'rgba(184,232,220,0.15)',
            border: '1px solid rgba(42,122,111,0.2)',
          }}
          role="note"
        >
          <Info
            className="h-5 w-5 mt-0.5 flex-shrink-0"
            style={{ color: 'var(--primary)' }}
            aria-hidden="true"
          />
          <p className="text-sm text-gray-700">
            We currently operate on a{' '}
            <strong>cash-pay basis</strong>. Insurance options are coming as we
            expand to in-person and additional telehealth services. Exact prices
            will be displayed at booking — no hidden fees.
          </p>
        </div>
      </div>
    </section>
  )
}
