import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CeoContactBadge from '@/components/layout/CeoContactBadge';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://benbaxlimitedcompany.com';
const logoPath = '/images/Benbax_logo-removebg-preview.png';

export const viewport: Viewport = {
  themeColor: '#2EBC3B',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Benbax Ventures Company Limited | HR, Software & Construction Ghana',
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    'Benbax Ventures (Benbaxco) is a multi-sector leader in Tema, Ghana specializing in Recruitment, Software Development, Construction, and Logistics.',
  keywords: [
    'Benbax',
    'Benbaxco',
    'Benbax Ventures',
    'HR services Tema',
    'Software development Ghana',
    'Construction companies Apolonia',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: logoPath, type: 'image/png' }],
    shortcut: [{ url: logoPath, type: 'image/png' }],
    apple: [{ url: logoPath, type: 'image/png' }],
  },
  openGraph: {
    title:
      'Benbax Ventures Company Limited | HR, Software & Construction Ghana',
    description:
      'Benbax Ventures (Benbaxco) is a multi-sector leader in Tema, Ghana specializing in Recruitment, Software Development, Construction, and Logistics.',
    type: 'website',
    locale: 'en_GH',
    url: siteUrl,
    siteName: COMPANY_INFO.shortName,
    images: [
      {
        url: logoPath,
        width: 1024,
        height: 1024,
        alt: `${COMPANY_INFO.shortName} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Benbax Ventures Company Limited | HR, Software & Construction Ghana',
    description:
      'Benbax Ventures (Benbaxco) is a multi-sector leader in Tema, Ghana specializing in Recruitment, Software Development, Construction, and Logistics.',
    images: [logoPath],
  },
  verification: {
    google: 'RW_Fm0gMyYF5mbEnIiw5Au0ldLPLekazeI4Wq5Cwjbk',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'BENBAX',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  alternateName: ['Benbax Ventures', 'Benbaxco', 'Benbax Ventures Company Limited'],
  url: siteUrl,
  logo: `${siteUrl}${logoPath}`,
  image: `${siteUrl}${logoPath}`,
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Katamanso Apolonia',
    addressLocality: 'Tema',
    addressRegion: 'Greater Accra',
    addressCountry: 'GH',
    postOfficeBoxNumber: COMPANY_INFO.poBox,
  },
  description: COMPANY_INFO.description,
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.tiktok].filter(Boolean),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phone,
    contactType: 'customer service',
    availableLanguage: 'English',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Benbax Ventures Company Limited',
  image: 'https://benbaxco.com/logo.png',
  '@id': 'https://benbaxco.com',
  url: 'https://benbaxco.com',
  telephone: '+233546013031',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Katamanso, Apolonia',
    addressLocality: 'Tema',
    addressRegion: 'Greater Accra',
    postalCode: 'C02968',
    addressCountry: 'GH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 5.6685,
    longitude: -0.0151,
  },
  service: [
    'Recruitment & HR Services',
    'Software Development',
    'Restaurant & Catering',
    'Transportation & Delivery',
    'Building & Construction',
    'Import & Export Services',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Benbax Ventures Company Limited',
  alternateName: 'Benbaxco',
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <CeoContactBadge />
      </body>
    </html>
  );
}

