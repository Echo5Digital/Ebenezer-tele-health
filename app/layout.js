import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileBottomBar from '@/components/MobileBottomBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
    template: '%s | Ebenezer Telehealth',
  },
  description:
    "See a trusted online doctor in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
  keywords: [
    'online doctor Oklahoma City',
    'telehealth Oklahoma',
    "women's health telehealth",
    'weight loss management online',
    'minor illness treatment',
    'cash pay telehealth',
    'Dr Susan George DNP APRN',
    'Ebenezer Telehealth',
  ],
  authors: [{ name: 'Dr. Susan George, DNP, APRN' }],
  creator: 'Ebenezer Telehealth',
  publisher: 'Ebenezer Telehealth',
  metadataBase: new URL('https://ebenezertelehealth.com'),
  alternates: {
    canonical: 'https://ebenezertelehealth.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ebenezertelehealth.com',
    siteName: 'Ebenezer Telehealth',
    title: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
    description:
      "See a trusted online doctor in Oklahoma City. Affordable cash-pay telehealth for women's health, weight loss & minor illness.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Doctor in Oklahoma City | Ebenezer Telehealth',
    description:
      "Affordable cash-pay telehealth in Oklahoma. Women's health, weight loss & minor illness. Book online or call (405) 349-8188.",
  },
  icons: {
    icon: '/7c290023-b033-4171-a9fc-6f290c7ccf74.svg',
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
        {/* pt-[80px] offsets the fixed header; pb-16 offsets the fixed mobile bottom bar */}
        <main className="pt-[80px] pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
