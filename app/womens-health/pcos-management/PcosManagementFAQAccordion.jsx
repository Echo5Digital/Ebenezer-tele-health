'use client'

/**
 * PcosManagementFAQAccordion - Client Component
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
    id: 'pcos-faq-1',
    question: 'What is PCOS?',
    answer:
      'PCOS stands for polycystic ovary syndrome. It is a condition associated with hormonal and reproductive health concerns that can vary significantly from person to person.',
  },
  {
    id: 'pcos-faq-2',
    question: 'What are common PCOS symptoms?',
    answer:
      'Patients with PCOS may experience concerns such as irregular or absent menstrual cycles, acne, weight changes, increased hair growth, or hair thinning. Symptoms vary, and these concerns can have causes other than PCOS.',
  },
  {
    id: 'pcos-faq-3',
    question: 'Can PCOS cause irregular periods?',
    answer:
      'Menstrual irregularities can occur with PCOS. If you are experiencing irregular, missed, absent, heavy, painful, or otherwise concerning menstrual changes, schedule an evaluation to discuss your symptoms.',
  },
  {
    id: 'pcos-faq-4',
    question: 'Does PCOS affect weight?',
    answer:
      'Some patients with PCOS experience weight-related concerns. Ebenezer Health Clinic can discuss these concerns as part of your overall care, and separate medical weight-loss services are also available for appropriate patients.',
  },
  {
    id: 'pcos-faq-5',
    question: 'Do you offer ongoing PCOS management?',
    answer:
      'Yes. Ebenezer Health Clinic provides PCOS management and appropriate follow-up based on each patient’s individual needs.',
  },
  {
    id: 'pcos-faq-6',
    question: 'Can I have a PCOS appointment through telehealth?',
    answer:
      'Appropriate PCOS consultations and follow-up visits may be available through telehealth throughout Oklahoma. Some concerns may require an in-person evaluation.',
  },
  {
    id: 'pcos-faq-7',
    question: 'Do I need to complete a questionnaire?',
    answer:
      'We recommend completing the Women’s Health Questionnaire before your visit. It provides your healthcare provider with relevant information about your medical history, menstrual and reproductive health, medications, symptoms, lifestyle, and other concerns.',
  },
  {
    id: 'pcos-faq-8',
    question: 'What happens after my initial PCOS consultation?',
    answer:
      'Your next steps depend on your individual evaluation and healthcare needs. Your provider can discuss an appropriate management and follow-up plan with you.',
  },
]

export default function PcosManagementFAQAccordion() {
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
