'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const navigation = [
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Weight Loss', href: '/weight-loss' },
  { name: 'Minor Illness', href: '/minor-illness' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transparent only on the home page where the dark hero provides contrast.
  // On all other pages the body background is light, so the glass card is always shown.
  const isHomePage = pathname === '/'
  const isTransparent = isHomePage && !scrolled

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Brand accent bar — only when not transparent */}
      <div
        className="h-1 w-full transition-opacity duration-300"
        style={{
          backgroundColor: 'var(--primary)',
          opacity: isTransparent ? 0 : 1,
        }}
        aria-hidden="true"
      />

      {/* Backdrop wrapper */}
      <div
        className="px-3 sm:px-5 lg:px-6 py-3 transition-all duration-300"
        style={isTransparent ? {} : {
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        {/* Floating nav card */}
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-5 sm:px-7 h-[68px] transition-all duration-300"
          aria-label="Global"
          style={isTransparent ? {
            background: '#035D57',
            border: '1px solid rgba(255,255,255,0.15)',
          } : {
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(153,217,217,0.25) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(3,93,87,0.18)',
            boxShadow: '0 4px 24px rgba(3,93,87,0.05), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Ebenezer Telehealth — Home"
          >
            <div
              className="rounded-xl transition-all duration-300"
              style={isTransparent ? {
                background: 'rgba(255,255,255,0.92)',
                padding: '5px 12px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
              } : {}}
            >
              <Image
                src="/ebenezer_logo.webp"
                alt="Ebenezer Telehealth"
                width={108}
                height={100}
                priority
                className="h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  isTransparent
                    ? pathname === item.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                    : pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14053498188"
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                isTransparent ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-primary'
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
              isTransparent ? 'text-white/85 hover:bg-white/10' : 'text-gray-500 hover:bg-gray-100'
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
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(153,217,217,0.12) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(3,93,87,0.18)',
              boxShadow: '0 8px 32px rgba(3,93,87,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
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
                  href="tel:+14053498188"
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
