import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/home/Hero';
import ServicesPreview from '@/components/sections/home/ServicesPreview';
import ValueProposition from '@/components/sections/home/ValueProposition';
import Section from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'BENBAX VENTURES LIMITED COMPANY helps employers hire top talent and supports job seekers with recruitment and career services in Ghana.',
  keywords: ['recruitment agency Ghana', 'talent acquisition', 'staffing company', 'job seekers'],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ValueProposition />

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Built on Integrity, Focused on People</h2>
            <p className="mb-4 text-slate-600">
              {COMPANY_INFO.shortName} delivers recruitment support grounded in ethical practices, local market understanding, and professional service.
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

          <div className="rounded-2xl bg-primary-50 p-8">
            <h3 className="mb-3 text-2xl font-semibold text-primary-dark">Ready to work with us?</h3>
            <p className="mb-6 text-slate-700">
              Whether you need exceptional candidates or your next career opportunity, our team is ready to support your next step.
            </p>
            <Link
              href="/contact"
              className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-white hover:bg-orange-600 focus:ring-accent-orange"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
