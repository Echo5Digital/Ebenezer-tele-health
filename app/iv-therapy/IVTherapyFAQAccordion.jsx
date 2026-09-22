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
    question: 'What IV therapy options do you offer in Oklahoma City?',
    answer:
      "We offer an Immune Support IV (Myers' Cocktail) and a Beauty Blend IV, each in full or half strength, plus IM nutrient injections. Each is given after a provider evaluation.",
  },
  {
    id: 'iv-faq-2',
    question: 'How much does IV therapy cost?',
    answer:
      "Immune Support (Myers' Cocktail) and Beauty Blend IVs are $250 full strength or $150 half strength. IM injections are $50. Cash-pay, no insurance required.",
  },
  {
    id: 'iv-faq-3',
    question: "What is a Myers' Cocktail?",
    answer:
      "It's a well-known IV blend of B vitamins, vitamin C, magnesium, and calcium, used to replenish fluids and nutrients as part of a wellness routine.",
  },
  {
    id: 'iv-faq-4',
    question: 'Is the telehealth consultation really free?',
    answer:
      'Yes. You can meet our provider by secure video at no charge to discuss whether IV therapy or an injection is right for you. You only pay if you choose to come in for a session.',
  },
  {
    id: 'iv-faq-5',
    question: 'Where is IV therapy given?',
    answer:
      "In person at our Oklahoma City-area clinic. IVs and injections aren't given by telehealth - only the optional consultation is online.",
  },
  {
    id: 'iv-faq-6',
    question: 'Do I need an appointment?',
    answer: 'No — walk in, or book ahead for a confirmed time.',
  },
  {
    id: 'iv-faq-7',
    question: 'Does IV therapy cure illness or hangovers?',
    answer:
      "No. It provides hydration and nutrient support after a provider evaluation and isn't a treatment for any condition.",
  },
  {
    id: 'iv-faq-8',
    question: 'Is IV therapy safe for everyone?',
    answer:
      "Not always - that's why every IV and injection is preceded by a provider evaluation.",
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
