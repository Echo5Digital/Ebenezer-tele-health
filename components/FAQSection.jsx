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
    question: 'Is an online visit with Ebenezer a real medical appointment?',
    answer:
      'Yes. You meet directly with Dr. Susan George, DNP, APRN, for a private telehealth consultation just like an in-person medical appointment.',
    extra: null,
  },
  {
    id: 'faq-2',
    question: 'Do I need insurance?',
    answer:
      'No. Ebenezer Telehealth is a transparent cash-pay practice, so insurance is not required.',
    extra: null,
  },
  {
    id: 'faq-3',
    question: 'Where in Oklahoma can I be seen?',
    answer:
      'Anywhere in Oklahoma, as long as you are physically located in the state during your telehealth appointment.',
    extra: null,
  },
  {
    id: 'faq-4',
    question: 'Do you prescribe weight-loss medications like semaglutide?',
    answer:
      'Yes, when medically appropriate. We evaluate patients for GLP-1 medications and other evidence-based weight-loss treatments.',
    extra: null,
  },
  {
    id: 'faq-5',
    question: 'Can I get a prescription?',
    answer:
      'Yes. Prescriptions are sent electronically to your preferred pharmacy when clinically appropriate.',
    extra: null,
  },
  {
    id: 'faq-6',
    question: 'How soon can I be seen?',
    answer:
      'Same-day appointments are often available. Contact us or book online to check current availability.',
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
