const faqItems = [
  {
    question: 'Do you take walk-ins?',
    answer:
      'Yes. Walk-ins are welcome at our Oklahoma City clinic. You can also book ahead or start a telehealth visit.',
  },
  {
    question: 'Do you offer telehealth too?',
    answer:
      'Yes. Telehealth visits are available across Oklahoma for care that works online.',
  },
  {
    question: 'Do I need insurance?',
    answer: "No. We're a cash-pay clinic with transparent pricing.",
  },
  {
    question: 'What do you treat?',
    answer:
      "Primary care, weight loss, women's health, minor illness, injections, and IV therapy.",
  },
  {
    question: 'What if I have an emergency?',
    answer: "We're not an emergency service. Call 911 or go to your nearest ER.",
  },
]

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. MedicalClinic (primary entity) ────────────────────────────────────
    {
      '@type': 'MedicalClinic',
      '@id': 'https://www.ebenezerhealthclinic.com/#organization',
      name: 'Ebenezer Health Clinic',
      alternateName: 'Ebenezer Telehealth',
      description:
        "Ebenezer Health Clinic is a walk-in medical clinic in Oklahoma City offering primary care, medical weight loss, women's health, minor illness care, injections, and IV therapy — plus telehealth across Oklahoma. Walk-ins welcome. Transparent cash-pay pricing. No insurance required.",
      url: 'https://www.ebenezerhealthclinic.com',
      telephone: '+14053498188',
      email: 'ebenezerhealth@outlook.com',
      priceRange: '$$',
      image: 'https://www.ebenezerhealthclinic.com/images/dr-susan-george-oklahoma-telehealth.webp',
      logo: 'https://www.ebenezerhealthclinic.com/images/ebenezer_logo.webp',
      medicalSpecialty: ['PrimaryCare', 'Gynecologic'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7415 NW 23rd Street',
        addressLocality: 'Bethany',
        addressRegion: 'OK',
        postalCode: '73008',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        // TODO: replace with exact verified coordinates once confirmed
        latitude: 35.5076,
        longitude: -97.6434,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      areaServed: {
        '@type': 'State',
        name: 'Oklahoma',
        sameAs: 'https://en.wikipedia.org/wiki/Oklahoma',
      },
      availableService: [
        { '@type': 'MedicalProcedure', name: 'Primary Care' },
        { '@type': 'MedicalProcedure', name: 'Medical Weight Loss Management' },
        { '@type': 'MedicalProcedure', name: "Women's Health" },
        { '@type': 'MedicalProcedure', name: 'Minor Illness Treatment' },
        { '@type': 'MedicalProcedure', name: 'Vitamin & B12 Injections' },
        { '@type': 'MedicalProcedure', name: 'IV Therapy & Hydration' },
        { '@type': 'MedicalProcedure', name: 'Televisit / Telehealth' },
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'Primary Care Visit' },
        { '@type': 'Offer', name: 'Weight Loss Initial Consultation' },
        { '@type': 'Offer', name: "Women's Health Initial Visit" },
        { '@type': 'Offer', name: 'Minor Illness Visit' },
        { '@type': 'Offer', name: 'Vitamin & B12 Injection' },
        { '@type': 'Offer', name: 'IV Therapy Session' },
        { '@type': 'Offer', name: 'Telehealth Televisit' },
        { '@type': 'Offer', name: 'Follow-Up Visit' },
      ],
      employee: {
        '@type': 'Person',
        '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george',
        name: 'Dr. Susan George',
        honorificPrefix: 'Dr.',
        jobTitle: 'Doctor of Nursing Practice (DNP), APRN',
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'DNP' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'APRN' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'BC-ADM' },
        ],
        knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management', 'Primary Care'],
        image: 'https://www.ebenezerhealthclinic.com/images/dr-susan-george-oklahoma-telehealth.webp',
      },
      paymentAccepted: 'Cash, Credit Card',
      currenciesAccepted: 'USD',
    },

    // ── 2. WebSite ────────────────────────────────────────────────────────────
    {
      '@type': 'WebSite',
      '@id': 'https://www.ebenezerhealthclinic.com/#website',
      name: 'Ebenezer Health Clinic',
      url: 'https://www.ebenezerhealthclinic.com',
      description:
        "Walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Primary care, weight loss, women's health, minor illness, injections & IV therapy. Book or call (405) 349-8188.",
      inLanguage: 'en-US',
      publisher: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
    },

    // ── 3. Person — Dr. Susan George ─────────────────────────────────────────
    {
      '@type': 'Person',
      '@id': 'https://www.ebenezerhealthclinic.com/#dr-susan-george',
      name: 'Susan George',
      honorificPrefix: 'Dr.',
      honorificSuffix: 'DNP, APRN, BC-ADM',
      jobTitle: 'Doctor of Nursing Practice, Advanced Practice Registered Nurse',
      description:
        "Dr. Susan George, DNP, APRN, BC-ADM is a Doctor of Nursing Practice Board Certified in Advanced Diabetes Management. She leads Ebenezer Health Clinic, a walk-in medical clinic in Oklahoma City offering primary care, weight loss, women's health, and more — plus telehealth across Oklahoma.",
      worksFor: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'DNP' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'APRN' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'BC-ADM' },
      ],
      knowsAbout: ["Women's Health", 'Weight Loss Management', 'Diabetes Management', 'Primary Care'],
      image: 'https://www.ebenezerhealthclinic.com/images/dr-susan-george-oklahoma-telehealth.webp',
      areaServed: { '@type': 'State', name: 'Oklahoma' },
    },

    // ── 4–10. Individual Service nodes ───────────────────────────────────────
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-primary-care',
      name: 'Primary Care',
      description:
        'Ongoing, relationship-based care for everyday health needs — checkups, chronic condition management, preventive screenings, and more. Walk in to our Oklahoma City clinic or see us by telehealth across Oklahoma.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezerhealthclinic.com/primary-care',
      serviceType: 'Primary Care',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-womens-health',
      name: "Women's Health",
      description:
        "Compassionate, private care for birth control, PCOS, menopause, and hormonal health. See us in person in Oklahoma City or online anywhere in Oklahoma.",
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezerhealthclinic.com/womens-health',
      serviceType: "Women's Health",
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-weight-loss',
      name: 'Medical Weight Loss',
      description:
        'A clinically guided weight-loss program built around your metabolic health. When appropriate, may include GLP-1 medications like semaglutide. Available in person in Oklahoma City or by telehealth statewide.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezerhealthclinic.com/weight-loss',
      serviceType: 'Weight Loss Management',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-minor-illness',
      name: 'Minor Illness Treatment',
      description:
        'Same-day evaluation and treatment for sinus infections, UTIs, cold and flu, and other everyday illnesses — without the urgent-care wait.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezerhealthclinic.com/minor-illness',
      serviceType: 'Minor Illness Treatment',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-injections',
      name: 'Vitamin & B12 Injections',
      description:
        'Targeted vitamin and B12 shots to support energy, metabolism, and overall wellness. Administered in-clinic in Oklahoma City after a brief provider evaluation.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City, OK' },
      url: 'https://www.ebenezerhealthclinic.com/injections',
      serviceType: 'Vitamin Injections',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-iv-therapy',
      name: 'IV Therapy & Hydration',
      description:
        'Customized IV drip therapy delivering fluids, vitamins, and nutrients directly into the bloodstream for rapid absorption and recovery. Available at our Oklahoma City clinic.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Oklahoma City, OK' },
      url: 'https://www.ebenezerhealthclinic.com/iv-therapy',
      serviceType: 'IV Therapy',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.ebenezerhealthclinic.com/#service-telehealth',
      name: 'Televisits (Telehealth)',
      description:
        'Secure video visits available statewide across Oklahoma. Convenient for follow-ups, prescription refills, and most non-emergency concerns.',
      provider: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
      areaServed: { '@type': 'State', name: 'Oklahoma' },
      url: 'https://www.ebenezerhealthclinic.com/telehealth',
      serviceType: 'Telehealth',
    },

    // ── 11. FAQPage ───────────────────────────────────────────────────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://www.ebenezerhealthclinic.com/#faq',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },

    // ── 12. WebPage — speakable spec for voice/AEO ───────────────────────────
    {
      '@type': 'WebPage',
      '@id': 'https://www.ebenezerhealthclinic.com/#webpage',
      url: 'https://www.ebenezerhealthclinic.com',
      name: 'Medical Clinic in Oklahoma City | Walk-Ins & Telehealth | Ebenezer Health Clinic',
      description:
        "Walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Primary care, weight loss, women's health, minor illness, injections & IV therapy. Book or call (405) 349-8188.",
      isPartOf: { '@id': 'https://www.ebenezerhealthclinic.com/#website' },
      about: { '@id': 'https://www.ebenezerhealthclinic.com/#organization' },
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
