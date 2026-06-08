'use client'

/**
 * WeightLossFAQAccordion — Client Component
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
    id: 'wl-faq-1',
    question: 'Do you prescribe semaglutide for weight loss in Oklahoma?',
    answer:
      'Yes. Ebenezer Telehealth evaluates for semaglutide and other GLP-1 receptor agonist medications when clinically appropriate. Medications are shipped directly to you.',
  },
  {
    id: 'wl-faq-2',
    question: 'How much does the weight loss program cost?',
    answer:
      'Initial consultation is $250–$300 and includes evaluation, personalized weight-loss plan, medication management, and medications shipped to you. Follow-up visits are $50.',
  },
  {
    id: 'wl-faq-3',
    question: 'Do I need insurance for weight loss treatment?',
    answer:
      'No. Ebenezer Telehealth is cash-pay with transparent pricing. You will know the full cost before you book.',
  },
  {
    id: 'wl-faq-4',
    question: 'Where in Oklahoma can I access the weight loss program?',
    answer:
      'Anywhere in Oklahoma — including OKC, Tulsa, Moore, Owasso, Edmond, Norman, Lawton, and rural communities — as long as you are in Oklahoma at the time of your visit.',
  },
  {
    id: 'wl-faq-5',
    question: 'How is Ebenezer Telehealth different from a med spa?',
    answer:
      'Dr. George is a Board Certified Doctor of Nursing Practice with metabolic expertise — not an aesthetics provider. Your care is medically supervised with real follow-up, dose titration, and ongoing monitoring.',
  },
  {
    id: 'wl-faq-6',
    question: 'What if weight loss medication is not right for me?',
    answer:
      'We will tell you. Not every patient is a candidate for GLP-1 therapy. We evaluate honestly and recommend the best path for your health.',
  },
]

export default function WeightLossFAQAccordion() {
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
