'use client'

/**
 * MinorIllnessFAQAccordion — Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    id: 'mi-faq-1',
    question: 'Can I really be treated for a sinus infection online?',
    answer:
      "Yes. Most minor illnesses can be evaluated and treated by video. If Susan George determines you need in-person care or testing, she'll guide you to the right facility.",
  },
  {
    id: 'mi-faq-2',
    question: 'Can I get an antibiotic prescribed online?',
    answer:
      'Yes, when clinically appropriate and within telemedicine scope. Prescriptions are sent electronically to your preferred pharmacy.',
  },
  {
    id: 'mi-faq-3',
    question: 'How fast can I be seen?',
    answer:
      'Same-day appointments are often available. Book online or call (405) 349-8188.',
  },
  {
    id: 'mi-faq-4',
    question: 'How much does it cost?',
    answer: '$50 per visit, cash-pay. No insurance needed.',
  },
  {
    id: 'mi-faq-5',
    question: 'Where in Oklahoma do you serve?',
    answer:
      'Anywhere in the state — OKC, Tulsa, Edmond, Norman, Lawton, rural communities, and everywhere in between.',
  },
  {
    id: 'mi-faq-6',
    question: 'What if my condition is more serious?',
    answer:
      "If your symptoms require urgent or emergency care beyond telehealth, Susan George will tell you clearly and help you find the right next step.",
  },
]

export default function MinorIllnessFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class — speakable schema target; do not rename */}
            <p className="faq-answer">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
