'use client'

/**
 * SemaglutideFAQAccordion — Client Component
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
    id: 'sema-faq-1',
    question: 'Does Ebenezer Health Clinic offer Semaglutide for weight loss?',
    answer:
      'Semaglutide may be considered as part of Ebenezer Health Clinic’s medical weight-loss program for appropriate patients following clinical evaluation.',
  },
  {
    id: 'sema-faq-2',
    question: 'Is Semaglutide appropriate for everyone?',
    answer:
      'No single weight-loss approach is appropriate for everyone. Your provider will review relevant health information before determining whether medication-assisted weight management may be appropriate for you.',
  },
  {
    id: 'sema-faq-3',
    question: 'Do I automatically receive Semaglutide if I book a weight-loss consultation?',
    answer:
      'No. Scheduling a consultation does not guarantee that Semaglutide will be prescribed or provided. Treatment recommendations depend on your individual clinical evaluation.',
  },
  {
    id: 'sema-faq-4',
    question: 'Do you also offer Tirzepatide?',
    answer:
      'Yes. Tirzepatide is another medication-assisted weight-management option that may be considered for appropriate patients.',
  },
  {
    id: 'sema-faq-5',
    question: 'Which is better for me—Semaglutide or Tirzepatide?',
    answer:
      'The appropriate treatment depends on your individual health information and clinical evaluation. Your provider can discuss available options with you rather than assuming one medication is right for everyone.',
  },
  {
    id: 'sema-faq-6',
    question: 'Is medication the only part of the weight-loss program?',
    answer:
      'No. Ebenezer Health Clinic takes a broader medical weight-management approach that can include discussion of nutrition, physical activity, sleep, stress, lifestyle habits, and individual goals alongside medication when appropriate.',
  },
  {
    id: 'sema-faq-7',
    question: 'Will I need follow-up visits?',
    answer:
      'Medication-assisted medical weight management may require ongoing follow-up. Your provider will determine an appropriate follow-up plan based on your individual treatment and healthcare needs.',
  },
  {
    id: 'sema-faq-8',
    question: 'Can I have a weight-loss consultation through telehealth?',
    answer:
      'Appropriate consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Some aspects of care may require an in-person visit depending on your individual needs.',
  },
  {
    id: 'sema-faq-9',
    question: 'How much weight will I lose with Semaglutide?',
    answer:
      'Individual results vary, and a specific amount of weight loss cannot be guaranteed. Your provider can help establish and monitor an individualized weight-management plan.',
  },
  {
    id: 'sema-faq-10',
    question: 'How much does Semaglutide treatment cost?',
    answer:
      'Contact Ebenezer Health Clinic for current medical weight-loss pricing and information about what is included. Medication and program costs should be confirmed directly with the clinic.',
  },
]

export default function SemaglutideFAQAccordion() {
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
