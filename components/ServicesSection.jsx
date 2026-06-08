import Link from 'next/link'
import { HeartHandshake, Scale, Thermometer, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Medical Weight Loss Clinic — Online',
    slug: 'weight-loss',
    description:
      'A medically supervised weight-loss program built around your metabolic health — including GLP-1 medication management — overseen by Dr. George, who is Board Certified in Advanced Diabetes Management. Real clinical care, not a quick fix. Initial consultations from $250.',
  },
  {
    icon: HeartHandshake,
    title: "Women's Health Telehealth",
    slug: 'womens-health',
    description:
      "Discreet, compassionate virtual care for birth control, PCOS, menopause, hormonal health, and more — led by a provider who specializes in women's health. Initial visits from $150.",
  },
  {
    icon: Thermometer,
    title: 'Treatment for Minor Illnesses',
    slug: 'minor-illness',
    description:
      'Feel better without leaving home. Get evaluated and treated online for sinus infections, colds and flu, UTIs, allergies, and other minor illnesses — often same day. Visits $50.',
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
            Online Care for Oklahoma Women and Families
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-0.5 transition-all bg-white"
              style={{
                border: '1px solid rgba(3,93,87,0.12)',
                boxShadow: '0 2px 16px rgba(3,93,87,0.07)',
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'rgba(3,93,87,0.08)' }}
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
                Learn more
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
