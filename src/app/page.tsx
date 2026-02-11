import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Hero from '@/components/sections/home/Hero';
import ServicesPreview from '@/components/sections/home/ServicesPreview';
import TrustMetrics from '@/components/sections/home/TrustMetrics';
import CaseStudies from '@/components/sections/home/CaseStudies';
import ValueProposition from '@/components/sections/home/ValueProposition';
import FaqSection from '@/components/sections/home/FaqSection';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'BENBAX LIMITED COMPANY helps employers hire top talent and supports job seekers with recruitment and career services in Ghana.',
  keywords: ['recruitment agency Ghana', 'talent acquisition', 'staffing company', 'job seekers'],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TrustMetrics />
      <ValueProposition />
      <CaseStudies />
      <FaqSection />

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="animate-fade-up">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Built on Integrity, Focused on People</h2>
            <p className="mb-4 text-slate-600">
              {COMPANY_INFO.shortName} delivers recruitment support grounded in ethical practices, local market understanding,
              and professional service.
            </p>
            <p className="mb-6 text-slate-600">
              We work with both growing businesses and individual professionals to create sustainable employment outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-base rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-light focus:ring-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="btn-base rounded-lg border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="animate-fade-up rounded-2xl bg-primary-50 p-8 [animation-delay:120ms]">
            <h3 className="mb-3 text-2xl font-semibold text-primary-dark">Ready to work with us?</h3>
            <p className="mb-6 text-slate-700">
              Whether you need exceptional candidates or your next career opportunity, our team is ready to support your next step.
            </p>
            <Link
              href="/contact"
              className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-slate-900 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-fade-up rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <MapPin className="h-4 w-4" />
              Office Location
            </p>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Meet Us in {COMPANY_INFO.location}</h2>
            <p className="mb-5 text-slate-600">
              Visit our office for consultations, interview support, and hiring strategy sessions. Use the live map for
              real-time directions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-base rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-light focus:ring-primary"
              >
                Contact Us
              </Link>
              <a
                href={COMPANY_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-base rounded-lg border border-primary px-5 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
              >
                Open in Google Maps
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm [animation-delay:100ms]">
            <iframe
              title="BENBAX location map"
              src={COMPANY_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 md:h-[360px]"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

