import type { Metadata } from 'next';
import { ArrowUpRight, Clock4, Inbox, Mail, MapPin } from 'lucide-react';
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
          <div className="animate-fade-up rounded-xl bg-primary-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-primary-dark">Contact Information</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <p>{COMPANY_INFO.location}</p>
                  <a
                    href={COMPANY_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary-light"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
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

          <div className="animate-fade-up rounded-xl border border-slate-200 p-6 [animation-delay:100ms]">
            <h2 className="mb-2 text-xl font-semibold text-slate-900">Business Hours</h2>
            <p className="inline-flex items-center gap-2 text-slate-700">
              <Clock4 className="h-4 w-4 text-primary" />
              {COMPANY_INFO.businessHours}
            </p>
          </div>
        </div>

        <div className="animate-fade-up lg:col-span-3 [animation-delay:140ms]">
          <ContactForm />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-sm [animation-delay:180ms]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Visit Our Office</p>
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">Real-time Location Map</h2>
          <p className="mb-4 text-slate-600">
            Use the live map to locate our office in {COMPANY_INFO.mapQuery}. You can open full directions directly in
            Google Maps.
          </p>
          <a
            href={COMPANY_INFO.mapDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-base rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-light focus:ring-primary"
          >
            Open Directions
          </a>
        </div>

        <div className="animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm [animation-delay:220ms]">
          <iframe
            title="BENBAX Ventures office location on Google Maps"
            src={COMPANY_INFO.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 md:h-[360px]"
          />
        </div>
      </div>
    </Section>
  );
}
