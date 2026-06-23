const faqItems = [
  {
    question: 'Is this like seeing a doctor?',
    answer:
      "Yes. You receive a full medical evaluation, diagnosis, treatment plan, and prescriptions from a licensed provider — Dr. Susan George, DNP, APRN — the same standard of care you'd receive at an in-person clinic.",
  },
  {
    question: 'Is an online visit with Ebenezer a real medical appointment?',
    answer:
      'Yes. You meet directly with Dr. Susan George, DNP, APRN, for a private telehealth consultation just like an in-person medical appointment.',
  },
  {
    question: 'Do I need insurance to see a doctor online at Ebenezer Telehealth?',
    answer:
      'No. Ebenezer Telehealth is a transparent cash-pay practice, so insurance is not required.',
  },
  {
    question: 'Where in Oklahoma can I be seen by Ebenezer Telehealth?',
    answer:
      'Anywhere in Oklahoma, as long as you are physically located in the state during your telehealth appointment.',
  },
  {
    question: 'Do you prescribe weight-loss medications like semaglutide?',
    answer:
      'Yes, when medically appropriate. We evaluate patients for GLP-1 medications and other evidence-based weight-loss treatments.',
  },
  {
    question: 'Can I get a prescription?',
    answer:
      'Yes. Prescriptions are sent electronically to your preferred pharmacy when clinically appropriate.',
  },
  {
    question: 'How soon can I be seen?',
    answer:
      'Same-day appointments are often available. Contact us or book online to check current availability.',
  },
]

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. MedicalBusiness (primary entity, also serves as Organization) ──────
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://ebenezertelehealth.com/#organization',
      name: 'Ebenezer Telehealth',
      alternateName: 'Ebenezer Clinic',
      description:
        "Faith-driven, Oklahoma City-based telehealth practice offering primary care, women's health, weight loss management, and treatment for minor illnesses throughout Oklahoma.",
      url: 'https://ebenezertelehealth.com',
      telephone: '+14053498188',
      priceRange: '$$',
      image: 'https://ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      logo: 'https://ebenezertelehealth.com/images/ebenezer_logo.webp',
      // schema.org MedicalSpecialty enum values
      medicalSpecialty: ['PrimaryCare', 'Gynecologic'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'State',
        name: 'Oklahoma',
        sameAs: 'https://en.wikipedia.org/wiki/Oklahoma',
      },
      availableService: [
        { '@type': 'MedicalProcedure', name: 'Medical Weight Loss Management' },
        { '@type': 'MedicalProcedure', name: "Women's Health Telehealth" },
        { '@type': 'MedicalProcedure', name: 'Minor Illness Treatment' },
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'Weight Loss Initial Consultation' },
        { '@type': 'Offer', name: "Women's Health Initial Visit" },
        { '@type': 'Offer', name: 'Minor Illness Visit' },
        { '@type': 'Offer', name: 'Follow-Up Visit' },
      ],
      employee: {
        '@type': 'Person',
        '@id': 'https://ebenezertelehealth.com/#dr-susan-george',
        name: 'Dr. Susan George',
        honorificPrefix: 'Dr.',
        jobTitle: 'Doctor of Nursing Practice (DNP), APRN',
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'DNP',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'APRN',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'BC-ADM',
          },
        ],
        knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management', 'Primary Care'],
        image: 'https://ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      },
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD',
    },

    // ── 2. WebSite ────────────────────────────────────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://ebenezertelehealth.com/#website',
      name: 'Ebenezer Telehealth',
      url: 'https://ebenezertelehealth.com',
      description:
        "Affordable online medical care in Oklahoma City. Cash-pay telehealth for women's health, weight loss & minor illness. Led by Dr. Susan George, DNP, APRN, BC-ADM.",
      inLanguage: 'en-US',
      publisher: { '@id': 'https://ebenezertelehealth.com/#organization' },
    },

    // ── 3. Person — Dr. Susan George ─────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': 'https://ebenezertelehealth.com/#dr-susan-george',
      name: 'Susan George',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DNP, APRN, BC-ADM',
      jobTitle: 'Doctor of Nursing Practice, Advanced Practice Registered Nurse',
      description:
        "Dr. Susan George is a Doctor of Nursing Practice and Advanced Practice Registered Nurse specializing in women's health and Board Certified in Advanced Diabetes Management (BC-ADM). She provides accessible, affordable telehealth care to women and families across Oklahoma.",
      worksFor: { '@id': 'https://ebenezertelehealth.com/#organization' },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'DNP',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'APRN',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'BC-ADM',
        },
      ],
      knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management', 'Primary Care'],
      image: 'https://ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      areaServed: { '@type': 'State', name: 'Oklahoma' },
    },

    // ── 4–6. Individual Service nodes (richer data for service pages) ─────────
    {
      '@type': 'Service',
      '@id': 'https://ebenezertelehealth.com/#service-womens-health',
      name: "Women's Health Telehealth",
      description:
        "Discreet, compassionate virtual care for women's health including birth control, UTIs, hormonal health, reproductive health, and postpartum support. Led by Dr. Susan George, DNP, APRN, who specializes in women's health.",
      provider: { '@id': 'https://ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://ebenezertelehealth.com/womens-health',
      serviceType: "Women's Health",
    },
    {
      '@type': 'Service',
      '@id': 'https://ebenezertelehealth.com/#service-weight-loss',
      name: 'Online Weight Loss Management',
      description:
        'Medically guided weight-loss management overseen by Dr. Susan George, DNP, APRN, BC-ADM. Clinical care focused on metabolic health for patients across Oklahoma.',
      provider: { '@id': 'https://ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://ebenezertelehealth.com/weight-loss',
      serviceType: 'Weight Loss Management',
    },
    {
      '@type': 'Service',
      '@id': 'https://ebenezertelehealth.com/#service-minor-illness',
      name: 'Treatment for Minor Illnesses',
      description:
        'Online evaluation and treatment for common minor illnesses including sinus infections, colds, flu, and UTIs. Often available same-day.',
      provider: { '@id': 'https://ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://ebenezertelehealth.com/minor-illness',
      serviceType: 'Minor Illness Treatment',
    },

    // ── 7. FAQPage ────────────────────────────────────────────────────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://ebenezertelehealth.com/#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },

    // ── 8. WebPage — speakable spec for voice/AEO ────────────────────────────
    {
      '@type': 'WebPage',
      '@id': 'https://ebenezertelehealth.com/#webpage',
      url: 'https://ebenezertelehealth.com',
      name: 'Online Medical Care in Oklahoma City | Ebenezer Telehealth',
      description:
        "Get trusted online medical care in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
      isPartOf: { '@id': 'https://ebenezertelehealth.com/#website' },
      about: { '@id': 'https://ebenezertelehealth.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.hero-answer-line', '.faq-answer'],
      },
    },
  ],
}

export default function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  )
}
