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
  title: 'Medical Clinic in Oklahoma City | Walk-Ins & Telehealth | Ebenezer Health Clinic',
  description:
    'Ebenezer Health Clinic — a walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Weight loss, women\'s health, primary care, IV therapy & more. (405) 349-8188.',
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com',
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
