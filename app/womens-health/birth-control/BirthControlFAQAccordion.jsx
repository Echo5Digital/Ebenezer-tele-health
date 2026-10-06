'use client'

/**
 * BirthControlFAQAccordion - Client Component
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
    id: 'birth-control-faq-1',
    question: 'What birth control options does Ebenezer Health Clinic offer?',
    answer:
      'We offer oral contraceptives, Depo-Provera shots, birth control patches, IUD insertion and removal, and Nexplanon insertion and removal.',
  },
  {
    id: 'birth-control-faq-2',
    question: 'Do you offer birth control pills?',
    answer:
      'Yes. Oral contraceptives are available as one of our birth control options. Your provider can discuss whether this method may be appropriate for you based on your individual health needs.',
  },
  {
    id: 'birth-control-faq-3',
    question: 'Do you offer Depo-Provera shots?',
    answer:
      'Yes. Depo-Provera is available as an injectable contraceptive option following appropriate clinical evaluation.',
  },
  {
    id: 'birth-control-faq-4',
    question: 'Do you provide IUD insertion and removal?',
    answer:
      'Yes. Ebenezer Health Clinic provides both IUD insertion and removal. IUD insertion is covered by insurance only.',
  },
  {
    id: 'birth-control-faq-5',
    question: 'Do you provide Nexplanon insertion and removal?',
    answer:
      'Yes. Both Nexplanon insertion and removal are available. Nexplanon insertion is covered by insurance only.',
  },
  {
    id: 'birth-control-faq-6',
    question: 'Can I get birth control through telehealth?',
    answer:
      'Appropriate birth control consultations and follow-up care may be available through telehealth throughout Oklahoma. Procedures such as IUD and Nexplanon insertion or removal require an in-person appointment.',
  },
  {
    id: 'birth-control-faq-7',
    question: 'How do I know which birth control method is right for me?',
    answer:
      'Your provider can review your health history, medications, previous birth control experience, preferences, and other relevant factors before discussing options that may be appropriate for you.',
  },
  {
    id: 'birth-control-faq-8',
    question: 'Do I need to complete a questionnaire before my appointment?',
    answer:
      'We recommend completing the Women’s Health Questionnaire before your appointment so your provider has relevant information about your health history, medications, menstrual and reproductive health, and current and previous birth control methods.',
  },
]

export default function BirthControlFAQAccordion() {
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
