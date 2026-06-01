const faqItems = [
  {
    question: 'Is an online visit with Ebenezer a real medical appointment?',
    answer:
      'Yes. You meet directly with Dr. Susan George, DNP, APRN, for a private, secure consultation — and receive a real diagnosis, treatment plan, and prescriptions when appropriate.',
  },
  {
    question: 'Do I need insurance?',
    answer:
      "No. We're a transparent cash-pay practice, so you'll know your cost upfront with no surprise bills.",
  },
  {
    question: 'Where in Oklahoma can I be seen?',
    answer:
      "Anywhere in the state, as long as you're physically located in Oklahoma at the time of your visit.",
  },
  {
    question: 'What can I be treated for online?',
    answer:
      "Women's health, weight loss management, and many minor illnesses including sinus infections, colds, flu, and UTIs.",
  },
  {
    question: 'Can I get a prescription?',
    answer:
      'Yes, when medically appropriate — sent electronically to your preferred pharmacy.',
  },
  {
    question: 'How soon can I be seen?',
    answer:
      'Same-day appointments are often available. Book online or call (405) 349-8188.',
  },
]

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://ebenezertelehealth.com/#medicalbusiness',
      name: 'Ebenezer Telehealth',
      description:
        "Faith-driven telehealth practice offering affordable cash-pay online visits for women's health, weight loss management, and minor illnesses to patients across Oklahoma.",
      url: 'https://ebenezertelehealth.com',
      telephone: '(405) 349-8188',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        addressCountry: 'US',
        // TODO: Add street address and ZIP when confirmed
      },
      areaServed: {
        '@type': 'State',
        name: 'Oklahoma',
        sameAs: 'https://en.wikipedia.org/wiki/Oklahoma',
      },
      priceRange: '$$',
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD',
      medicalSpecialty: [
        "Women's Health",
        'Telehealth',
        'Weight Management',
        'Primary Care',
      ],
      employee: {
        '@type': 'Person',
        name: 'Susan George',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'DNP, APRN, BC-ADM',
      },
      // TODO: Add hours once confirmed
      // openingHoursSpecification: []
    },
    {
      '@type': 'Organization',
      '@id': 'https://ebenezertelehealth.com/#organization',
      name: 'Ebenezer Telehealth',
      url: 'https://ebenezertelehealth.com',
      telephone: '(405) 349-8188',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        addressCountry: 'US',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ebenezertelehealth.com/#website',
      name: 'Ebenezer Telehealth',
      url: 'https://ebenezertelehealth.com',
      description:
        "Affordable online doctor visits in Oklahoma City. Cash-pay telehealth for women's health, weight loss & minor illness. Led by Dr. Susan George, DNP, APRN, BC-ADM.",
      inLanguage: 'en-US',
      publisher: { '@id': 'https://ebenezertelehealth.com/#organization' },
    },
    {
      '@type': 'Person',
      '@id': 'https://ebenezertelehealth.com/#provider',
      name: 'Susan George',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DNP, APRN, BC-ADM',
      jobTitle: 'Doctor of Nursing Practice, Advanced Practice Registered Nurse',
      description:
        'Dr. Susan George is a Doctor of Nursing Practice and Advanced Practice Registered Nurse specializing in women\'s health and Board Certified in Advanced Diabetes Management (BC-ADM). She provides accessible, affordable telehealth care to women and families across Oklahoma.',
      worksFor: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Doctor of Nursing Practice (DNP)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Advanced Practice Registered Nurse (APRN)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory:
            'Board Certified in Advanced Diabetes Management (BC-ADM)',
        },
      ],
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      // TODO: Add license number once confirmed
    },
    {
      '@type': 'Service',
      '@id': 'https://ebenezertelehealth.com/#service-womens-health',
      name: "Women's Health Telehealth",
      description:
        "Discreet, compassionate virtual care for women's health including birth control, UTIs, hormonal health, reproductive health, and postpartum support. Led by Dr. Susan George, DNP, APRN, who specializes in women's health.",
      provider: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
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
      provider: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
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
      provider: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://ebenezertelehealth.com/minor-illness',
      serviceType: 'Minor Illness Treatment',
    },
    {
      '@type': 'Offer',
      '@id': 'https://ebenezertelehealth.com/#offer',
      name: 'Telehealth Consultation — Cash Pay',
      seller: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description:
          'Transparent cash-pay pricing. Contact for current rates. No insurance required.',
      },
    },
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
    {
      '@type': 'WebPage',
      '@id': 'https://ebenezertelehealth.com/#webpage',
      url: 'https://ebenezertelehealth.com',
      name: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
      description:
        "See a trusted online doctor in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
      isPartOf: { '@id': 'https://ebenezertelehealth.com/#website' },
      about: { '@id': 'https://ebenezertelehealth.com/#medicalbusiness' },
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
