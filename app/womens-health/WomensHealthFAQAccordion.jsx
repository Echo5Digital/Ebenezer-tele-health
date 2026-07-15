'use client'

/**
 * WomensHealthFAQAccordion — Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 */

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    id: 'wh-faq-1',
    question: 'Can I get birth control in Oklahoma City or online?',
    answer:
      "Yes. In person on Saturdays in OKC or by women's telehealth across Oklahoma. Prescriptions go to your pharmacy.",
  },
  {
    id: 'wh-faq-2',
    question: 'Do you treat PCOS and menopause?',
    answer:
      'Yes. PCOS treatment and menopause care are core parts of our women\'s health services.',
  },
  {
    id: 'wh-faq-3',
    question: 'Is this a good OBGYN alternative?',
    answer:
      "For many everyday needs, yes. For concerns needing a specialist or procedures, we'll refer you appropriately.",
  },
  {
    id: 'wh-faq-4',
    question: 'How much does a women\'s health visit cost?',
    answerJSX: true,
    answer:
      'Initial visits are $150; follow-ups are $50. No insurance required.',
  },
  {
    id: 'wh-faq-5',
    question: 'Are visits private?',
    answer:
      'Yes. All visits are confidential and HIPAA-compliant.',
  },
  {
    id: 'wh-faq-6',
    question: 'What if my symptoms are severe?',
    answer:
      'For severe or emergency symptoms, call 911 or go to your nearest ER.',
  },
]

export default function WomensHealthFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class — speakable schema target; do not rename */}
            {faq.answerJSX ? (
              <p className="faq-answer">
                {faq.answer}{' '}
                <Link
                  href="/pricing"
                  className="underline font-medium"
                  style={{ color: 'var(--primary)' }}
                >
                  See pricing →
                </Link>
              </p>
            ) : (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
