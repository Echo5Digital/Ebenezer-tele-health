'use client'

import { useRef, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: "Getting birth control online seemed like a stretch at first, but Ebenezer Telehealth made it genuinely easy. Susan George listened carefully and walked me through every option without rushing. My prescription was at my pharmacy the same afternoon. Living 45 minutes from the city, this kind of access is a real game-changer.",
    author: 'Jennifer M.',
    location: 'Edmond, OK',
    service: "Women's Health",
    initial: 'J',
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    text: "Had a bad sinus infection and couldn't get in anywhere for three days. Found Ebenezer Telehealth, booked online, and was seen within the hour. Susan George was professional and thorough. My prescription was sent straight to my pharmacy. Seventy-five dollars, done in 30 minutes, feeling better the next day. This is how healthcare should work.",
    author: 'Marcus T.',
    location: 'Oklahoma City, OK',
    service: 'Minor Illness',
    initial: 'M',
  },
  {
    id: 3,
    text: "I've tried everything for weight loss. Susan George actually looked at my full health history and explained the metabolic reasons why diets hadn't worked. She built a real plan with GLP-1 management and proper follow-up. Three months in and I'm down 22 pounds. I finally have real medical support, not just a script.",
    author: 'Debra L.',
    location: 'Tulsa, OK',
    service: 'Weight Loss',
    initial: 'D',
  },
  {
    id: 4,
    text: "I needed PCOS management and was dreading a months-long wait for a specialist. Ebenezer Telehealth got me seen in days. Susan George ordered labs, reviewed the results with me personally, and adjusted my treatment plan based on my actual numbers. Highly recommend for any woman dealing with hormonal health issues.",
    author: 'Rachel K.',
    location: 'Norman, OK',
    service: "Women's Health",
    initial: 'R',
    imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
  {
    id: 5,
    text: "I was skeptical about telehealth for something as complex as weight management, but the experience exceeded every expectation. Susan George's BC-ADM certification isn't just a credential. She applies real metabolic knowledge. The follow-up visits keep me accountable and the care feels genuinely personalized.",
    author: 'Steven P.',
    location: 'Moore, OK',
    service: 'Weight Loss',
    initial: 'S',
  },
  {
    id: 6,
    text: "Two kids, a full-time job, and no time for urgent care waiting rooms. My daughter had pink eye and I had a UTI at the same time. Both were handled in one visit, prescriptions sent immediately. Susan George was warm, patient, and efficient. Done before I would have even checked in at a walk-in clinic.",
    author: 'Alicia B.',
    location: 'Owasso, OK',
    service: 'Minor Illness',
    initial: 'A',
  },
]

// Duplicate the list so the carousel has content to scroll into on both sides
const extendedReviews = [...reviews, ...reviews]

export default function Testimonials() {
  const scrollRef = useRef(null)
  const isHovered = useRef(false)

  // Manual navigation (used by both buttons)
  const advance = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardW = card ? card.offsetWidth + 20 : 340
    const half = el.scrollWidth / 2

    if (dir < 0 && el.scrollLeft < 1) {
      // At the very start going backward: jump to clone-section start, then scroll back
      // This creates a seamless wrap: clone card 0 looks identical to real card 0
      el.scrollLeft = half
      el.scrollBy({ left: -cardW, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: dir * cardW, behavior: 'smooth' })
    }
  }

  // After each scroll animation settles, silently reset position if in the clone zone.
  // Because clone cards are visually identical to originals, the jump is invisible.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const settle = () => {
      const half = el.scrollWidth / 2
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half
      }
    }

    let debounce
    const onScroll = () => {
      clearTimeout(debounce)
      debounce = setTimeout(settle, 120)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      clearTimeout(debounce)
    }
  }, [])

  // Auto-scroll every 3.8 s, paused while the user hovers
  useEffect(() => {
    const autoAdvance = () => {
      const el = scrollRef.current
      if (!el || isHovered.current) return
      const card = el.querySelector('[data-card]')
      const cardW = card ? card.offsetWidth + 20 : 340
      el.scrollBy({ left: cardW, behavior: 'smooth' })
    }

    const interval = setInterval(autoAdvance, 3800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      style={{ backgroundColor: '#1AA6B7' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#97CECC' }}
          >
            Patient Reviews
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#ffffff' }}
          >
            What Our Patients Say
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative"
          onMouseEnter={() => { isHovered.current = true }}
          onMouseLeave={() => { isHovered.current = false }}
        >

          {/* Prev button — always active */}
          <button
            onClick={() => advance(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-3 sm:-translate-x-5 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-all"
            style={{ backgroundColor: '#ffffff', color: '#1AA6B7', cursor: 'pointer' }}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Scrollable track — renders 12 cards (6 originals + 6 clones) */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory px-1 pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {extendedReviews.map((review, idx) => (
              <figure
                key={`${review.id}-${idx}`}
                data-card
                className="snap-start flex-shrink-0 flex flex-col gap-4 rounded-2xl p-6 bg-white"
                style={{
                  width: 'min(85vw, 320px)',
                  border: '1px solid rgba(26,166,183,0.14)',
                  boxShadow: '0 2px 18px rgba(26,166,183,0.08)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-sm text-gray-600 leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author row */}
                <figcaption
                  className="flex items-center gap-3 pt-3"
                  style={{ borderTop: '1px solid rgba(26,166,183,0.10)' }}
                >
                  {review.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={review.imageUrl}
                      alt={review.author}
                      className="h-9 w-9 rounded-full object-cover flex-shrink-0"
                      style={{ border: '2px solid rgba(26,166,183,0.30)' }}
                    />
                  ) : (
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 text-white"
                      style={{ backgroundColor: 'var(--primary)' }}
                      aria-hidden="true"
                    >
                      {review.initial}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{review.author}</p>
                    <p className="text-xs text-gray-500 truncate">{review.location}</p>
                  </div>
                  {/* Google G */}
                  <svg
                    className="ml-auto h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    aria-label="Google review"
                    role="img"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Next button — always active */}
          <button
            onClick={() => advance(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-3 sm:translate-x-5 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-all"
            style={{ backgroundColor: '#ffffff', color: '#1AA6B7', cursor: 'pointer' }}
            aria-label="Next reviews"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

      </div>
    </section>
  )
}
