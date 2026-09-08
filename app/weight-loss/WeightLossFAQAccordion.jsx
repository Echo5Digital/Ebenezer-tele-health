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
    question: 'Do you prescribe semaglutide for weight loss in Oklahoma?',
    answer:
      'When medically appropriate, yes. Eligibility depends on your health history and a provider evaluation.',
  },
  {
    id: 'wl-faq-2',
    question: 'How much does the program cost?',
    answer:
      '$100 per month, which includes initial labs and prescriptions sent to Lilly Direct Pharmacy. The weight loss medication itself is billed separately to the patient.',
  },
  {
    id: 'wl-faq-3',
    question: 'Is there a weight loss clinic near me in OKC?',
    answer:
      'Yes. In person on Saturdays in Oklahoma City, and online statewide.',
  },
  {
    id: 'wl-faq-4',
    question: 'Can I do medical weight loss entirely online?',
    answer: 'Yes, across Oklahoma.',
  },
  {
    id: 'wl-faq-5',
    question: 'Is this a quick fix?',
    answer: 'No. It\'s a medically supervised program with real follow-up.',
  },
  {
    id: 'wl-faq-6',
    question: 'What if medication isn\'t right for me?',
    answer:
      'We\'ll tell you honestly and focus on the approach that fits your health.',
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
