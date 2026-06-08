'use client'

/**
 * WomensHealthFAQAccordion — Client Component
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
    id: 'wh-faq-1',
    question: 'Can I get birth control prescribed online in Oklahoma?',
    answer:
      "Yes. Dr. Susan George can evaluate your contraceptive needs, discuss all available options — including oral pills, patches, and injections — and prescribe birth control during a virtual visit. No in-person appointment is required for most contraceptive management needs.",
  },
  {
    id: 'wh-faq-2',
    question: 'Can Dr. George diagnose and treat hormonal imbalances or PCOS virtually?',
    answer:
      'Yes. Dr. George conducts a thorough virtual evaluation and can order lab work to assess hormone levels, thyroid function, and other relevant markers. Based on your results and symptoms, she develops a personalized treatment plan — all managed through secure telehealth.',
  },
  {
    id: 'wh-faq-3',
    question: "What is included in the $150 initial women's health visit?",
    answer:
      'Your initial visit includes a comprehensive symptom review and full health history, lab orders when clinically appropriate, lab result interpretation, and a personalized treatment plan. Dr. George takes time to understand your full picture before recommending any course of action.',
  },
  {
    id: 'wh-faq-4',
    question: "Is my women's health visit completely private and confidential?",
    answer:
      'Yes. All visits are conducted via a HIPAA-compliant, encrypted video platform. You speak only with Dr. Susan George — no rotating staff, no third-party networks. Your health information is never shared without your explicit consent.',
  },
  {
    id: 'wh-faq-5',
    question: "Do I need a physical exam for women's health telehealth?",
    answer:
      "Many women's health concerns — including hormonal health, birth control management, UTIs, menopause symptoms, and more — can be thoroughly evaluated via telehealth without an in-person exam. If Dr. George determines that an in-person evaluation is clinically necessary, she will advise you clearly and help coordinate appropriate care.",
  },
  {
    id: 'wh-faq-6',
    question: 'What if I need lab work or a prescription?',
    answer:
      'Lab orders are included in your initial visit when clinically appropriate. Dr. George will direct you to a convenient lab anywhere in Oklahoma and review your results promptly. Prescriptions are sent electronically to your preferred Oklahoma pharmacy.',
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
            <p className="faq-answer">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
