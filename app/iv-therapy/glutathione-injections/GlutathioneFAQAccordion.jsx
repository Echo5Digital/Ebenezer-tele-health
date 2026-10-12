'use client'

/**
 * GlutathioneFAQAccordion - Client Component
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
    id: 'gluta-faq-1',
    question: 'Does Ebenezer Health Clinic offer Glutathione injections?',
    answer: 'Yes. Glutathione injections are available by special order upon request.',
  },
  {
    id: 'gluta-faq-2',
    question: 'Do I need to order Glutathione in advance?',
    answer:
      'Glutathione is a special-order service. Contact Ebenezer Health Clinic in advance to ask about current availability and the ordering process.',
  },
  {
    id: 'gluta-faq-3',
    question: 'Can I schedule a Glutathione injection online?',
    answer:
      'Because the service requires special ordering, contact the clinic to confirm availability before treatment. If online scheduling is enabled for this service later, the website can be updated accordingly.',
  },
  {
    id: 'gluta-faq-4',
    question: 'Do I need to complete a questionnaire?',
    answer:
      'Yes. Patients requesting injectable services complete the IV/IM Injection Questionnaire as part of the screening process.',
  },
  {
    id: 'gluta-faq-5',
    question: 'Does completing the questionnaire guarantee treatment?',
    answer:
      'No. The questionnaire is used for screening and does not replace clinical evaluation or guarantee treatment.',
  },
  {
    id: 'gluta-faq-6',
    question: 'Where are Glutathione injections provided?',
    answer:
      'Injections are provided in person at Ebenezer Health Clinic in Bethany, serving the Oklahoma City area.',
  },
  {
    id: 'gluta-faq-7',
    question: 'Can I receive a Glutathione injection through telehealth?',
    answer: 'No. Injectable treatment requires an in-person visit.',
  },
  {
    id: 'gluta-faq-8',
    question: 'Does Ebenezer Health Clinic offer B12 injections?',
    answer:
      "Yes. Vitamin B12 injections are also available through the clinic's IV Hydration & Injections services.",
  },
  {
    id: 'gluta-faq-9',
    question: 'Does the clinic offer IV hydration?',
    answer: 'Yes. IV hydration is available as a separate service.',
  },
  {
    id: 'gluta-faq-10',
    question: 'How much does a Glutathione injection cost?',
    answer: 'Contact Ebenezer Health Clinic for current special-order availability and confirmed pricing.',
  },
]

export default function GlutathioneFAQAccordion() {
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
