import Link from 'next/link'
import { HeartHandshake, Scale, Thermometer, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: HeartHandshake,
    title: "Women's Health Telehealth",
    slug: 'womens-health',
    description:
      'Discreet, compassionate virtual care for the things that matter most — birth control, UTIs, hormonal and reproductive health, postpartum support, and more. Led by a provider who specializes in women\'s health.',
  },
  {
    icon: Scale,
    title: 'Online Weight Loss Management',
    slug: 'weight-loss',
    description:
      'A medically guided weight-loss plan built around your metabolic health — overseen by Dr. Susan George, who is Board Certified in Advanced Diabetes Management. Real clinical care, not a quick-fix gimmick.',
  },
  {
    icon: Thermometer,
    title: 'Treatment for Minor Illnesses',
    slug: 'minor-illness',
    description:
      'Feel better without leaving home. Get evaluated and treated online for common concerns like sinus infections, colds and flu, UTIs, and other minor illnesses — often same day.',
  },
]

export default function ServicesSection() {
  return (
    <section style={{ backgroundColor: '#024843' }} aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#99D9D9' }}
          >
            What We Treat
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{ color: '#ffffff' }}
          >
            What Can a Telehealth Doctor Treat Online?
          </h2>
          {/* AEO answer-first paragraph — ~44 words, direct answer before elaboration */}
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Dr. Susan George, DNP, APRN, treats{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
              women&apos;s health
            </strong>{' '}
            concerns, manages{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
              online weight loss
            </strong>
            , and evaluates{' '}
            <strong className="font-semibold" style={{ color: '#ffffff' }}>
              minor illnesses
            </strong>{' '}
            via secure video from anywhere in Oklahoma. All visits are cash-pay.
            No insurance required. The exact visit cost is confirmed before you book.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-0.5 transition-all"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(153,217,217,0.20)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(153,217,217,0.18)' }}
                aria-hidden="true"
              >
                <service.icon
                  className="h-6 w-6"
                  style={{ color: '#99D9D9' }}
                />
              </div>

              <h3
                className="text-xl font-semibold leading-snug"
                style={{ color: '#ffffff' }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'rgba(255,255,255,0.70)' }}
              >
                {service.description}
              </p>

              <Link
                href={`/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-1 group"
                style={{ color: '#99D9D9' }}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>

        {/* Post-services CTA */}
        <div className="mt-12 text-center">
          <p className="mb-5" style={{ color: 'rgba(255,255,255,0.70)' }}>
            Not sure which service is right for you? Get in touch and we&apos;ll
            help.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Your Visit
          </Link>
          <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            or{' '}
            <a
              href="tel:+14053498188"
              className="font-semibold"
              style={{ color: '#99D9D9' }}
            >
              call (405) 349-8188
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
