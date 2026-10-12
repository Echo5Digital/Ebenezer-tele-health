'use client'

/**
 * IVHydrationFAQAccordion - Client Component
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
    id: 'ivh-faq-1',
    question: 'Does Ebenezer Health Clinic offer IV hydration?',
    answer:
      "Yes. IV hydration is available as part of Ebenezer Health Clinic's IV Hydration & Injections services.",
  },
  {
    id: 'ivh-faq-2',
    question: 'Where can I get IV hydration in the Oklahoma City area?',
    answer:
      'Ebenezer Health Clinic provides IV hydration from its Bethany location serving Oklahoma City and surrounding communities.',
  },
  {
    id: 'ivh-faq-3',
    question: 'What is the Wellness Mix?',
    answer:
      'Wellness Mix is an IV hydration option offered by Ebenezer Health Clinic. Contact the clinic for current information about its formulation, availability, and pricing.',
  },
  {
    id: 'ivh-faq-4',
    question: 'Do I need to complete a questionnaire before IV hydration?',
    answer:
      'Yes. The IV/IM Injection Questionnaire collects relevant health and safety information before treatment.',
  },
  {
    id: 'ivh-faq-5',
    question: 'What if I am not sure whether I need IV hydration or an injection?',
    answer: (
      <>
        The questionnaire includes a{' '}
        <strong>&ldquo;Not sure – discuss with clinician&rdquo;</strong>{' '}
        option. Your clinician can review your concerns and discuss
        appropriate options.
      </>
    ),
  },
  {
    id: 'ivh-faq-6',
    question: 'Does completing the questionnaire mean I am approved for IV hydration?',
    answer:
      'No. The questionnaire is a screening tool and does not replace clinical evaluation or guarantee treatment.',
  },
  {
    id: 'ivh-faq-7',
    question: 'Is IV hydration available through telehealth?',
    answer: 'No. IV hydration requires in-person administration.',
  },
  {
    id: 'ivh-faq-8',
    question: 'Does Ebenezer Health Clinic also offer vitamin injections?',
    answer: (
      <>
        Yes. The clinic offers <strong>Vitamin B12 Injection</strong> and{' '}
        <strong>Glutathione Injection</strong>, with Glutathione available by
        special order upon request.
      </>
    ),
  },
  {
    id: 'ivh-faq-9',
    question: 'How much does IV hydration cost?',
    answer:
      'Contact Ebenezer Health Clinic for current IV hydration pricing. Only clinic-confirmed pricing should be published on the website.',
  },
]

export default function IVHydrationFAQAccordion() {
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
