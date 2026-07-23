'use client'

/**
 * InjectionsFAQAccordion - Client Component
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
    id: 'inj-faq-1',
    question: 'Where are injections given?',
    answer:
      "In person at our Oklahoma City clinic. Walk-ins welcome. Injections aren't available by telehealth.",
  },
  {
    id: 'inj-faq-2',
    question: 'Do I need an appointment?',
    answer: 'No. Walk in, or book ahead if you prefer.',
  },
  {
    id: 'inj-faq-3',
    question: 'What does it cost?',
    answer:
      'Injections are cash-pay. Contact the clinic for current per-injection pricing. No insurance required.',
  },
  {
    id: 'inj-faq-4',
    question: 'Do injections treat medical conditions?',
    answer:
      "No. They're supportive wellness injections given after a provider evaluation, not a treatment or cure.",
  },
]

export default function InjectionsFAQAccordion() {
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
