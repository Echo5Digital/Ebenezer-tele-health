import { Star } from 'lucide-react'

const placeholderTestimonials = [
  {
    id: 1,
    text: 'This is a placeholder for a real patient review. Replace with verified Google review.',
    author: 'Patient Name',
    location: 'Oklahoma City, OK',
  },
  {
    id: 2,
    text: 'This is a placeholder for a real patient review. Replace with verified Google review.',
    author: 'Patient Name',
    location: 'Tulsa, OK',
  },
  {
    id: 3,
    text: 'This is a placeholder for a real patient review. Replace with verified Google review.',
    author: 'Patient Name',
    location: 'Norman, OK',
  },
]

// NOTE: No sub-component functions at module level — this is a Server Component.
// Defining a named function component here causes __webpack_modules__[moduleId]
// is not a function at runtime in Next.js 15. Keep all JSX inlined instead.

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: '#035D57' }} aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#99D9D9' }}
          >
            Patient Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#ffffff' }}
          >
            What Our Patients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {/* Placeholder notice */}
              <div
                className="inline-block self-start rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: 'rgba(153,217,217,0.22)',
                  color: '#99D9D9',
                }}
              >
                Client review placeholder
              </div>

              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote
                className="text-sm italic leading-relaxed flex-1"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <figcaption
                className="flex items-center gap-3 pt-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(153,217,217,0.28)',
                    color: '#ffffff',
                  }}
                  aria-hidden="true"
                >
                  P
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  >
                    {testimonial.author}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Google review note */}
        <p
          className="text-center text-sm mt-8"
          style={{ color: 'rgba(255,255,255,0.50)' }}
        >
          Reviews will be sourced from Google. Placeholders above will be replaced with
          real patient feedback.
        </p>
      </div>
    </section>
  )
}
