'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PRICING_FAQS = [
  {
    q: 'How much does telehealth cost without insurance in Oklahoma?',
    a: "Women's health televisits are $50, weight loss is $100/month, and minor illness televisits are $50. No insurance required.",
  },
  {
    q: 'How much does semaglutide cost?',
    a: "The $100/month weight loss program fee covers initial labs and prescriptions sent to Lilly Direct Pharmacy. The weight loss medication itself is billed separately to the patient and depends on the option chosen after evaluation. We'll be upfront about cost before prescribing.",
  },
  {
    q: 'Are there hidden fees?',
    a: 'No. The listed visit prices are your total visit cost.',
  },
  {
    q: 'Can I use an HSA/FSA?',
    a: 'Often yes. Check with your plan administrator.',
  },
  {
    q: 'Is in-person the same price as online?',
    a: "For most visits, yes. Minor illness and women's health televisits and standard in-person visits are both $50. In-person minor illness visits that require testing range from $80 to $100.",
  },
]

export default function PricingFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {PRICING_FAQS.map((faq) => (
        <AccordionItem key={faq.q} value={faq.q}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>
            <p className="faq-answer">{faq.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
