'use client'

/**
 * TelehealthFAQAccordion - Client Component
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
    id: 'th-faq-1',
    question: 'Is a televisit like seeing a doctor?',
    answer:
      'Yes. You receive a real evaluation, diagnosis, treatment plan, and prescriptions when appropriate from a licensed provider.',
  },
  {
    id: 'th-faq-2',
    question: 'Where in Oklahoma can I use telehealth?',
    answer:
      "Anywhere in the state, as long as you're in Oklahoma at the time of your visit.",
  },
  {
    id: 'th-faq-3',
    question: "What if I'd rather be seen in person?",
    answer: "Walk in to our Oklahoma City clinic anytime we're open.",
  },
  {
    id: 'th-faq-4',
    question: 'Do I need insurance?',
    answer: 'No. Cash-pay, transparent pricing.',
  },
]

export default function TelehealthFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class - speakable schema target; do not rename */}
            <p className="faq-answer">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
