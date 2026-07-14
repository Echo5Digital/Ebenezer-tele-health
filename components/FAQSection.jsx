'use client'

/**
 * FAQSection — Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 */

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    id: 'faq-1',
    question: 'Do you offer telehealth in Oklahoma City and statewide?',
    answer:
      'Yes. We provide telehealth visits across all of Oklahoma, plus in-person appointments in Oklahoma City on Saturdays by appointment.',
    extra: null,
  },
  {
    id: 'faq-2',
    question: 'Is this like seeing a doctor?',
    answer:
      'Yes. You receive a full medical evaluation, diagnosis, treatment plan, and prescriptions when appropriate from a licensed, Board Certified provider.',
    extra: null,
  },
  {
    id: 'faq-3',
    question: 'Do I need insurance?',
    answer:
      "No. We're a cash-pay clinic with transparent pricing, so you know your cost before you book.",
    extra: null,
  },
  {
    id: 'faq-4',
    question: 'What areas do you serve?',
    answer:
      "In-person visits are in Oklahoma City; telehealth is available anywhere in Oklahoma as long as you're in the state at the time of your visit.",
    extra: null,
  },
  {
    id: 'faq-5',
    question: 'What do you treat?',
    answer:
      "Medical weight loss, women's health, and minor illnesses. For anything outside our scope, we'll guide you to the right care.",
    extra: null,
  },
  {
    id: 'faq-6',
    question: 'How soon can I be seen?',
    answer:
      'Same-day telehealth visits are often available. Ask about in person Saturday appointments in Oklahoma City.',
    extra: null,
  },
  {
    id: 'faq-7',
    question: 'What if I have a medical emergency?',
    answer:
      'Ebenezer Telehealth is not for emergencies. Call 911 or go to your nearest emergency room.',
    extra: null,
  },
]

export default function FAQSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="faq-heading"
      style={{
        backgroundImage: "url('/body_bg2.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Cream overlay — keeps content legible, lets bg image show subtly */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(232,247,247,0.52)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--primary)' }}
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--navy)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {/* "faq-answer" class — speakable schema target; do not rename */}
                <p className="faq-answer">{faq.answer}</p>
                {faq.extra}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
