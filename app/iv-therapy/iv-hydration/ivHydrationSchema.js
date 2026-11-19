// JSON-LD for /iv-therapy/iv-hydration.
//
// One @graph, cross-linked by @id, so this page's entities connect into the
// same knowledge graph as the rest of the site (see components/SchemaMarkup.jsx
// for the shared #organization / #dr-susan-george / #website nodes, and
// app/iv-therapy/myers-cocktail/page.js for the sibling-page pattern).
//
// Everything here is derived from the visible page content (treatments, steps,
// FAQs) so the structured data cannot drift from what patients actually read.
// No prices are published for IV hydration, so offers carry the clinic's
// "contact for pricing / on request" wording instead of a price.

import { ivHydrationFaqs } from './ivHydrationFaqs'

export const SITE = 'https://www.ebenezerhealthclinic.com'
export const PAGE_URL = `${SITE}/iv-therapy/iv-hydration`

const ORG_ID = `${SITE}/#organization`
const DOCTOR_ID = `${SITE}/#dr-susan-george`

const CLINIC_PLACE = {
  '@type': 'Place',
  name: 'Ebenezer Health Clinic',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7415 NW 23rd Street',
    addressLocality: 'Bethany',
    addressRegion: 'OK',
    postalCode: '73008',
    addressCountry: 'US',
  },
  telephone: '+14053498188',
}

const AREA_SERVED = [
  { '@type': 'City', name: 'Bethany' },
  { '@type': 'City', name: 'Oklahoma City' },
]

const stripStepPrefix = (title) => title.replace(/^Step \d+:\s*/, '')

/**
 * @param {object} args
 * @param {string} args.title        Page title (meta title)
 * @param {string} args.description  Page description (meta description)
 * @param {string[]} args.keywords   Page keywords
 * @param {Array<{id:string,title:string,intro:string[],details:{label:string,value:string}[]}>} args.treatments
 * @param {Array<{title:string,text:string}>} args.visitSteps
 */
export function buildIVHydrationSchema({ title, description, keywords, treatments, visitSteps }) {
  const procedureId = `${PAGE_URL}#procedure`
  const treatmentId = (t) => `${PAGE_URL}#${t.id}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      // ── 1. The page ────────────────────────────────────────────────────────
      {
        '@type': 'MedicalWebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: title,
        headline: 'IV Hydration & Vitamin Therapy in Oklahoma City',
        description,
        keywords: keywords.join(', '),
        inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE}/iv-therapy#webpage` },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
        about: [{ '@id': procedureId }, ...treatments.map((t) => ({ '@id': treatmentId(t) }))],
        mainEntity: { '@id': procedureId },
        provider: { '@id': ORG_ID },
        mentions: [{ '@id': DOCTOR_ID }],
        contentLocation: CLINIC_PLACE,
        areaServed: [...AREA_SERVED, { '@type': 'State', name: 'Oklahoma' }],
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patients' },
        relatedLink: [`${SITE}/injections`, `${SITE}/iv-therapy`],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.hero-answer-line', '.faq-answer'],
        },
        potentialAction: {
          '@type': 'ScheduleAction',
          name: 'Schedule IV Hydration',
          target: `${SITE}/contact`,
        },
      },

      // ── 2. IV hydration (the page's main entity) ───────────────────────────
      {
        '@type': 'MedicalProcedure',
        '@id': procedureId,
        name: 'IV Hydration',
        procedureType: 'https://schema.org/TherapeuticProcedure',
        description:
          'IV hydration is a medical procedure that delivers fluids directly into the bloodstream through an intravenous line. Depending on the formulation, IV therapy may also include vitamins, minerals, and other supplemental nutrients.',
        bodyLocation: 'Intravenous',
        preparation:
          'Patients complete the clinic’s IV/IM Injection Questionnaire, appropriate health and safety screening, and a clinical evaluation before treatment.',
        howPerformed:
          'A qualified healthcare professional administers the treatment in person, with monitoring as clinically appropriate.',
        followup:
          'The clinic provides appropriate post-treatment instructions and explains when follow-up medical care may be necessary.',
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'City', name: 'Oklahoma City' },
      },

      // ── 3. The four IV formulations ────────────────────────────────────────
      ...treatments.map((t) => ({
        '@type': 'MedicalProcedure',
        '@id': treatmentId(t),
        name: t.title,
        procedureType: 'https://schema.org/TherapeuticProcedure',
        description: t.intro.slice(0, 2).join(' '),
        bodyLocation: 'Intravenous',
        preparation: 'Medical screening and provider evaluation are required before treatment.',
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'City', name: 'Oklahoma City' },
      })),

      // ── 4. The service: in-person only, with the formulation catalog ───────
      {
        '@type': 'Service',
        '@id': `${PAGE_URL}#service`,
        name: 'IV Hydration at Ebenezer Health Clinic',
        serviceType: 'IV Hydration',
        description:
          'Provider-guided, in-person IV hydration at Ebenezer Health Clinic in Bethany, Oklahoma, serving Oklahoma City and surrounding communities. Every treatment begins with a medical assessment.',
        url: PAGE_URL,
        provider: { '@id': ORG_ID },
        areaServed: AREA_SERVED,
        availableChannel: {
          '@type': 'ServiceChannel',
          name: 'In-person at Ebenezer Health Clinic, Bethany',
          serviceLocation: CLINIC_PLACE,
          servicePhone: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: '+14053498188',
            email: 'ebenezerhealth@outlook.com',
          },
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'IV Hydration Treatments',
          itemListElement: treatments.map((t) => ({
            '@type': 'Offer',
            name: t.title,
            description: t.details.map(({ label, value }) => `${label}: ${value}`).join('. '),
            itemOffered: { '@id': treatmentId(t) },
            seller: { '@id': ORG_ID },
          })),
        },
      },

      // ── 5. "What to expect" steps ──────────────────────────────────────────
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}#howto`,
        name: 'What to Expect During Your IV Hydration Appointment',
        step: visitSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: stripStepPrefix(step.title),
          text: step.text,
        })),
      },

      // ── 6. FAQs (single source with the visible accordion) ─────────────────
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: ivHydrationFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },

      // ── 7. Breadcrumbs ─────────────────────────────────────────────────────
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'IV Therapy', item: `${SITE}/iv-therapy` },
          { '@type': 'ListItem', position: 3, name: 'IV Hydration', item: PAGE_URL },
        ],
      },
    ],
  }
}
