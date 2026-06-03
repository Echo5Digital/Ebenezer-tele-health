import SchemaMarkup from '@/components/SchemaMarkup'
import HeroSection from '@/components/HeroSection'
import AnswerBlock from '@/components/AnswerBlock'
import QuickValueBar from '@/components/QuickValueBar'
import ProviderSection from '@/components/ProviderSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'

export const metadata = {
  title: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
  description:
    "See a trusted online doctor in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
  alternates: {
    canonical: 'https://ebenezertelehealth.com',
  },
}

export default function HomePage() {
  return (
    <>
      <SchemaMarkup />
      {/* Shared background wrapper — body_bg.webp spans hero arc + answer block as one image */}
      <div
        style={{
          backgroundImage: "url('/body_bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeroSection />
        <AnswerBlock />
      </div>
      <QuickValueBar />
      <ProviderSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
