import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { siteConfig } from '@/content/site';
import { LanguageProvider } from '@/components/layout/LanguageProvider';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingActions } from '@/components/layout/FloatingActions';
import { JsonLd } from '@/components/ui/JsonLd';

const plusJakarta = localFont({
  src: './fonts/PlusJakartaSans-Variable.woff2',
  weight: '600 800',
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  weight: '400 700',
  variable: '--font-inter',
  display: 'swap',
});

const notoBengali = localFont({
  src: './fonts/NotoSansBengali-Variable.woff2',
  weight: '400 700',
  variable: '--font-bengali',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E1B4B',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.firmName} | Chartered Accountants in ${siteConfig.location.cityPlaceholder}, Bangladesh`,
    template: `%s | ${siteConfig.firmName} — Chartered Accountants`,
  },
  description: siteConfig.description,
  keywords: [
    `chartered accountant in ${siteConfig.location.cityPlaceholder}`,
    'chartered accountant Bangladesh',
    'tax consultant Bangladesh',
    'audit firm Bangladesh',
    'VAT consultant Bangladesh',
    'RJSC company registration',
    'income tax return Bangladesh',
    'BIDA registration consultant',
    'ICAB chartered accountant proprietorship',
  ],
  authors: [{ name: `${siteConfig.ownerName}, ${siteConfig.ownerCredentials}` }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo-mss.jpg', type: 'image/jpeg' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/logo-mss.jpg'],
    apple: ['/logo-mss.jpg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: siteConfig.url,
    siteName: `${siteConfig.firmName} — Chartered Accountants`,
    title: `${siteConfig.firmName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og/og-default.svg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.firmName} — Chartered Accountants in Bangladesh`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.firmName} | Chartered Accountants (Bangladesh)`,
    description: siteConfig.description,
    images: ['/og/og-default.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['AccountingService', 'ProfessionalService', 'LocalBusiness'],
    name: siteConfig.firmName,
    legalName: siteConfig.firmName,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    image: `${siteConfig.url}/og/og-default.svg`,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.emailHref,
    priceRange: '৳৳',
    currenciesAccepted: 'BDT',
    founder: {
      '@type': 'Person',
      name: siteConfig.ownerName,
      jobTitle: `Proprietor & Principal Chartered Accountant (${siteConfig.ownerCredentials})`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.location.addressLine,
      addressLocality: siteConfig.location.cityPlaceholder,
      postalCode: siteConfig.location.postalCodePlaceholder,
      addressCountry: 'BD',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:30',
        closes: '18:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${notoBengali.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-canvas font-sans text-ink-900 antialiased">
        <JsonLd data={organizationSchema} />
        <LanguageProvider>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
