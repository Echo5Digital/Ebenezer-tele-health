'use client'

/**
 * StdTestingFAQAccordion - Client Component
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
    id: 'std-faq-1',
    question: 'Does Ebenezer Health Clinic offer STD testing?',
    answer:
      'Yes. Ebenezer Health Clinic provides STD testing and management as part of its women’s health services.',
  },
  {
    id: 'std-faq-2',
    question: 'When should I consider STD testing?',
    answer:
      'You may want to discuss testing if you have concerns about a possible STD, are experiencing symptoms that concern you, have a previous STD history, are unsure when you were last screened, or simply want to discuss your sexual health with a healthcare provider.',
  },
  {
    id: 'std-faq-3',
    question: 'Which STDs does Ebenezer Health Clinic test for?',
    answer:
      'The clinic has confirmed that STD testing is available but has not specified individual tests or testing panels. Please contact our team if you need a particular test so we can confirm availability.',
  },
  {
    id: 'std-faq-4',
    question: 'Do you provide STD management?',
    answer:
      'Yes. The clinic provides STD testing and management. The appropriate care and follow-up depend on your individual clinical situation.',
  },
  {
    id: 'std-faq-5',
    question: 'Can I get tested even if I do not have symptoms?',
    answer:
      'If you have questions about STD screening, you can schedule an appointment to discuss your individual situation and appropriate testing with your provider.',
  },
  {
    id: 'std-faq-6',
    question: 'Is STD testing available through telehealth?',
    answer:
      'Testing that requires specimen collection or other physical services requires an appropriate in-person arrangement. Telehealth may be available for certain consultations and follow-up care throughout Oklahoma.',
  },
  {
    id: 'std-faq-7',
    question: 'Do I need to complete a questionnaire?',
    answer:
      'We recommend completing the Women’s Health Questionnaire before your appointment. It collects relevant health information, including sexual health history, previous STD history, and your last STD screening.',
  },
  {
    id: 'std-faq-8',
    question: 'Can I discuss birth control during the same type of women’s health care?',
    answer:
      'Birth control is another service available through Ebenezer Health Clinic. Let the clinic know about your concerns when scheduling so the appropriate visit can be arranged.',
  },
]

export default function StdTestingFAQAccordion() {
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
