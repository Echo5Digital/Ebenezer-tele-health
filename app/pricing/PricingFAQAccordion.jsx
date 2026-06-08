'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PRICING_FAQS = [
  {
    q: 'Do I need insurance?',
    a: 'No. All visits are cash-pay with flat pricing. No insurance is needed.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. The prices listed are your total cost for the visit.',
  },
  {
    q: 'How much does semaglutide cost through Ebenezer?',
    a: 'The initial weight loss consultation ($250–$300) includes medication management and medications shipped to you. Follow-up visits for ongoing management are $50.',
  },
  {
    q: 'Can I use an HSA or FSA?',
    a: 'In most cases, yes — telehealth visits typically qualify. Check with your plan administrator.',
  },
  {
    q: 'Will you accept insurance in the future?',
    a: 'We are working toward credentialing with major insurance plans and will announce availability when ready.',
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
