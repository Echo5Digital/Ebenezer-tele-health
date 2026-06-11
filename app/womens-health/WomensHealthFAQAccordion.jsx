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
    question: 'Can I get birth control online in Oklahoma?',
    answer:
      'Yes. We provide contraceptive counseling and prescriptions by secure video, sent to your pharmacy. Dr. George can review your health history, discuss all hormonal and non-hormonal options, and send a prescription electronically to any pharmacy in Oklahoma — no in-person visit required.',
  },
  {
    id: 'wh-faq-2',
    question: 'Do you treat PCOS and menopause online?',
    answer:
      'Yes — both are core services at Ebenezer Telehealth. We offer comprehensive PCOS management including hormonal and metabolic assessment, medication management, and weight-management strategies. For menopause and perimenopause, we provide individualized care with hormonal and non-hormonal options based on what is right for you.',
  },
  {
    id: 'wh-faq-3',
    question: "Do I need insurance for a women's health visit?",
    answer:
      "No. We're cash-pay with transparent pricing — $150 initial visit, $50 follow-up. You'll know your full cost before you book. No surprise bills, no insurance claims, no pre-authorization delays. We are in the process of becoming credentialed with major insurance plans.",
  },
  {
    id: 'wh-faq-4',
    question: "Where in Oklahoma can I be seen for women's health?",
    answer:
      "Anywhere in the state — including Oklahoma City, Tulsa, Edmond, Norman, Lawton, and rural communities — as long as you're in Oklahoma at the time of your visit. Telehealth removes geographic barriers so women across metro and rural Oklahoma can access specialized women's health care.",
  },
  {
    id: 'wh-faq-5',
    question: 'Can you send prescriptions to my pharmacy?',
    answer:
      'Yes, electronically to any pharmacy in Oklahoma when appropriate. After your visit, Dr. George will send any prescriptions directly to your preferred pharmacy so you can pick them up without any extra steps.',
  },
  {
    id: 'wh-faq-6',
    question: "Are women's health visits private?",
    answer:
      'Yes — all visits are HIPAA-compliant and confidential. Every visit is conducted via an encrypted, secure video platform. You speak only with Dr. George — no rotating staff, no third-party networks. Your health information is never shared without your explicit consent.',
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
