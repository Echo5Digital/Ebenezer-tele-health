'use client'

/**
 * VitaminB12FAQAccordion - Client Component
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
    id: 'b12-faq-1',
    question: 'Does Ebenezer Health Clinic offer Vitamin B12 injections?',
    answer:
      "Yes. Vitamin B12 injections are offered as part of Ebenezer Health Clinic's IV Hydration & Injections services.",
  },
  {
    id: 'b12-faq-2',
    question: 'Where can I get a B12 injection in the Oklahoma City area?',
    answer:
      "Vitamin B12 injections are available at Ebenezer Health Clinic's Bethany location serving Oklahoma City and surrounding communities.",
  },
  {
    id: 'b12-faq-3',
    question: 'Do I need an appointment for a B12 injection?',
    answer:
      'Contact Ebenezer Health Clinic to schedule your injection and confirm current appointment availability.',
  },
  {
    id: 'b12-faq-4',
    question: 'Do I need to complete a questionnaire?',
    answer:
      'Yes. Patients requesting an injection complete the IV/IM Injection Questionnaire so relevant health and safety information can be reviewed.',
  },
  {
    id: 'b12-faq-5',
    question: 'Does completing the questionnaire guarantee that I can receive the injection?',
    answer:
      'No. Completing the questionnaire does not guarantee treatment and does not replace clinical evaluation.',
  },
  {
    id: 'b12-faq-6',
    question: 'Can I receive a B12 injection through telehealth?',
    answer: 'No. The injection itself requires an in-person visit.',
  },
  {
    id: 'b12-faq-7',
    question: 'Do you also provide IV hydration?',
    answer: 'Yes. IV hydration is available as a separate service through Ebenezer Health Clinic.',
  },
  {
    id: 'b12-faq-8',
    question: 'Does Ebenezer Health Clinic offer Glutathione injections?',
    answer: 'Yes. Glutathione injections are available by special order upon request.',
  },
  {
    id: 'b12-faq-9',
    question: 'How often should I receive Vitamin B12 injections?',
    answer:
      "The clinic has not provided a standard injection schedule for publication. Frequency should be discussed with the clinician based on the patient's individual circumstances.",
  },
  {
    id: 'b12-faq-10',
    question: 'How much does a Vitamin B12 injection cost?',
    answer: 'Contact Ebenezer Health Clinic for current B12 injection pricing.',
  },
]

export default function VitaminB12FAQAccordion() {
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
