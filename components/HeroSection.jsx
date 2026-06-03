import Link from 'next/link'
import Image from 'next/image'
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
      className="relative overflow-hidden -mt-[80px]"
      style={{ backgroundColor: 'var(--navy)' }}
      aria-label="Hero"
    >
      {/* Background image at 0.5 opacity */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/ez-home-bg.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(28,43,64,0.80) 0%, rgba(28,43,64,0.45) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[100px] pb-14 md:pt-[120px] md:pb-20">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
            style={{
              backgroundColor: 'rgba(255,255,255,0.10)',
              borderColor: 'rgba(255,255,255,0.20)',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: 'var(--mint)' }}
              aria-hidden="true"
            />
            Faith-Driven Telehealth &middot; Oklahoma City, OK
          </div>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: '#ffffff' }}
          >
            Affordable Online{' '}
            <span style={{ color: 'var(--mint)' }}>Doctor Visits</span>
            <br className="hidden sm:block" /> in Oklahoma City
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            Faith-driven, compassionate telehealth for women and families —
            from anywhere in Oklahoma. See a trusted provider online for{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
              women&apos;s health
            </strong>
            ,{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
              weight loss management
            </strong>
            , and{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
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
              href="tel:+14053498188"
              className="btn-ghost-white text-base px-7 py-3.5 w-full sm:w-auto"
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
                  style={{ color: 'var(--mint)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs leading-snug"
                  style={{ color: 'rgba(255,255,255,0.70)' }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave separator — fill matches AnswerBlock cream bg */}
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
            fill="#EDF7F4"
          />
        </svg>
      </div>
    </section>
  )
}
