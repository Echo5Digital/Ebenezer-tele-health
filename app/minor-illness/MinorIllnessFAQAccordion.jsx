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
    question: 'Can I get online UTI treatment or sinus infection treatment in Oklahoma?',
    answer:
      'Yes. Most minor illnesses can be evaluated online, with prescriptions sent to your pharmacy when appropriate.',
  },
  {
    id: 'mi-faq-2',
    question: 'Is this a walk-in alternative in OKC?',
    answer:
      'Yes. A same-day clinic option in person on Saturdays in Oklahoma City, or online across the state.',
  },
  {
    id: 'mi-faq-3',
    question: 'How much does it cost?',
    answer: '$50 per visit. No insurance required.',
  },
  {
    id: 'mi-faq-4',
    question: 'Can I get a prescription or refill?',
    answer:
      'When clinically appropriate, prescriptions and basic refills can be provided.',
  },
  {
    id: 'mi-faq-5',
    question: 'How fast can I be seen?',
    answer: 'Same-day online visits are often available.',
  },
  {
    id: 'mi-faq-6',
    question: 'What if it\'s an emergency?',
    answer:
      'This service is not for emergencies. Call 911 or go to the nearest ER.',
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
