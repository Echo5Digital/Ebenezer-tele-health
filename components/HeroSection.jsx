import Link from 'next/link'
import { ShieldCheck, DollarSign, MapPin, Clock } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    text: 'Led by Dr. Susan George, DNP, APRN',
  },
  {
    icon: DollarSign,
    text: 'Transparent cash pricing',
  },
  {
    icon: ShieldCheck,
    text: 'Secure & HIPAA-compliant',
  },
  {
    icon: Clock,
    text: 'Same-day appointments',
  },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% -10%, rgba(184,232,220,0.22) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
            style={{
              backgroundColor: 'rgba(184,232,220,0.4)',
              borderColor: 'rgba(42,122,111,0.2)',
              color: 'var(--primary-dark)',
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--primary)' }}
              aria-hidden="true"
            />
            Faith-Driven Telehealth &middot; Oklahoma City, OK
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Affordable Online{' '}
            <span style={{ color: 'var(--primary)' }}>Doctor Visits</span>
            <br className="hidden sm:block" /> in Oklahoma City
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            Faith-driven, compassionate care for women and families — from
            anywhere in Oklahoma. See a trusted provider online for{' '}
            <strong className="font-semibold text-gray-800">
              women&apos;s health
            </strong>
            ,{' '}
            <strong className="font-semibold text-gray-800">
              weight loss management
            </strong>
            , and{' '}
            <strong className="font-semibold text-gray-800">
              minor illnesses
            </strong>
            . Transparent cash pricing, no insurance hassles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link href="/contact" className="btn-primary text-base px-7 py-3.5 w-full sm:w-auto">
              Book Your Visit
            </Link>
            <a
              href="tel:4053498188"
              className="btn-outline text-base px-7 py-3.5 w-full sm:w-auto"
            >
              Call (405) 349-8188
            </a>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2"
              >
                <item.icon
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <span className="text-xs text-gray-600 leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="relative h-8 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 32C360 0 720 0 1080 16C1260 24 1380 32 1440 32H0Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  )
}
