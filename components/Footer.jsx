import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react'

const serviceLinks = [
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Weight Loss Management', href: '/weight-loss' },
  { name: 'Minor Illness Treatment', href: '/minor-illness' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'HIPAA Notice', href: '/hipaa-notice' },
]

export default function Footer() {
  return (
    <footer
      className="text-white"
      role="contentinfo"
      style={{
        background: 'linear-gradient(180deg, #0D1E30 0%, var(--navy) 100%)',
      }}
    >
      {/* Primary color top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, var(--primary) 0%, var(--mint) 50%, var(--primary) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand & NAP — 5 of 12 columns */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <Link href="/" aria-label="Ebenezer Telehealth — Home" className="inline-block mb-5">
              <Image
                src="/ez_logo.png"
                alt="Ebenezer Telehealth"
                width={160}
                height={64}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Faith-driven, compassionate telehealth for women and families across Oklahoma,
              based in Oklahoma City. Led by Dr. Susan George, DNP, APRN, BC-ADM.
            </p>

            {/* NAP */}
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <MapPin
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--seafoam)' }}
                  aria-hidden="true"
                />
                <div>
                  <strong className="text-white font-semibold">Ebenezer Telehealth</strong><br />
                  Oklahoma City, OK<br />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    [Full address — coming soon]
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <Phone
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: 'var(--seafoam)' }}
                  aria-hidden="true"
                />
                <a
                  href="tel:4053498188"
                  className="transition-colors hover:text-white"
                >
                  (405) 349-8188
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <Globe
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: 'var(--seafoam)' }}
                  aria-hidden="true"
                />
                <span>ebenezertelehealth.com</span>
              </div>

              <div className="text-xs pt-1" style={{ color: 'rgba(255,255,255,0.30)' }}>
                [Hours — to be confirmed]
              </div>
            </address>
          </div>

          {/* Spacer on desktop */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* Services — 3 of 12 */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
              style={{
                color: 'var(--mint)',
                borderBottom: '1px solid rgba(184,232,220,0.2)',
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm group transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--mint)' }}
                      aria-hidden="true"
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal — 3 of 12 */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-2"
              style={{
                color: 'var(--mint)',
                borderBottom: '1px solid rgba(184,232,220,0.2)',
              }}
            >
              Legal &amp; Compliance
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm group transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <ArrowUpRight
                      className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--mint)' }}
                      aria-hidden="true"
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
              <li className="text-xs pt-1" style={{ color: 'rgba(255,255,255,0.28)' }}>
                {/* TODO: Add license number once confirmed */}
                License: [License # — placeholder]
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Ebenezer Telehealth &middot; Oklahoma City, OK &middot;{' '}
            (405) 349-8188 &middot; ebenezertelehealth.com
          </p>
          <p className="text-center sm:text-right">
            Telehealth services provided in Oklahoma only.
            Not a substitute for emergency care.
          </p>
        </div>
      </div>
    </footer>
  )
}
