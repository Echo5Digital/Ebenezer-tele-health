'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Weight Loss', href: '/weight-loss' },
  { name: 'Minor Illness', href: '/minor-illness' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll() // set correct state on initial render
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Brand accent bar — only when scrolled */}
      <div
        className="h-1 w-full transition-opacity duration-300"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: scrolled ? 1 : 0,
        }}
        aria-hidden="true"
      />

      {/* Backdrop wrapper */}
      <div
        className="px-3 sm:px-5 lg:px-6 py-3 transition-all duration-300"
        style={scrolled ? {
          background: 'linear-gradient(180deg, rgba(184,232,220,0.22) 0%, rgba(255,255,255,0.97) 100%)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        } : {}}
      >
        {/* Floating nav card */}
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-5 sm:px-7 h-[68px] transition-all duration-300"
          aria-label="Global"
          style={scrolled ? {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(184,232,220,0.18) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(42,122,111,0.18)',
            boxShadow: '0 4px 24px rgba(42,122,111,0.10), inset 0 1px 0 rgba(255,255,255,0.8)',
          } : {
            background: 'transparent',
            border: '1px solid transparent',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Ebenezer Telehealth — Home"
          >
            <Image
              src="/ez_logo.png"
              alt="Ebenezer Telehealth"
              width={148}
              height={60}
              priority
              className={`h-11 w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  scrolled
                    ? pathname === item.href
                      ? 'text-primary'
                      : 'text-gray-500 hover:text-gray-800'
                    : pathname === item.href
                    ? 'text-white'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4053498188"
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                scrolled ? 'text-gray-500 hover:text-primary' : 'text-white/75 hover:text-white'
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (405)&nbsp;349-8188
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Book Your Visit
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden rounded-full p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              scrolled ? 'text-gray-500 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <X className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </nav>

        {/* Mobile dropdown card */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden mx-auto max-w-7xl mt-2 rounded-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(184,232,220,0.18) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(42,122,111,0.18)',
              boxShadow: '0 8px 32px rgba(42,122,111,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            <div className="px-4 py-4">
              {/* Nav links */}
              <div className="space-y-0.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                      pathname === item.href
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <a
                  href="tel:4053498188"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <Phone
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  Call (405) 349-8188
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--primary)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Your Visit
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
