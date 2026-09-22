'use client'

/**
 * BeautyBlendFAQAccordion - Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 *
 * Uses a local force-mounted AccordionContent (Radix `forceMount`) so answer
 * text is present in the server-rendered DOM even while collapsed — the
 * shared components/ui/accordion.jsx unmounts collapsed content, which keeps
 * FAQ answers out of the initial HTML (schema-only, the recurring AEO bug).
 */

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function AccordionContent({ children }) {
  return (
    <AccordionPrimitive.Content
      forceMount
      className="overflow-hidden text-sm h-0 data-[state=closed]:animate-accordion-up data-[state=open]:h-auto data-[state=open]:animate-accordion-down"
    >
      <div className="pb-5 pt-1">{children}</div>
    </AccordionPrimitive.Content>
  )
}

const faqs = [
  {
    id: 'beauty-faq-1',
    question: "What's in the Beauty Blend IV?",
    answer: 'The Beauty Blend IV features biotin, B-complex vitamins, and vitamin C, delivered as an IV to support hydration and nutrient intake.',
  },
  {
    id: 'beauty-faq-2',
    question: 'How much does the Beauty Blend cost in Oklahoma City?',
    answer: 'Full strength is $250 and half strength is $150. Services are cash-pay and no insurance is required.',
  },
  {
    id: 'beauty-faq-3',
    question: 'Will it improve my hair, skin, or nails?',
    answer:
      "The Beauty Blend provides nutrients like biotin, B-complex, and vitamin C, but Ebenezer Health Clinic does not promise specific cosmetic results — how each person responds varies. It is given after a provider evaluation.",
  },
  {
    id: 'beauty-faq-4',
    question: 'Where is it given?',
    answer:
      "The Beauty Blend IV is given in person at Ebenezer Health Clinic's Oklahoma City-area clinic. The IV is not given by telehealth; only the optional consultation is online.",
  },
  {
    id: 'beauty-faq-5',
    question: 'Do I need an appointment?',
    answer: 'No. Patients may walk in or book ahead for a confirmed time.',
  },
  {
    id: 'beauty-faq-6',
    question: 'Is the telehealth consultation free?',
    answer: 'Yes. Patients can book a free telehealth consultation to talk with the provider by secure video. Patients only pay if they choose to come in for a session.',
  },
]

export default function BeautyBlendFAQAccordion() {
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
