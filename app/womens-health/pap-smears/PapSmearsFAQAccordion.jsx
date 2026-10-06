'use client'

/**
 * PapSmearsFAQAccordion - Client Component
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
    id: 'pap-faq-1',
    question: 'Does Ebenezer Health Clinic provide Pap smears?',
    answer:
      'Yes. Pap smears are available as part of Ebenezer Health Clinic’s women’s health services in the Oklahoma City area.',
  },
  {
    id: 'pap-faq-2',
    question: 'What is a Pap smear?',
    answer:
      'A Pap smear is a cervical screening procedure in which cells are collected from the cervix for evaluation.',
  },
  {
    id: 'pap-faq-3',
    question: 'How do I know if I am due for a Pap smear?',
    answer:
      'Individual screening needs can vary. If you are unsure when your last Pap smear was or whether you are due for screening, schedule a consultation to review your history and appropriate next steps.',
  },
  {
    id: 'pap-faq-4',
    question: 'Can I get a Pap smear through telehealth?',
    answer:
      'No. A Pap smear requires an in-person procedure. Appointments are available at our Bethany location serving the Oklahoma City area.',
  },
  {
    id: 'pap-faq-5',
    question: 'What information should I provide before my appointment?',
    answer:
      'Your medical history, medications, menstrual and reproductive history, birth control history, sexual health information, and previous Pap smear information may be relevant to your visit.',
  },
  {
    id: 'pap-faq-6',
    question: 'What if I have other women’s health concerns?',
    answer:
      'Let your provider know about any additional concerns. Ebenezer Health Clinic also provides birth control care, PCOS management, care for menstrual irregularities, menopause care, and STD testing and management.',
  },
  {
    id: 'pap-faq-7',
    question: 'Do I need to complete the Women’s Health Questionnaire?',
    answer:
      'We recommend completing the questionnaire before your appointment. It provides relevant information about your medical and women’s health history and asks when you had your last Pap smear.',
  },
]

export default function PapSmearsFAQAccordion() {
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
