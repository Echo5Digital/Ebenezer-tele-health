// Single source of truth for the visible FAQ accordion and the FAQPage JSON-LD,
// so the schema can never drift from what patients actually read.
//
// `answer` is an array of paragraphs. An optional `link` renders a final
// paragraph of the form: {prefix}<a>{label}</a>{suffix}.
export const injectionsFaqs = [
  {
    id: 'inj-faq-1',
    question: 'What types of vitamin injections are available at Ebenezer Health Clinic?',
    answer: [
      'Ebenezer Health Clinic offers Vitamin B12, B-Complex, Lipotropic (MIC), and Vitamin D injections. Glutathione injections and Alpha-Lipoic Acid (ALA) treatments may also be available on request, subject to provider evaluation and availability.',
    ],
  },
  {
    id: 'inj-faq-2',
    question: 'How much do vitamin injections cost in Oklahoma City?',
    answer: [
      'Our regularly offered Vitamin B12, B-Complex, Lipotropic (MIC), and Vitamin D injections cost $50 each. Pricing for Glutathione and Alpha-Lipoic Acid treatments is confirmed during consultation.',
    ],
  },
  {
    id: 'inj-faq-3',
    question: 'Do I need an appointment for a vitamin injection?',
    answer: [
      'Walk-ins are welcome at Ebenezer Health Clinic in Oklahoma City. You can also schedule an appointment in advance for a more convenient visit. On-request treatments should be confirmed with the clinic before visiting.',
    ],
  },
  {
    id: 'inj-faq-4',
    question: 'Can Vitamin B12 injections help with fatigue?',
    answer: [
      'Vitamin B12 injections may help improve fatigue caused by B12 deficiency. However, they have not been shown to consistently improve energy in people with adequate B12 levels. A provider evaluation can help determine whether supplementation is appropriate.',
    ],
  },
  {
    id: 'inj-faq-5',
    question: 'What is a Glutathione injection used for?',
    answer: [
      'Glutathione is an antioxidant naturally present in the body that helps protect cells from oxidative damage. However, clinical evidence supporting injectable glutathione for skin improvement, increased energy, or general wellness remains limited.',
    ],
  },
  {
    id: 'inj-faq-6',
    question: 'What is Alpha-Lipoic Acid (ALA)?',
    answer: [
      'Alpha-Lipoic Acid is a compound involved in cellular energy metabolism and antioxidant activity. It has been studied for diabetic nerve discomfort, with mixed research findings. Its benefits for general wellness are not established.',
    ],
  },
  {
    id: 'inj-faq-7',
    question: 'Are vitamin and wellness injections safe for everyone?',
    answer: [
      'No. The suitability of vitamin and wellness injections depends on individual medical conditions, medications, nutrient levels, and other health factors. Injections can have side effects and other risks. A medical assessment is required before treatment.',
    ],
  },
  {
    id: 'inj-faq-8',
    question: 'Are vitamin injections available through telehealth?',
    answer: [
      'No. Vitamin and wellness injections are administered in person at Ebenezer Health Clinic. Telehealth visits do not include injection administration.',
    ],
  },
  {
    id: 'inj-faq-9',
    question: 'Does Ebenezer Health Clinic accept insurance for vitamin injections?',
    answer: [
      'Vitamin and wellness injections are offered as cash-pay services. Insurance is not required. Patients should contact the clinic for current pricing and payment details.',
    ],
  },
  {
    id: 'inj-faq-10',
    question: 'What is the difference between vitamin injections and IV hydration?',
    answer: [
      'Vitamin injections deliver a specific formulation through an injection, while IV hydration delivers fluids and, depending on the formulation, additional nutrients directly into a vein.',
      'The most appropriate option depends on your clinical needs and provider evaluation.',
    ],
    link: {
      prefix: 'For more information about IV hydration services, visit our ',
      label: 'IV Therapy page',
      href: '/iv-therapy',
      suffix: '.',
    },
  },
]

// Plain-text answer for JSON-LD (paragraphs + trailing link sentence).
export function faqAnswerText(faq) {
  const parts = [...faq.answer]
  if (faq.link) parts.push(`${faq.link.prefix}${faq.link.label}${faq.link.suffix}`)
  return parts.join(' ')
}
