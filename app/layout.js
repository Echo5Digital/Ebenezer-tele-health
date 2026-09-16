import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'
import ScrollAnimations from '@/components/ScrollAnimations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Online Medical Care in Oklahoma City | Ebenezer Health Clinic',
    template: '%s | Ebenezer Health Clinic',
  },
  description:
    "Get trusted online medical care in Oklahoma. Affordable cash-pay telehealth for weight loss, women's health & minor illness. Book online or call (405) 349-8188.",
  keywords: [
    'telehealth Oklahoma City',
    'online medical care Oklahoma',
    'medical clinic Oklahoma City',
    'cash pay clinic OKC',
    'telehealth Oklahoma',
    "women's health clinic OKC",
    'virtual doctor Oklahoma',
    'weight loss management online',
    'minor illness treatment',
    'Dr Susan George DNP APRN',
    'Ebenezer Health Clinic',
  ],
  authors: [{ name: 'Dr. Susan George, DNP, APRN' }],
  creator: 'Ebenezer Health Clinic',
  publisher: 'Ebenezer Health Clinic',
  metadataBase: new URL('https://www.ebenezerhealthclinic.com'),
  alternates: {
    canonical: 'https://www.ebenezerhealthclinic.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebenezerhealthclinic.com',
    siteName: 'Ebenezer Health Clinic',
    title: 'Online Medical Care in Oklahoma City | Ebenezer Health Clinic',
    description:
      "Get trusted online medical care in Oklahoma. Affordable cash-pay telehealth for weight loss, women's health & minor illness. Book online or call (405) 349-8188.",
    images: ['/ebenezerhealth-clinic-okc.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Medical Care in Oklahoma City | Ebenezer Health Clinic',
    description:
      "Get trusted online medical care in Oklahoma. Affordable cash-pay telehealth for weight loss, women's health & minor illness. Book online or call (405) 349-8188.",
    images: ['/ebenezerhealth-clinic-okc.webp'],
  },
  icons: {
    icon: '/ebenezerhealth-clinic.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Header />
        {/* pt matches actual header height per breakpoint:
            mobile 112px (4px accent + 12px py-top + 84px nav + 12px py-bot)
            sm    128px  (4 + 12 + 100 + 12)
            lg    144px  (4 + 12 + 116 + 12)
            pb-16 offsets the fixed mobile bottom bar                        */}
        <ScrollAnimations />
        <main className="pt-[112px] sm:pt-[128px] lg:pt-[144px] pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
