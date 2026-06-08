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
      className="relative overflow-hidden -mt-[96px] sm:-mt-[112px] lg:-mt-[128px] min-h-[600px] md:min-h-[80vh]"
      style={{ backgroundColor: '#035D57' }}
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
        {/* Teal overlay — same color theme, light enough to show video, dark enough for text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(2,72,67,0.72) 0%, rgba(3,93,87,0.55) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-[136px] sm:pt-[168px] lg:pt-[208px] pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 border"
            style={{
              backgroundColor: 'rgba(153,217,217,0.15)',
              borderColor: 'rgba(153,217,217,0.30)',
              color: '#99D9D9',
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: '#99D9D9' }}
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
            <span style={{ color: '#99D9D9' }}>Doctor Visits</span>
            <br className="hidden sm:block" /> in Oklahoma
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.92)' }}
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
                style={{ color: '#99D9D9' }}
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
