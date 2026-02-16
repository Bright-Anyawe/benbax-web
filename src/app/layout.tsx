import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.shortName} | Software Development, Recruitment & HR, Restaurant Services`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description: COMPANY_INFO.description,
  keywords: [
    'software development Ghana',
    'recruitment and HR services Ghana',
    'restaurant services Ghana',
    'digital solutions',
    'BENBAX LIMITED COMPANY',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_INFO.shortName} | Software Development, Recruitment & HR, Restaurant Services`,
    description: COMPANY_INFO.description,
    type: 'website',
    locale: 'en_GH',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: 'https://benbaxlimitedcompany.com',
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.restaurantPhone,
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
      </body>
    </html>
  );
}

