import { Phone, MapPin, Globe, Clock, CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'Book a Telehealth Visit | Ebenezer Telehealth Oklahoma City',
  description:
    'Book an online doctor visit with Ebenezer Telehealth. Call (405) 349-8188 or book online. Serving patients throughout Oklahoma. Cash-pay, no insurance required.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Contact &amp; Booking
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              Book Your Visit
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to see Dr. Susan George? Book online or call us directly.
              Same-day appointments are often available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Booking widget placeholder */}
            <div
              id="book"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-5"
            >
              <h2
                className="text-2xl font-bold"
                style={{ color: 'var(--navy)' }}
              >
                Book Online
              </h2>
              <p className="text-gray-600">
                Select a time that works for you. All visits are conducted via
                secure video — no driving, no waiting room.
              </p>

              {/*
               * TODO: Replace the placeholder below with your booking widget.
               * Options: Jane App, Calendly, Healthie, Simple Practice, Hint Health, etc.
               * Example: <iframe src="https://your-booking-url.com" />
               */}
              <div
                className="rounded-xl flex items-center justify-center py-16 text-center"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.15)',
                  border: '2px dashed rgba(42,122,111,0.25)',
                }}
              >
                <div>
                  <CalendarDays
                    className="h-12 w-12 mx-auto mb-3"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  <p className="font-semibold" style={{ color: 'var(--navy)' }}>
                    Booking Widget — Placeholder
                  </p>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs">
                    Replace this section with your online booking system
                    (Calendly, Jane App, etc.)
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Prefer to call? Reach us at{' '}
                <a
                  href="tel:+14053498188"
                  className="font-semibold"
                  style={{ color: 'var(--primary)' }}
                >
                  (405) 349-8188
                </a>
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              {/* NAP card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                <h2
                  className="text-xl font-bold mb-5"
                  style={{ color: 'var(--navy)' }}
                >
                  Contact Information
                </h2>

                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Phone</p>
                      <a
                        href="tel:+14053498188"
                        className="text-base font-semibold hover:text-primary transition-colors"
                        style={{ color: 'var(--primary)' }}
                      >
                        (405) 349-8188
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">
                        Ebenezer Telehealth<br />
                        Oklahoma City, OK<br />
                        <span className="text-gray-400 text-sm">
                          [Full address — coming soon]
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Website</p>
                      <p className="text-gray-600">ebenezertelehealth.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="h-5 w-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Hours</p>
                      <p className="text-gray-400 text-sm">
                        [Hours — to be confirmed]
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Cash-pay note */}
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.15)',
                  border: '1px solid rgba(42,122,111,0.2)',
                }}
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Cash-Pay Practice
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No insurance required. You&apos;ll know your full cost before
                  booking — no surprise bills. We accept cash, credit, and debit
                  cards.
                </p>
              </div>

              {/* Service area */}
              <div
                className="rounded-2xl p-6 border border-gray-100 bg-white"
              >
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: 'var(--navy)' }}
                >
                  Serving All of Oklahoma
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As a telehealth practice, we can see patients located anywhere
                  in the state of Oklahoma at the time of their visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
