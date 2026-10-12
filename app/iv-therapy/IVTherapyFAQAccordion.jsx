'use client'

/**
 * IVTherapyFAQAccordion - Client Component
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
    id: 'iv-faq-1',
    question: 'What IV hydration and injection services do you offer?',
    answer:
      'Ebenezer Health Clinic offers IV hydration services, Wellness Mix, Vitamin B12 injections, and Glutathione injections available by special order upon request.',
  },
  {
    id: 'iv-faq-2',
    question: 'What happened to the Beauty Mix?',
    answer: (
      <>
        The service previously referred to as Beauty Mix is being presented
        as <strong>Wellness Mix</strong>.
      </>
    ),
  },
  {
    id: 'iv-faq-3',
    question: 'Do you offer Vitamin B12 injections?',
    answer:
      'Yes. Vitamin B12 injections are available as part of our injection services, subject to appropriate clinical screening.',
  },
  {
    id: 'iv-faq-4',
    question: 'Do you offer Glutathione injections?',
    answer: (
      <>
        Glutathione injections are available by{' '}
        <strong>special order upon request</strong>. Please contact the
        clinic regarding availability before your visit.
      </>
    ),
  },
  {
    id: 'iv-faq-5',
    question: 'Do I need to complete a questionnaire?',
    answer:
      'Yes. The IV/IM questionnaire provides important information about your symptoms, medications, allergies, medical history, and other factors relevant to determining whether treatment is appropriate.',
  },
  {
    id: 'iv-faq-6',
    question: "What if I'm not sure whether I need IV hydration or an injection?",
    answer: (
      <>
        You can select &ldquo;
        <strong>Not sure – discuss with clinician</strong>
        &rdquo; on the questionnaire. Your provider can review your
        treatment goal and relevant health information with you.
      </>
    ),
  },
  {
    id: 'iv-faq-7',
    question: 'Does completing the questionnaire mean I am approved for treatment?',
    answer:
      'No. Completing the questionnaire is part of the screening process and does not guarantee that treatment will be provided.',
  },
  {
    id: 'iv-faq-8',
    question: 'Can everyone receive IV hydration or injections?',
    answer:
      'Not necessarily. Treatment depends on your individual health history, symptoms, medications, allergies, and clinical evaluation.',
  },
  {
    id: 'iv-faq-9',
    question: 'Are Glutathione injections always available?',
    answer:
      'No. Glutathione injections are available by special order upon request, so patients should contact the clinic regarding availability.',
  },
]

export default function IVTherapyFAQAccordion() {
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
