import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Globe, Mail, ArrowUpRight } from 'lucide-react'

const serviceLinks = [
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Weight Loss Management', href: '/weight-loss' },
  { name: 'Minor Illness Treatment', href: '/minor-illness' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'HIPAA Notice', href: '/hipaa-notice' },
]

const sectionHeadingStyle = {
  color: '#99D9D9',
  borderBottom: '1px solid rgba(153,217,217,0.20)',
}

export default function Footer() {
  return (
    <footer
      className="text-white"
      role="contentinfo"
      style={{
        backgroundColor: '#02403B',
        background: 'linear-gradient(180deg, #02403B 0%, #024843 40%, #035D57 100%)',
      }}
    >
      {/* Primary color top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #035D57 0%, #99D9D9 50%, #035D57 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div>
            <Link href="/" aria-label="Ebenezer Telehealth — Home" className="inline-block mb-6">
              <div
                className="rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  padding: '8px 16px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
                }}
              >
                <Image
                  src="/ebenezer_logo.webp"
                  alt="Ebenezer Telehealth"
                  width={160}
                  height={64}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Faith-driven, compassionate telehealth for women and families across Oklahoma.
              Led by Dr. Susan George, DNP, APRN, BC-ADM.
            </p>
          </div>

          {/* ── Col 2: Contact ── */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-2.5"
              style={sectionHeadingStyle}
            >
              Contact
            </h3>

            <address className="not-italic space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(153,217,217,0.12)' }}
                  aria-hidden="true"
                >
                  <MapPin className="h-3.5 w-3.5"                   style={{ color: '#99D9D9' }} />
                </div>
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Ebenezer Telehealth</strong>
                  Oklahoma City, OK
                  <br />
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>
                    [Full address — coming soon]
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(153,217,217,0.12)' }}
                  aria-hidden="true"
                >
                  <Phone className="h-3.5 w-3.5" style={{ color: '#99D9D9' }} />
                </div>
                <a href="tel:+14053498188" className="font-medium transition-colors hover:text-white">
                  (405) 349-8188
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(153,217,217,0.12)' }}
                  aria-hidden="true"
                >
                  <Mail className="h-3.5 w-3.5" style={{ color: '#99D9D9' }} />
                </div>
                <a
                  href="mailto:contact@ebenezertelehealth.com"
                  className="font-medium transition-colors hover:text-white"
                >
                  contact@ebenezertelehealth.com
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(153,217,217,0.12)' }}
                  aria-hidden="true"
                >
                  <Globe className="h-3.5 w-3.5" style={{ color: '#99D9D9' }} />
                </div>
                <span>ebenezertelehealth.com</span>
              </div>

              {/* Hours */}
              <p className="text-xs pl-10" style={{ color: 'rgba(255,255,255,0.28)' }}>
                [Hours — to be confirmed]
              </p>
            </address>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-2.5"
              style={sectionHeadingStyle}
            >
              Services
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm group transition-colors"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    <ArrowUpRight
                      className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: '#99D9D9' }}
                      aria-hidden="true"
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Legal ── */}
          <div>
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-5 pb-2.5"
              style={sectionHeadingStyle}
            >
              Legal &amp; Compliance
            </h3>
            <ul className="space-y-3.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm group transition-colors"
                    style={{ color: 'rgba(255,255,255,0.50)' }}
                  >
                    <ArrowUpRight
                      className="h-3.5 w-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--mint)' }}
                      aria-hidden="true"
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
              <li className="text-xs pt-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {/* TODO: Add license number once confirmed */}
                License: [License # — placeholder]
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            color: 'rgba(255,255,255,0.30)',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Ebenezer Telehealth &middot; Oklahoma City, OK &middot;{' '}
            (405) 349-8188
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
