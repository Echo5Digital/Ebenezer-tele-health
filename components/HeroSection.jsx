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
      className="relative overflow-hidden -mt-[112px] sm:-mt-[128px] lg:-mt-[144px] min-h-[600px] md:min-h-[80vh]"
      style={{ backgroundColor: '#1AA6B7' }}
      aria-label="Hero"
    >
      {/* Video background */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/ez_bg_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — keeps video clearly visible while maintaining text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(11,61,71,0.58) 0%, rgba(11,61,71,0.35) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[152px] sm:pt-[184px] lg:pt-[224px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
            style={{
              backgroundColor: 'rgba(255,255,255,0.14)',
              borderColor: 'rgba(255,255,255,0.35)',
              color: '#ffffff',
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: '#97CECC' }}
              aria-hidden="true"
            />
            Faith-Driven Health Clinic &middot; Oklahoma City, OK
          </div>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6"
            style={{ color: '#ffffff' }}
          >
            Medical Clinic in Oklahoma City{' '}
            <span style={{ color: '#97CECC' }}>Walk-Ins &amp; Telehealth</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            Real medical care that fits your life. Walk in to our Oklahoma City clinic or
            connect by telehealth from anywhere in Oklahoma. Primary care, weight loss, women&apos;s
            health, minor illness, injections, and IV therapy, with honest cash-pay pricing.
            We now accept Medicare and major commercial insurance plans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
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
        </div>

        {/* Trust strip — outside max-w-3xl so each item keeps its natural width on sm+ */}
        <div className="grid grid-cols-2 gap-3 mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2"
            >
              <item.icon
                className="h-4 w-4 flex-shrink-0"
                style={{ color: '#97CECC' }}
                aria-hidden="true"
              />
              <span
                className="text-xs leading-snug sm:whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
