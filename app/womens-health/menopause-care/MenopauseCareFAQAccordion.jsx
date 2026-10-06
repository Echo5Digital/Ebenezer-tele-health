'use client'

/**
 * MenopauseCareFAQAccordion - Client Component
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
    id: 'menopause-faq-1',
    question: 'Does Ebenezer Health Clinic provide menopause care?',
    answer:
      'Yes. Ebenezer Health Clinic provides personalized menopause management for patients in the Oklahoma City area, with appropriate telehealth care available throughout Oklahoma.',
  },
  {
    id: 'menopause-faq-2',
    question: 'What menopause symptoms can I discuss with my provider?',
    answer:
      'You can discuss symptoms and concerns such as hot flashes, night sweats, mood changes, vaginal dryness, sleep problems, menstrual changes, and other women’s health concerns.',
  },
  {
    id: 'menopause-faq-3',
    question: 'Do you offer hormonal treatment for menopause?',
    answer:
      'Yes. Hormonal treatment options may be available for qualified patients following an individual clinical evaluation.',
  },
  {
    id: 'menopause-faq-4',
    question: 'Do you offer non-hormonal menopause treatment?',
    answer:
      'Yes. Ebenezer Health Clinic also offers non-hormonal treatment options for appropriate patients.',
  },
  {
    id: 'menopause-faq-5',
    question: 'Will Ebenezer Health Clinic offer pellet insertion?',
    answer: (
      <>
        Starting in <strong>December 2026</strong>, pellet insertion is expected to be
        available for qualified patients. Eligibility will be determined through individual
        clinical evaluation.
      </>
    ),
  },
  {
    id: 'menopause-faq-6',
    question: 'Can menopause care be provided through telehealth?',
    answer:
      'Appropriate menopause consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Certain evaluations, treatments, or procedures may require an in-person visit.',
  },
  {
    id: 'menopause-faq-7',
    question: 'Do I need to complete a questionnaire before my appointment?',
    answer:
      'We recommend completing the Women’s Health Questionnaire before your visit. It includes questions about your medical history, menstrual and reproductive health, medications, menopause symptoms, hormone therapy, lifestyle, family history, and other concerns.',
  },
  {
    id: 'menopause-faq-8',
    question: 'Will I need follow-up appointments?',
    answer:
      'Follow-up needs vary depending on your symptoms, treatment approach, and individual healthcare needs. Your provider will discuss an appropriate follow-up plan with you.',
  },
]

export default function MenopauseCareFAQAccordion() {
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
