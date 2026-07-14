import SchemaMarkup from '@/components/SchemaMarkup'
import HeroSection from '@/components/HeroSection'
import AnswerBlock from '@/components/AnswerBlock'
import QuickValueBar from '@/components/QuickValueBar'
import IntroParagraph from '@/components/IntroParagraph'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ProviderSection from '@/components/ProviderSection'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'

export const metadata = {
  title: 'Telehealth & In-Person Care in Oklahoma City | Ebenezer Telehealth',
  description:
    "Telehealth in Oklahoma City & online across Oklahoma — plus in-person visits by appointment. Weight loss, women's health & minor illness. Book or call (405) 349-8188.",
  alternates: {
    canonical: 'https://www.ebenezertelehealth.com',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      <HeroSection />
      <AnswerBlock />
      <QuickValueBar />
      <IntroParagraph />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <ProviderSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
