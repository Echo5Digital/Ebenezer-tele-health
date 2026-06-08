'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scroll-triggered entrance animations for all pages except home.
 * - Adds `body.service-page` class (used by CSS card-hover rules)
 * - Observes all non-hero sections with IntersectionObserver
 * - Adds `.anim-up` (start state) and `.in-view` (visible) classes
 * - Stagger-delays children inside grid/flex card containers
 */
export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    const isHome = pathname === '/'

    // Toggle CSS scope class for card-hover rules
    document.body.classList.toggle('service-page', !isHome)

    if (isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('in-view')
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    )

    // All sections in main; skip index 0 (hero — always above fold)
    const sections = Array.from(document.querySelectorAll('main > section'))
    sections.slice(1).forEach((section) => {
      section.classList.add('anim-up')
      observer.observe(section)

      // Stagger direct card children inside any grid within the section
      section.querySelectorAll(':scope .grid, :scope .flex.flex-col').forEach((container) => {
        Array.from(container.children).forEach((child, i) => {
          if (i >= 1 && i <= 5) {
            child.classList.add(`sd-${i}`)
          }
        })
      })
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
