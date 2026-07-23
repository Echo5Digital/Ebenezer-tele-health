'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react'

const serviceItems = [
  { name: 'Weight Loss',   href: '/weight-loss' },
  { name: "Women's Health", href: '/womens-health' },
  { name: 'Minor Illness', href: '/minor-illness' },
]

const mainNav = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'About',   href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled,           setScrolled]           = useState(false)
  const [mobileMenuOpen,     setMobileMenuOpen]     = useState(false)
  const [servicesOpen,       setServicesOpen]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname    = usePathname()
  const dropdownRef = useRef(null)

  /* ── Scroll detection ─────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Reset on route change ────────────────────────────────── */
  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setScrolled(window.scrollY > 60)
  }, [pathname])

  /* ── Close desktop dropdown: outside click + Escape ──────── */
  const closeServices = useCallback(() => setServicesOpen(false), [])

  useEffect(() => {
    if (!servicesOpen) return
    const onMouseDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeServices()
      }
    }
    const onKeyDown = (e) => { if (e.key === 'Escape') closeServices() }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown',   onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown',   onKeyDown)
    }
  }, [servicesOpen, closeServices])

  /* ── Prevent body scroll while mobile menu is open ──────── */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const isHomePage      = pathname === '/'
  const isTransparent   = isHomePage && !scrolled
  const isServicesActive = serviceItems.some((item) => pathname === item.href)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top accent bar ──────────────────────────────────── */}
      <div
        className="h-1 w-full transition-opacity duration-300"
        style={{ backgroundColor: 'var(--primary)', opacity: isTransparent ? 0 : 1 }}
        aria-hidden="true"
      />

      {/* ── Outer padding wrapper ───────────────────────────── */}
      <div className="px-3 sm:px-5 lg:px-6 py-3">

        {/* ── Floating nav card ───────────────────────────────── */}
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between rounded-2xl px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[84px] lg:h-[100px] transition-all duration-300"
          aria-label="Global"
          style={{
            background:           'linear-gradient(135deg, rgba(255,255,255,0.82) 0%, rgba(151,206,204,0.18) 100%)',
            backdropFilter:       'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border:               '1px solid rgba(26,166,183,0.15)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(26,166,183,0.12), inset 0 1px 0 rgba(255,255,255,0.9)'
              : '0 2px 16px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="Ebenezer Telehealth — Home"
          >
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/ebenezer_logo_2.webp"
                alt="Ebenezer Telehealth"
                width={100}
                height={100}
                priority
                className="h-[52px] sm:h-[68px] lg:h-[88px] w-auto object-contain"
              />
            </div>
          </Link>

          {/* ── Desktop nav links ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">

            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${
                pathname === '/' ? 'text-primary' : 'text-gray-800 hover:text-primary'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isServicesActive || servicesOpen
                    ? 'text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-3 w-3 xl:h-3.5 xl:w-3.5 flex-shrink-0 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-xl overflow-hidden z-[60]"
                  style={{
                    background:           'linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(151,206,204,0.10) 100%)',
                    backdropFilter:       'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border:               '1px solid rgba(26,166,183,0.18)',
                    boxShadow:            '0 8px 24px rgba(26,166,183,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
                  }}
                >
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      role="menuitem"
                      className={`flex items-center px-4 py-3 text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${
                        pathname === item.href
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing / About / Contact */}
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-[11px] xl:text-xs font-bold uppercase tracking-widest transition-colors ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTA ───────────────────────────────────── */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <a
              href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 xl:px-6 py-2.5 xl:py-3 text-[11px] xl:text-xs font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
              style={{ backgroundColor: 'var(--primary)' }}
            >
              Book Your Visit
              <ArrowUpRight className="h-3.5 w-3.5 xl:h-4 xl:w-4 flex-shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* ── Mobile hamburger ──────────────────────────────── */}
          <button
            type="button"
            className="lg:hidden flex-shrink-0 rounded-full p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-gray-800 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen
              ? <X    className="h-5 w-5" aria-hidden="true" />
              : <Menu className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </nav>

        {/* ── Mobile menu panel ────────────────────────────────── */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mx-auto max-w-7xl mt-2 rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              background:           'linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(151,206,204,0.10) 100%)',
              backdropFilter:       'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border:               '1px solid rgba(26,166,183,0.18)',
              boxShadow:            '0 8px 32px rgba(26,166,183,0.12), inset 0 1px 0 rgba(255,255,255,0.8)',
              /* Constrain height so it never overflows the viewport */
              maxHeight:            'calc(100dvh - 120px)',
              overflowY:            'auto',
            }}
          >
            <div className="px-3 py-3 sm:px-4 sm:py-4">

              {/* ── Nav links ──────────────────────────────────── */}
              <div className="space-y-0.5">

                {/* Home */}
                <Link
                  href="/"
                  className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                    pathname === '/'
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Services accordion */}
                <div>
                  <button
                    type="button"
                    className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                      isServicesActive
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services-menu"
                  >
                    Services
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div
                      id="mobile-services-menu"
                      className="mt-0.5 mb-1 ml-3 space-y-0.5 border-l-2 pl-3"
                      style={{ borderColor: 'rgba(26,166,183,0.25)' }}
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors ${
                            pathname === item.href
                              ? 'text-primary bg-primary/5'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Pricing / About / Contact */}
                {mainNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-widest transition-colors ${
                      pathname === item.href
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* ── Mobile CTAs ────────────────────────────────── */}
              <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                <a
                  href="tel:+14053498188"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors min-h-[44px]"
                >
                  <Phone
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                    aria-hidden="true"
                  />
                  Call (405) 349-8188
                </a>
                <a
                  href="https://www.optimantra.com/optimus/patient/patientaccess/servicesall?pid=RThiMDN3R1ZQUGZlYytLRUxqQ0UrZz09&lid=aFhJc2tsSlJuZjdqU0tVT1N5TWxXQT09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:opacity-90 min-h-[44px]"
                  style={{ backgroundColor: 'var(--primary)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Your Visit
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  )
}
