const faqItems = [
  {
    question: 'Is an online visit with Ebenezer a real medical appointment?',
    answer:
      'Yes. You meet directly with Dr. Susan George, DNP, APRN, for a private, secure consultation — and receive a real diagnosis, treatment plan, and prescriptions when appropriate.',
  },
  {
    question: 'Do I need insurance to see a doctor online at Ebenezer Telehealth?',
    answer:
      "No. Ebenezer Telehealth is a transparent cash-pay practice, so you'll know your cost upfront with no surprise bills.",
  },
  {
    question: 'Where in Oklahoma can I be seen by Ebenezer Telehealth?',
    answer:
      "Anywhere in Oklahoma, as long as you're physically located in the state at the time of your visit.",
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
      'Same-day telehealth appointments in Oklahoma are often available. Book online or call (405) 349-8188.',
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
        "Faith-driven, Oklahoma City-based telehealth practice offering affordable cash-pay online visits for women's health, weight loss management, and minor illnesses to patients across Oklahoma.",
      url: 'https://ebenezertelehealth.com',
      telephone: '+14053498188',
      priceRange: '$$',
      // TODO: Replace with actual office/provider photo URL supplied by client
      // image: 'https://ebenezertelehealth.com/[office-or-provider-photo].jpg',
      // TODO: Replace with actual logo URL supplied by client
      // logo: 'https://ebenezertelehealth.com/[logo].png',
      // schema.org MedicalSpecialty enum values
      medicalSpecialty: ['PrimaryCare', 'Gynecologic'],
      address: {
        '@type': 'PostalAddress',
        // TODO: Add street address once confirmed by client
        // streetAddress: '[CLIENT TO PROVIDE]',
        addressLocality: 'Oklahoma City',
        addressRegion: 'OK',
        // TODO: Add ZIP code once confirmed by client
        // postalCode: '[CLIENT TO PROVIDE]',
        addressCountry: 'US',
      },
      // TODO: Add GPS coordinates once confirmed by client
      // geo: {
      //   '@type': 'GeoCoordinates',
      //   latitude: '[CLIENT TO PROVIDE]',
      //   longitude: '[CLIENT TO PROVIDE]',
      // },
      areaServed: {
        '@type': 'State',
        name: 'Oklahoma',
        sameAs: 'https://en.wikipedia.org/wiki/Oklahoma',
      },
      // TODO: Add Google Business Profile / Maps URL once provided by client
      // hasMap: '[CLIENT TO PROVIDE]',
      // TODO: Uncomment and fill in hours once confirmed by client
      // openingHoursSpecification: [
      //   {
      //     '@type': 'OpeningHoursSpecification',
      //     dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      //     opens: '[CLIENT TO PROVIDE e.g. 09:00]',
      //     closes: '[CLIENT TO PROVIDE e.g. 17:00]',
      //   },
      // ],
      availableService: [
        { '@type': 'MedicalProcedure', name: "Women's Health Telehealth" },
        { '@type': 'MedicalProcedure', name: 'Online Weight Loss Management' },
        { '@type': 'MedicalProcedure', name: 'Minor Illness Treatment' },
      ],
      makesOffer: [
        {
          '@type': 'Offer',
          name: 'Telehealth Visit (Cash-Pay)',
          priceCurrency: 'USD',
          // TODO: Add visit price once confirmed by client
          // price: '[CLIENT TO PROVIDE]',
          availability: 'https://schema.org/InStock',
        },
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
            credentialCategory: 'Doctor of Nursing Practice (DNP)',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Advanced Practice Registered Nurse (APRN)',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Board Certified in Advanced Diabetes Management (BC-ADM)',
          },
        ],
        knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management'],
      },
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD',
      // TODO: Uncomment and add social/profile URLs once provided by client
      // sameAs: [
      //   '[CLIENT TO PROVIDE - Google Business Profile URL]',
      //   '[CLIENT TO PROVIDE - Facebook URL]',
      //   '[CLIENT TO PROVIDE - Instagram URL]',
      // ],
    },

    // ── 2. WebSite ────────────────────────────────────────────────────────────
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
          credentialCategory: 'Doctor of Nursing Practice (DNP)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Advanced Practice Registered Nurse (APRN)',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Board Certified in Advanced Diabetes Management (BC-ADM)',
        },
      ],
      knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management'],
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
      name: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
      description:
        "See a trusted online doctor in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
      isPartOf: { '@id': 'https://ebenezertelehealth.com/#website' },
      about: { '@id': 'https://ebenezertelehealth.com/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        // Matches .hero-answer-line (AnswerBlock) and .faq-answer (FAQSection)
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
