import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle background circles */}
      <div
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-72 w-72 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-48 w-48 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: 'var(--primary)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2
          id="final-cta-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--primary)' }}
        >
          Ready to See a Provider Today?
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Compassionate, affordable online care for Oklahoma women and
          families — without the wait.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto"
          >
            Book Your Visit
          </Link>
          <a
            href="tel:+14053498188"
            className="inline-flex items-center justify-center gap-2 text-gray-700 hover:text-primary font-semibold text-base transition-colors w-full sm:w-auto"
          >
            Call (405) 349-8188
          </a>
        </div>

        {/* NAP reinforcement */}
        <p className="mt-10 text-sm text-gray-500">
          Ebenezer Telehealth &middot; Oklahoma City, OK &middot; (405) 349-8188 &middot; ebenezertelehealth.com
        </p>
      </div>
    </section>
  )
}
