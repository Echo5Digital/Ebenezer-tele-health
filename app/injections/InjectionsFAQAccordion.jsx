'use client'

/**
 * InjectionsFAQAccordion - Client Component
 * CSS class "faq-answer" is referenced by SpeakableSpecification schema.
 * Do not remove or rename that class.
 *
 * Uses a local force-mounted AccordionContent (Radix `forceMount`) so answer
 * text is present in the server-rendered DOM even while collapsed — the
 * shared components/ui/accordion.jsx unmounts collapsed content, which keeps
 * FAQ answers out of the initial HTML (schema-only, the recurring AEO bug).
 */

import Link from 'next/link'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { injectionsFaqs } from './injectionsFaqs'

function AccordionContent({ children }) {
  return (
    <AccordionPrimitive.Content
      forceMount
      className="overflow-hidden text-sm h-0 data-[state=closed]:animate-accordion-up data-[state=open]:h-auto data-[state=open]:animate-accordion-down"
    >
      <div className="pb-5 pt-1 space-y-3">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export default function InjectionsFAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {injectionsFaqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {/* "faq-answer" class - speakable schema target; do not rename */}
            {faq.answer.map((paragraph) => (
              <p key={paragraph} className="faq-answer">
                {paragraph}
              </p>
            ))}
            {faq.link && (
              <p className="faq-answer">
                {faq.link.prefix}
                <Link
                  href={faq.link.href}
                  className="font-semibold underline underline-offset-2"
                  style={{ color: 'var(--primary)' }}
                >
                  {faq.link.label}
                </Link>
                {faq.link.suffix}
              </p>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
