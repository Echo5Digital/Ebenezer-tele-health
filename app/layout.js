import { Inter } from 'next/font/google'
import Script from 'next/script'
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
    default: 'Medical Clinic in Oklahoma City | Walk-Ins & Telehealth',
    template: '%s | Ebenezer Health Clinic',
  },
  description:
    "Ebenezer Health Clinic, a walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Weight loss, women's health, primary care, IV therapy & more. (405) 349-8188.",
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
    title: 'Medical Clinic in Oklahoma City | Walk-Ins & Telehealth | Ebenezer Health Clinic',
    description:
      "Ebenezer Health Clinic, a walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Weight loss, women's health, primary care, IV therapy & more. (405) 349-8188.",
    images: ['/ebenezerhealth-clinic-okc.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Clinic in Oklahoma City | Walk-Ins & Telehealth | Ebenezer Health Clinic',
    description:
      "Ebenezer Health Clinic, a walk-in medical clinic in Oklahoma City plus telehealth across Oklahoma. Weight loss, women's health, primary care, IV therapy & more. (405) 349-8188.",
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MR0084M134"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MR0084M134');
          `}
        </Script>
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
