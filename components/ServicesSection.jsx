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
      'A medically guided weight-loss plan built around your metabolic health — overseen by Dr. George, who is Board Certified in Advanced Diabetes Management. Real clinical care, not a quick-fix gimmick.',
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
    <section className="bg-gray-50" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            What We Treat
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            Online Care for Oklahoma Women and Families
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(184,232,220,0.5)' }}
                aria-hidden="true"
              >
                <service.icon
                  className="h-6 w-6"
                  style={{ color: 'var(--primary)' }}
                />
              </div>

              <h3
                className="text-xl font-semibold leading-snug"
                style={{ color: 'var(--navy)' }}
              >
                {service.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                {service.description}
              </p>

              <Link
                href={`/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-1 group"
                style={{ color: 'var(--primary)' }}
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
          <p className="text-gray-600 mb-5">
            Not sure which service is right for you? Get in touch and we&apos;ll
            help.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Your Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
