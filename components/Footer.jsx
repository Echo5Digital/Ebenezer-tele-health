import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Globe } from 'lucide-react'

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
    <footer className="section-navy text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand & NAP */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              {/*
               * Logo on dark background — if contrast is insufficient,
               * supply a white/inverted version as /ez_logo_white.png
               * and swap the src below.
               */}
              <Image
                src="/ez_logo.png"
                alt="Ebenezer Telehealth"
                width={130}
                height={52}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-xs">
              Faith-driven, compassionate telehealth for women and families across Oklahoma,
              based in Oklahoma City. Led by Dr. Susan George, DNP, APRN, BC-ADM.
            </p>
            {/* NAP — format must be identical everywhere */}
            <address className="not-italic space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-seafoam flex-shrink-0" aria-hidden="true" />
                <div>
                  <strong className="text-white">Ebenezer Telehealth</strong><br />
                  Oklahoma City, OK<br />
                  {/* TODO: Add full street address when available */}
                  <span className="text-gray-400 text-xs">[Full address — coming soon]</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-seafoam flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:4053498188"
                  className="hover:text-white transition-colors"
                >
                  (405) 349-8188
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-300">
                <Globe className="h-4 w-4 text-seafoam flex-shrink-0" aria-hidden="true" />
                <span>ebenezertelehealth.com</span>
              </div>
              {/* TODO: Add hours when confirmed */}
              <div className="text-xs text-gray-400 pt-1">
                [Hours — to be confirmed]
              </div>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Legal & Compliance
            </h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="text-xs text-gray-500 pt-2">
                {/* TODO: Add license number once confirmed */}
                License: [License # — placeholder]
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
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
