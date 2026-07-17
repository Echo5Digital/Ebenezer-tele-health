const faqItems = [
  {
    question: 'Do you offer telehealth in Oklahoma City and statewide?',
    answer:
      'Yes. We provide telehealth visits across all of Oklahoma, plus in-person appointments in Oklahoma City on Saturdays by appointment.',
  },
  {
    question: 'Is this like seeing a doctor?',
    answer:
      'Yes. You receive a full medical evaluation, diagnosis, treatment plan, and prescriptions when appropriate from a licensed, Board Certified provider.',
  },
  {
    question: 'Do I need insurance?',
    answer:
      "No. We're a cash-pay clinic with transparent pricing, so you know your cost before you book.",
  },
  {
    question: 'What areas do you serve?',
    answer:
      "In-person visits are in Oklahoma City; telehealth is available anywhere in Oklahoma as long as you're in the state at the time of your visit.",
  },
  {
    question: 'What do you treat?',
    answer:
      "Medical weight loss, women's health, and minor illnesses. For anything outside our scope, we'll guide you to the right care.",
  },
  {
    question: 'How soon can I be seen?',
    answer:
      'Same-day telehealth visits are often available. Ask about in person Saturday appointments in Oklahoma City.',
  },
  {
    question: 'What if I have a medical emergency?',
    answer:
      'Ebenezer Telehealth is not for emergencies. Call 911 or go to your nearest emergency room.',
  },
]

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. MedicalBusiness (primary entity, also serves as Organization) ──────
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.ebenezertelehealth.com/#organization',
      name: 'Ebenezer Telehealth',
      alternateName: 'Ebenezer Clinic',
      description:
        "Ebenezer Telehealth is a medical clinic in Oklahoma City offering telehealth across Oklahoma and in-person appointments on Saturdays. We provide online medical care for weight loss management, women's health, and minor illnesses — led by an experienced, Board Certified provider, with transparent cash-pay pricing and no insurance required.",
      url: 'https://www.ebenezertelehealth.com',
      telephone: '+14053498188',
      priceRange: '$$',
      image: 'https://www.ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      logo: 'https://www.ebenezertelehealth.com/images/ebenezer_logo.webp',
      // schema.org MedicalSpecialty enum values
      medicalSpecialty: ['PrimaryCare', 'Gynecologic'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7415 NW 23rd Street',
        addressLocality: 'Bethany',
        addressRegion: 'OK',
        postalCode: '73008',
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
        '@id': 'https://www.ebenezertelehealth.com/#dr-susan-george',
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
        image: 'https://www.ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      },
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD',
    },

    // ── 2. WebSite ────────────────────────────────────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://www.ebenezertelehealth.com/#website',
      name: 'Ebenezer Telehealth',
      url: 'https://www.ebenezertelehealth.com',
      description:
        "Telehealth in Oklahoma City & online across Oklahoma — plus in-person visits by appointment. Weight loss, women's health & minor illness. Book or call (405) 349-8188.",
      inLanguage: 'en-US',
      publisher: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
    },

    // ── 3. Person — Dr. Susan George ─────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': 'https://www.ebenezertelehealth.com/#dr-susan-george',
      name: 'Susan George',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DNP, APRN, BC-ADM',
      jobTitle: 'Doctor of Nursing Practice, Advanced Practice Registered Nurse',
      description:
        "Dr. Susan George, DNP, APRN, BC-ADM is a Doctor of Nursing Practice who specializes in women's health and is Board Certified in Advanced Diabetes Management. She leads Ebenezer Telehealth, a cash-pay medical clinic in Oklahoma City offering in-person Saturday appointments and telehealth across Oklahoma.",
      worksFor: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
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
      image: 'https://www.ebenezertelehealth.com/images/dr-susan-george-oklahoma-telehealth.webp',
      areaServed: { '@type': 'State', name: 'Oklahoma' },
    },

    // ── 4–6. Individual Service nodes (richer data for service pages) ─────────
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezertelehealth.com/#service-womens-health',
      name: "Women's Health",
      description:
        "Compassionate, private care for birth control, PCOS, menopause, and hormonal health, from a practice that specializes in women's health. See us in person in Oklahoma City on Saturdays or online anywhere in Oklahoma.",
      provider: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezertelehealth.com/womens-health',
      serviceType: "Women's Health",
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezertelehealth.com/#service-weight-loss',
      name: 'Medical Weight Loss',
      description:
        'A clinically guided weight-loss program built around your metabolic health — not a quick fix. When appropriate, your plan may include GLP-1 medications like semaglutide. Available in person in Oklahoma City or by telehealth statewide.',
      provider: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezertelehealth.com/weight-loss',
      serviceType: 'Weight Loss Management',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezertelehealth.com/#service-minor-illness',
      name: 'Minor Illness',
      description:
        'Feel better without the urgent-care wait. Get evaluated and treated for sinus infections, UTIs, cold and flu, and other everyday illnesses — same day when available.',
      provider: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezertelehealth.com/minor-illness',
      serviceType: 'Minor Illness Treatment',
    },

    // ── 7. FAQPage ────────────────────────────────────────────────────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.ebenezertelehealth.com/#faq',
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
      '@id': 'https://www.ebenezertelehealth.com/#webpage',
      url: 'https://www.ebenezertelehealth.com',
      name: 'Telehealth & In-Person Care in Oklahoma City | Ebenezer Telehealth',
      description:
        "Telehealth in Oklahoma City & online across Oklahoma — plus in-person visits by appointment. Weight loss, women's health & minor illness. Book or call (405) 349-8188.",
      isPartOf: { '@id': 'https://www.ebenezertelehealth.com/#website' },
      about: { '@id': 'https://www.ebenezertelehealth.com/#organization' },
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
