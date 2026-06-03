import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Award, Heart, Quote } from 'lucide-react'

export const metadata = {
  title: 'About Dr. Susan George, DNP, APRN | Ebenezer Telehealth',
  description:
    'Learn about Ebenezer Telehealth and our provider Dr. Susan George, DNP, APRN, BC-ADM. Faith-driven, affordable telehealth for women and families across Oklahoma.',
  alternates: {
    canonical: 'https://ebenezertelehealth.com/about',
  },
}

const credentials = [
  'Doctor of Nursing Practice (DNP)',
  'Advanced Practice Registered Nurse (APRN)',
  'Board Certified in Advanced Diabetes Management (BC-ADM)',
  "Women's Health Specialty",
  'Licensed in Oklahoma',
  'Serving all of Oklahoma via telehealth',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--primary)' }}
            >
              About Us
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: 'var(--navy)' }}
            >
              About Ebenezer Telehealth
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A faith-driven telehealth practice built to make quality medical
              care accessible to women and families across Oklahoma.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ebenezer Telehealth was founded on a simple belief: that every
                person deserves honest, compassionate medical care — regardless
                of where they live or whether they have insurance. We deliver
                that care with faith, integrity, and a personal touch that
                makes every patient feel seen and heard.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--navy)' }}
              >
                Our Name
              </h2>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;Ebenezer&rdquo; means &ldquo;stone of help&rdquo; in
                Hebrew — a declaration of faith and a reminder that we exist to
                be a source of help for the people we serve. That name reflects
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--primary)' }}
              >
                Your Provider
              </span>
              <h2
                className="text-3xl font-bold mb-5"
                style={{ color: 'var(--navy)' }}
              >
                Dr. Susan George, DNP, APRN, BC-ADM
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Dr. Susan George is a Doctor of Nursing Practice and Advanced
                Practice Registered Nurse who specializes in women&apos;s
                health and holds the Board Certification in Advanced Diabetes
                Management (BC-ADM).
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a deep commitment to compassionate, faith-driven medicine,
                Dr. Susan George provides accessible, affordable care to women and
                families across Oklahoma — with the integrity, dignity, and
                personal attention every patient deserves.
              </p>

              <ul className="space-y-2.5">
                {credentials.map((cred) => (
                  <li key={cred} className="flex items-start gap-2.5">
                    <Award
                      className="h-4 w-4 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{cred}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="mint">DNP</Badge>
                <Badge variant="mint">APRN</Badge>
                <Badge variant="mint">BC-ADM</Badge>
                <Badge variant="seafoam">Women&apos;s Health</Badge>
              </div>
            </div>

            <div>
              {/* Photo placeholder */}
              <div
                className="rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center max-w-sm mx-auto lg:mx-0 mb-6"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.25)',
                  border: '2px dashed rgba(42,122,111,0.3)',
                }}
              >
                <div className="text-center px-8">
                  <div
                    className="h-24 w-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(42,122,111,0.15)' }}
                  >
                    <span
                      className="text-4xl font-bold"
                      style={{ color: 'var(--primary)' }}
                    >
                      SG
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-500">
                    Professional photo coming soon
                  </p>
                </div>
              </div>

              {/* Quote */}
              <figure
                className="rounded-xl p-6 border-l-4"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.15)',
                  borderColor: 'var(--primary)',
                }}
              >
                <Quote
                  className="h-6 w-6 mb-3"
                  style={{ color: 'var(--primary)' }}
                  aria-hidden="true"
                />
                <blockquote className="text-gray-700 italic leading-relaxed">
                  &ldquo;Our goal is simple: give Oklahoma women and families
                  honest, compassionate care they can actually afford and access
                  from home.&rdquo;
                </blockquote>
                <figcaption
                  className="mt-3 text-sm font-semibold"
                  style={{ color: 'var(--navy)' }}
                >
                  — Dr. Susan George, DNP, APRN, BC-ADM
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: 'var(--primary)' }}
        className="text-white"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <Heart
            className="h-8 w-8 mx-auto mb-4 text-white/70"
            aria-hidden="true"
          />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 mb-8">
            Book your visit with Dr. Susan George — same-day appointments often
            available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-ghost-white text-base px-8 py-3.5 w-full sm:w-auto">
              Book Your Visit
            </Link>
            <a
              href="tel:+14053498188"
              className="text-white/90 hover:text-white font-semibold text-base transition-colors w-full sm:w-auto text-center"
            >
              Call (405) 349-8188
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
