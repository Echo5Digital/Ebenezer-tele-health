'use client'

/**
 * PrimaryCareFAQAccordion - Client Component
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
    id: 'pc-faq-1',
    question: 'Do you take walk-ins for primary care?',
    answer:
      'Yes. Walk in to our Oklahoma City clinic or book ahead. We make it easy to be seen when it works for you.',
  },
  {
    id: 'pc-faq-2',
    question: 'Do I need insurance?',
    answer:
      "No. We're a cash-pay clinic. No insurance required, no surprise bills. Pricing is confirmed before your visit.",
  },
  {
    id: 'pc-faq-3',
    question: 'Can I have a telehealth primary care visit?',
    answer:
      "Some primary care needs can be handled by telehealth; others are best in person. We'll guide you to the right type of visit.",
  },
  {
    id: 'pc-faq-4',
    question: 'Who will I see?',
    answer:
      'A credentialed provider: Dr. Susan George, DNP, APRN, or a member of our care team.',
  },
]

export default function PrimaryCareFAQAccordion() {
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
