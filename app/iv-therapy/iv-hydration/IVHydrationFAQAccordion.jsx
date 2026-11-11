'use client'

/**
 * IVHydrationFAQAccordion - Client Component
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
import { ivHydrationFaqs } from './ivHydrationFaqs'

const PHONE_DISPLAY = '(405) 349-8188'
const PHONE_HREF = 'tel:+14053498188'

// Turns the clinic phone number inside an FAQ answer into a tap-to-call link.
// The answer text itself stays a plain string so the FAQPage schema is unchanged.
function withPhoneLink(text) {
  const parts = text.split(PHONE_DISPLAY)
  if (parts.length === 1) return text
  return parts.flatMap((part, index) =>
    index < parts.length - 1
      ? [
          part,
          <a
            key={`phone-${index}`}
            href={PHONE_HREF}
            className="font-semibold"
            style={{ color: 'var(--primary)' }}
          >
            {PHONE_DISPLAY}
          </a>,
        ]
      : [part],
  )
}

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

export default function IVHydrationFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {ivHydrationFaqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class - speakable schema target; do not rename */}
            <p className="faq-answer">{withPhoneLink(faq.answer)}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
