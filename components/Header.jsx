'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Weight Loss', href: '/weight-loss' },
  { name: 'Minor Illness', href: '/minor-illness' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Ebenezer Telehealth — Home"
          >
            <Image
              src="/ez_logo.png"
              alt="Ebenezer Telehealth"
              width={130}
              height={52}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href
                  ? 'text-primary font-semibold'
                  : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          <a
            href="tel:4053498188"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (405) 349-8188
          </a>
          <a
            href="/contact"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Book Your Visit
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white" role="dialog" aria-modal="true">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-mint/30 text-primary'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <a
                href="tel:4053498188"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700"
              >
                <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                Call (405) 349-8188
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
