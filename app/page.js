import SchemaMarkup from '@/components/SchemaMarkup'
import HeroSection from '@/components/HeroSection'
import AnswerBlock from '@/components/AnswerBlock'
import QuickValueBar from '@/components/QuickValueBar'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ProviderSection from '@/components/ProviderSection'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'

export const metadata = {
  title: 'Online Medical Care in Oklahoma City | Ebenezer Telehealth',
  description:
    "Get trusted online medical care in Oklahoma. Affordable cash-pay telehealth for weight loss, women's health & minor illness. Book online or call (405) 349-8188.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <HeroSection />
      <AnswerBlock />
      <QuickValueBar />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ProviderSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
