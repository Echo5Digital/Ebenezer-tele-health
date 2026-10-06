'use client'

/**
 * MenstrualIrregularitiesFAQAccordion - Client Component
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
    id: 'menstrual-faq-1',
    question: 'What are considered menstrual irregularities?',
    answer:
      'Menstrual irregularities can include changes in the timing, frequency, duration, or characteristics of your period. Examples may include irregular, missed, absent, heavy, painful, or otherwise changing menstrual cycles.',
  },
  {
    id: 'menstrual-faq-2',
    question: 'When should I discuss irregular periods with a healthcare provider?',
    answer:
      'If you have noticed changes in your usual menstrual pattern or have concerns about irregular, missed, absent, heavy, or painful periods, schedule a consultation to discuss your symptoms and health history.',
  },
  {
    id: 'menstrual-faq-3',
    question: 'Can PCOS be associated with irregular periods?',
    answer:
      'Some patients with PCOS experience menstrual irregularities. Ebenezer Health Clinic provides PCOS management as a separate women’s health service.',
  },
  {
    id: 'menstrual-faq-4',
    question: 'Can I discuss heavy periods at Ebenezer Health Clinic?',
    answer:
      'Yes. If your menstrual flow has become heavy or has changed from your usual pattern, you can discuss your concerns during a women’s health appointment.',
  },
  {
    id: 'menstrual-faq-5',
    question: 'Can I schedule an appointment for painful periods?',
    answer:
      'Yes. Painful menstrual cycles are among the concerns you can discuss with your provider during a women’s health consultation.',
  },
  {
    id: 'menstrual-faq-6',
    question: 'What information should I have for my appointment?',
    answer:
      'Information about your cycle regularity, typical cycle length, period duration and flow, last menstrual period, medications, medical history, birth control history, and related symptoms can help your provider understand your concerns.',
  },
  {
    id: 'menstrual-faq-7',
    question: 'Can menstrual health appointments be completed through telehealth?',
    answer:
      'Appropriate consultations and follow-up visits may be available through telehealth throughout Oklahoma. Depending on your individual concerns, an in-person evaluation may be recommended.',
  },
]

export default function MenstrualIrregularitiesFAQAccordion() {
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
