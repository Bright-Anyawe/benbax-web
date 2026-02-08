import type { Metadata } from 'next';
import { Inbox, Mail, MapPin } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/sections/contact/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { formatMailto } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact BENBAX VENTURES LIMITED COMPANY for recruitment support, staffing consultations, and job seeker assistance in Ghana.',
  keywords: ['contact BENBAX', 'recruitment consultation Ghana', 'staffing inquiry', 'job support contact'],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  email: COMPANY_INFO.email,
  description: COMPANY_INFO.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: COMPANY_INFO.location,
    addressCountry: 'GH',
    postOfficeBoxNumber: COMPANY_INFO.poBox,
  },
};

export default function ContactPage() {
  return (
    <Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <PageHeader
        title="Contact Us"
        description="Reach out to discuss your hiring needs or career goals. We are ready to support both employers and job seekers."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl bg-primary-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-primary-dark">Contact Information</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Inbox className="mt-0.5 h-5 w-5 text-primary" />
                <span>{COMPANY_INFO.poBox}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <a href={formatMailto(COMPANY_INFO.email)} className="hover:text-primary">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-6">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">Business Hours</h2>
            <p className="text-slate-700">{COMPANY_INFO.businessHours}</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
