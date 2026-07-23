'use client'

/**
 * IVTherapyFAQAccordion - Client Component
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
    id: 'iv-faq-1',
    question: 'Where is IV therapy given?',
    answer:
      "In person at our Oklahoma City clinic. It isn't available by telehealth.",
  },
  {
    id: 'iv-faq-2',
    question: 'Do I need an appointment?',
    answer: 'No. Walk in, or book ahead.',
  },
  {
    id: 'iv-faq-3',
    question: 'What does it cost?',
    answer:
      'IV therapy is cash-pay. Contact the clinic for current pricing. No insurance required.',
  },
  {
    id: 'iv-faq-4',
    question: 'Does IV therapy cure illness or hangovers?',
    answer:
      "No. It provides hydration and nutrient support after a provider evaluation and isn't a treatment for any condition.",
  },
  {
    id: 'iv-faq-5',
    question: 'Is it safe for everyone?',
    answer:
      "Not always. That's why every IV is preceded by a provider evaluation.",
  },
]

export default function IVTherapyFAQAccordion() {
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
