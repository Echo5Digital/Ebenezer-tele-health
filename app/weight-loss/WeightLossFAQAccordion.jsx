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
    question: 'What is medical weight loss?',
    answer:
      'Medical weight loss is a clinician-guided approach to weight management that considers your health history, current medications, lifestyle, previous weight-loss attempts, and personal goals. Your individualized plan may include lifestyle guidance, medication-assisted treatment when appropriate, monitoring, and follow-up care.',
  },
  {
    id: 'wl-faq-2',
    question: 'Does Ebenezer Health Clinic offer Semaglutide?',
    answer:
      'Semaglutide may be considered for qualified patients as part of an individualized medical weight-management plan. Your provider will determine whether it is appropriate based on your clinical evaluation.',
  },
  {
    id: 'wl-faq-3',
    question: 'Does Ebenezer Health Clinic offer Tirzepatide?',
    answer:
      'Tirzepatide may also be considered for qualified patients. Your provider will review your health history, medications, goals, and other relevant factors to determine whether it may be appropriate for you.',
  },
  {
    id: 'wl-faq-4',
    question: 'Which is right for me – Semaglutide or Tirzepatide?',
    answer:
      'There is no single medication that is appropriate for everyone. Your provider will evaluate your individual health history, current medications, previous weight-loss treatments, goals, and other clinical factors before recommending an appropriate treatment option.',
  },
  {
    id: 'wl-faq-5',
    question: 'Do I have to take medication to join the weight-loss program?',
    answer:
      'No. Medication-assisted weight loss is only one potential component of medical weight management. Your provider will discuss an individualized approach based on your needs and clinical evaluation.',
  },
  {
    id: 'wl-faq-6',
    question: 'What information do I need before my first appointment?',
    answer:
      'Completing the Weight Loss Program Patient Questionnaire before your appointment can help your provider understand your medical history, medications, previous weight-loss treatments, lifestyle, symptoms, and goals.',
  },
  {
    id: 'wl-faq-7',
    question: 'Can I receive weight-loss care through telehealth?',
    answer:
      'Eligible consultations and follow-up appointments may be available through telehealth throughout Oklahoma. Certain evaluations or services may require an in-person visit when clinically appropriate.',
  },
  {
    id: 'wl-faq-8',
    question: 'How quickly will I lose weight?',
    answer:
      'Weight-loss results vary between individuals and depend on many factors, including health history, treatment approach, lifestyle, adherence, and individual response. Your provider will work with you to establish appropriate goals and monitor your progress.',
  },
  {
    id: 'wl-faq-9',
    question: 'Will I need follow-up appointments?',
    answer:
      'Follow-up care may be recommended to monitor your progress, discuss concerns or medication side effects, and make appropriate adjustments to your treatment plan.',
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
