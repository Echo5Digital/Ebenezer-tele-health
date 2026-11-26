'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const PRICING_FAQS = [
  {
    q: 'Does Ebenezer Health Clinic accept insurance?',
    a: 'Yes. We accept insurance. Coverage and out-of-pocket costs vary by plan, so please call (405) 349-8188 to confirm your specific plan before booking.',
  },
  {
    q: 'What are the self-pay rates for telehealth in Oklahoma?',
    a: "Women's health self-pay visits start at $50, weight loss self-pay visits start at $50, and minor illness self-pay televisits are $50. These rates apply when you pay directly without using insurance.",
  },
  {
    q: 'How much does semaglutide cost?',
    a: "The $100 initial visit fee covers your consultation and initial labs, with prescriptions sent to Lilly Direct Pharmacy when appropriate. Follow-up visits are $50, or $100 if labs are needed. The weight loss medication itself is billed separately to the patient and depends on the option chosen after evaluation. We'll be upfront about cost before prescribing.",
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
    a: "For most visits, yes. Minor illness televisits and standard in-person visits are both $50, as are women's health in-person follow-up visits. In-person minor illness visits that require testing range from $80 to $100.",
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
