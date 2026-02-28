import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CeoContactBadge from '@/components/layout/CeoContactBadge';
import { COMPANY_INFO } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://benbaxlimitedcompany.com';
const logoPath = '/images/benbax-company-ltd.png';

export const viewport: Viewport = {
  themeColor: '#2EBC3B',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Benbax Company Limited | Multi-Sector Services in Ghana',
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    'Benbax Ventures Company Limited offers professional HR & Recruitment, Software Development, Construction, and Logistics services in Tema, Ghana. Partner with us today.',
  keywords: [
    'Benbax',
    'Benbax Ventures',
    'Benbax Ventures Company Limited',
    'Benbax Ghana',
    'Benbaxco',
    'Recruitment Agency Tema',
    'Software Development Ghana',
    'Construction companies in Tema',
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
    title: 'Benbax Company Limited | Multi-Sector Services in Ghana',
    description:
      'Benbax Ventures Company Limited offers professional HR & Recruitment, Software Development, Construction, and Logistics services in Tema, Ghana. Partner with us today.',
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
    title: 'Benbax Company Limited | Multi-Sector Services in Ghana',
    description:
      'Benbax Ventures Company Limited offers professional HR & Recruitment, Software Development, Construction, and Logistics services in Tema, Ghana. Partner with us today.',
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
  url: 'https://benbaxlimitedcompany.com',
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY_INFO.location,
    addressCountry: 'GH',
    postOfficeBoxNumber: COMPANY_INFO.poBox,
  },
  description: COMPANY_INFO.description,
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
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <CeoContactBadge />
      </body>
    </html>
  );
}

