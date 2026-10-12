'use client'

/**
 * TirzepatideFAQAccordion — Client Component
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
    id: 'tirz-faq-1',
    question: 'Does Ebenezer Health Clinic offer Tirzepatide for weight loss?',
    answer:
      'Tirzepatide may be considered as part of Ebenezer Health Clinic’s medical weight-loss program for appropriate patients following clinical evaluation.',
  },
  {
    id: 'tirz-faq-2',
    question: 'Is Tirzepatide appropriate for everyone?',
    answer:
      'No single medication-assisted weight-loss approach is appropriate for everyone. Your provider will review your individual health information before recommending treatment.',
  },
  {
    id: 'tirz-faq-3',
    question: 'Will I automatically receive Tirzepatide after scheduling a consultation?',
    answer:
      'No. Scheduling a medical weight-loss consultation does not guarantee that Tirzepatide will be prescribed or provided. Treatment recommendations depend on your individual clinical evaluation.',
  },
  {
    id: 'tirz-faq-4',
    question: 'Does Ebenezer Health Clinic also offer Semaglutide?',
    answer:
      'Yes. Semaglutide may also be considered as a medication-assisted weight-management option for appropriate patients.',
  },
  {
    id: 'tirz-faq-5',
    question: 'Should I choose Tirzepatide or Semaglutide?',
    answer:
      'Your provider can review your individual health history, previous treatments, medications, goals, and other relevant information before discussing which weight-management approach may be appropriate.',
  },
  {
    id: 'tirz-faq-6',
    question: 'Is Tirzepatide the only part of the weight-loss program?',
    answer:
      'No. The clinic’s medical weight-management approach can also consider nutrition, physical activity, sleep, stress, lifestyle habits, and individual goals.',
  },
  {
    id: 'tirz-faq-7',
    question: 'Will I need follow-up appointments?',
    answer:
      'Medication-assisted weight management may require ongoing follow-up. The frequency and type of follow-up will depend on your individual treatment plan and healthcare needs.',
  },
  {
    id: 'tirz-faq-8',
    question: 'Can medical weight-loss visits be completed through telehealth?',
    answer:
      'Appropriate consultations and follow-up visits may be available through telehealth throughout Oklahoma. Some aspects of care may require an in-person appointment.',
  },
  {
    id: 'tirz-faq-9',
    question: 'How quickly will I lose weight with Tirzepatide?',
    answer:
      'Weight-loss results vary between individuals, and a specific amount or rate of weight loss cannot be guaranteed. Your provider can help establish and monitor an individualized weight-management plan.',
  },
  {
    id: 'tirz-faq-10',
    question: 'How much does Tirzepatide weight-loss treatment cost?',
    answer:
      'Contact Ebenezer Health Clinic for current medical weight-loss pricing and information about what is included in the program.',
  },
]

export default function TirzepatideFAQAccordion() {
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
