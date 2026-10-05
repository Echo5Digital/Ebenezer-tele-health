'use client'

/**
 * WomensHealthFAQAccordion — Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 */

import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    id: 'wh-faq-1',
    question: "What women’s health services does Ebenezer Health Clinic provide?",
    answer:
      'We provide birth control services, PCOS management, care for menstrual irregularities, menopause treatment, Pap smears, and STD testing and management.',
  },
  {
    id: 'wh-faq-2',
    question: 'What birth control options are available?',
    answerJSX: true,
    answer:
      'Birth control services include oral contraceptives, Depo-Provera shots, patches, IUD insertion and removal, and Nexplanon insertion and removal. IUD and Nexplanon insertions are covered by insurance only.',
  },
  {
    id: 'wh-faq-3',
    question: 'Do you provide PCOS management?',
    answer:
      "Yes. Ebenezer Health Clinic provides individualized PCOS management based on your symptoms, medical history and health needs.",
  },
  {
    id: 'wh-faq-4',
    question: 'Can you help with irregular periods?',
    answer:
      'Yes. We evaluate and manage menstrual irregularities, including concerns about irregular, absent, heavy or painful periods.',
  },
  {
    id: 'wh-faq-5',
    question: 'Do you provide menopause treatment?',
    answer:
      'Yes. Hormonal and non-hormonal menopause treatment options are available for qualified patients based on clinical evaluation. Pellet insertion will also be available beginning in December 2026 for qualified patients.',
  },
  {
    id: 'wh-faq-6',
    question: 'Do you offer Pap smears?',
    answer:
      "Yes. Pap smears are available as part of our women's health services.",
  },
  {
    id: 'wh-faq-7',
    question: 'Do you provide STD testing?',
    answer:
      "Yes. Ebenezer Health Clinic provides STD testing and management based on your individual needs and clinical evaluation.",
  },
  {
    id: 'wh-faq-8',
    question: 'Can I receive women’s health care through telehealth?',
    answer:
      'Telehealth is available throughout Oklahoma for women’s health services that can appropriately be provided virtually. Some services, examinations, screenings and procedures require an in-person visit.',
  },
  {
    id: 'wh-faq-9',
    question: 'Can I complete my questionnaire before my appointment?',
    answer:
      "Yes. You can complete the Women's Health Questionnaire before your visit. If you prefer, the clinic can assist you with completing it during your initial intake or free consultation call.",
  },
  {
    id: 'wh-faq-10',
    question: 'What if I am experiencing a medical emergency?',
    answer:
      'Ebenezer Health Clinic does not provide emergency medical services. If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.',
  },
]

export default function WomensHealthFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class — speakable schema target; do not rename */}
            {faq.answerJSX ? (
              <p className="faq-answer">
                {faq.answer}{' '}
                <Link
                  href="/pricing"
                  className="underline font-medium"
                  style={{ color: 'var(--primary)' }}
                >
                  See pricing →
                </Link>
              </p>
            ) : (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
