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
    default: `${COMPANY_INFO.shortName} | Recruitment and HR Services in Ghana`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    'BENBAX VENTURES LIMITED COMPANY provides professional recruitment and HR services in Ghana for employers and job seekers.',
  keywords: [
    'recruitment Ghana',
    'HR services Ghana',
    'staffing solutions',
    'executive search',
    'job seekers Ghana',
    'BENBAX VENTURES',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_INFO.shortName} | Recruitment and HR Services in Ghana`,
    description: COMPANY_INFO.description,
    type: 'website',
    locale: 'en_GH',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  url: 'https://benbaxventures.com',
  email: COMPANY_INFO.email,
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
