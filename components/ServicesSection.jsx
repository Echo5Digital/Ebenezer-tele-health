import Link from 'next/link'
import { HeartHandshake, Scale, Thermometer, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Medical Weight Loss',
    slug: 'weight-loss',
    linkText: 'Explore weight loss',
    description:
      'A clinically guided weight-loss program built around your metabolic health — not a quick fix. When appropriate, your plan may include GLP-1 medications like semaglutide. Available in person in Oklahoma City or by telehealth statewide.',
  },
  {
    icon: HeartHandshake,
    title: "Women's Health",
    slug: 'womens-health',
    linkText: "Explore women's health",
    description:
      'Compassionate, private care for birth control, PCOS, menopause, and hormonal health, from a practice that specializes in women\'s health. See us in person in Oklahoma City or online anywhere in Oklahoma.',
  },
  {
    icon: Thermometer,
    title: 'Minor Illness',
    slug: 'minor-illness',
    linkText: 'Explore minor illness care',
    description:
      'Feel better without the urgent-care wait. Get evaluated and treated for sinus infections, UTIs, cold and flu, and other everyday illnesses — same day when available.',
  },
]

export default function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="services-heading"
      style={{
        backgroundImage: "url('/service_bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay — keeps cards legible while letting bg texture show */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.55)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            Online Medical Care for Oklahoma Women and Families
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-0.5 transition-all bg-white"
              style={{
                border: '1px solid rgba(26,166,183,0.12)',
                boxShadow: '0 2px 16px rgba(26,166,183,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(26,166,183,0.08)' }}
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

              <p
                className="text-sm leading-relaxed flex-1 text-gray-600"
              >
                {service.description}
              </p>

              <Link
                href={`/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-1 group"
                style={{ color: 'var(--primary)' }}
                aria-label={`Learn more about ${service.title}`}
              >
                {service.linkText}
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
          <p className="mb-5 text-gray-600">
            Not sure which service is right for you? Get in touch and we&apos;ll
            help.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book Your Visit
          </Link>
          <p className="mt-3 text-sm text-gray-500">
            or{' '}
            <a
              href="tel:+14053498188"
              className="font-semibold"
              style={{ color: 'var(--primary)' }}
            >
              call (405) 349-8188
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
