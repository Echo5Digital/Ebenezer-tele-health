import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Mail, ArrowUpRight, Facebook, Instagram } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574508671023', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/ebenezertelehealth/', Icon: Instagram },
]

const serviceLinks = [
  { name: 'Primary Care',            href: '/primary-care' },
  { name: 'Medical Weight Loss',     href: '/weight-loss' },
  { name: "Women's Health",          href: '/womens-health' },
  { name: 'Minor Illness Treatment', href: '/minor-illness' },
  { name: 'Vitamin & B12 Injections', href: '/injections' },
  {
    name: 'IV Therapy & Hydration',  href: '/iv-therapy',
    children: [
      { name: "Myers' Cocktail IV", href: '/iv-therapy/myers-cocktail' },
      { name: 'Beauty Blend IV',    href: '/iv-therapy/beauty-blend' },
    ],
  },
  { name: 'Televisits (Telehealth)', href: '/telehealth' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'HIPAA Notice', href: '/hipaa-notice' },
  { name: 'Terms of Use', href: '/terms' },
  { name: 'Informed Consent', href: '/consent' },
]

const sectionHeadingStyle = {
  color: '#97CECC',
  borderBottom: '1px solid rgba(151,206,204,0.20)',
}

export default function Footer() {
  return (
    <footer
      className="text-white"
      role="contentinfo"
      style={{
        backgroundColor: '#063B45',
        background: 'linear-gradient(180deg, #062F38 0%, #08404E 40%, #0A4D5C 100%)',
      }}
    >
      {/* Primary color top accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #1AA6B7 0%, #97CECC 50%, #1AA6B7 100%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div>
            <Link href="/" aria-label="Ebenezer Health Clinic — Home" className="inline-block mb-5">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/ebenezerhealth-clinic-okc.webp"
                  alt="Ebenezer Health Clinic"
                  width={360}
                  height={144}
                  className="h-20 sm:h-28 lg:h-36 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              A full walk-in clinic serving individuals and families across Oklahoma,
              plus telehealth statewide. Led by Dr. Susan George, DNP, APRN, BC-ADM.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="social-link flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-lg flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    backgroundColor: 'rgba(151,206,204,0.12)',
                    color: '#97CECC',
                    '--tw-ring-color': '#97CECC',
                  }}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: 'currentColor' }} />
                </a>
              ))}
            </div>
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
                  style={{ backgroundColor: 'rgba(151,206,204,0.12)' }}
                  aria-hidden="true"
                >
                  <MapPin className="h-3.5 w-3.5"                   style={{ color: '#97CECC' }} />
                </div>
                <div>
                  <strong className="text-white font-semibold block mb-0.5">Ebenezer Health Clinic</strong>
                  7415 NW 23rd Street, Bethany, OK 73008
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(151,206,204,0.12)' }}
                  aria-hidden="true"
                >
                  <Phone className="h-3.5 w-3.5" style={{ color: '#97CECC' }} />
                </div>
                <a href="tel:+14053498188" className="font-medium transition-colors hover:text-white">
                  (405) 349-8188
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                <div
                  className="flex-shrink-0 h-7 w-7 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(151,206,204,0.12)' }}
                  aria-hidden="true"
                >
                  <Mail className="h-3.5 w-3.5" style={{ color: '#97CECC' }} />
                </div>
                <a
                  href="mailto:ebenezerhealth@outlook.com"
                  className="font-medium transition-colors hover:text-white break-all"
                >
                  ebenezerhealth@outlook.com
                </a>
              </div>

{/* Hours */}
              <p className="text-xs pl-10" style={{ color: 'rgba(255,255,255,0.28)' }}>
                Available most days of the week and most Saturdays.
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
                      style={{ color: '#97CECC' }}
                      aria-hidden="true"
                    />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>

                  {/* Submenu: IV Therapy's child pages, indented beneath it */}
                  {link.children && (
                    <ul className="mt-3 ml-[11px] space-y-3">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className="flex items-center gap-2 text-[13px] group transition-colors"
                            style={{ color: 'rgba(255,255,255,0.40)' }}
                          >
                            <ArrowUpRight
                              className="h-3 w-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              style={{ color: '#97CECC' }}
                              aria-hidden="true"
                            />
                            <span className="group-hover:text-white transition-colors">{child.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
          <p className="text-center sm:text-left">
            &copy; 2026 Created with{' '}
            <a
              href="https://www.echo5digital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Echo5 Digital
            </a>
          </p>
          <p className="text-center sm:text-right">
            Telehealth services provided in Oklahoma only.{' '}
            Not a substitute for emergency care.
          </p>
        </div>
      </div>
    </footer>
  )
}
