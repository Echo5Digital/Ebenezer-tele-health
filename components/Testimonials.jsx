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

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            Patient Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            What Our Patients Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderTestimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              {/* Placeholder notice */}
              <div
                className="inline-block self-start rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: 'rgba(184,232,220,0.4)',
                  color: 'var(--primary-dark)',
                }}
              >
                Client review placeholder
              </div>

              <StarRating />

              <blockquote className="text-sm text-gray-400 italic leading-relaxed flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: 'var(--seafoam)' }}
                  aria-hidden="true"
                >
                  P
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-400">{testimonial.author}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Google review note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Reviews will be sourced from Google. Placeholders above will be replaced with
          real patient feedback.
        </p>
      </div>
    </section>
  )
}
