import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { RECRUITMENT_PROCESS_EMPLOYER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Employers',
  description:
    'Partner with BENBAX VENTURES for efficient recruitment support, quality talent matching, and long-term staffing solutions in Ghana.',
  keywords: ['hiring in Ghana', 'employer recruitment support', 'staffing partner', 'talent acquisition'],
};

const industriesServed = [
  'Administrative and Office Support',
  'Sales and Customer Service',
  'Operations and Logistics',
  'Finance and Professional Services',
  'Technical and Specialized Roles',
];

export default function EmployersPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="For Employers"
          description="Recruitment partnerships designed to deliver the right people faster, with quality and long-term fit at the center."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Partnership Benefits</h2>
            <ul className="space-y-2 text-slate-700">
              <li>Access to pre-screened and qualified candidates.</li>
              <li>Reduced hiring time with streamlined workflows.</li>
              <li>Hiring support tailored to your culture and goals.</li>
              <li>Transparent communication and measurable progress.</li>
            </ul>
          </Card>

          <Card>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Industries Served</h2>
            <ul className="space-y-2 text-slate-700">
              {industriesServed.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">Our Employer Recruitment Process</h2>
        <div className="space-y-4">
          {RECRUITMENT_PROCESS_EMPLOYER.map((step) => (
            <Card key={step.step} className="p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-xl bg-primary-50 p-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary-dark">Need Talent for Your Team?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-700">
            Schedule a consultation and discuss your hiring goals with our recruitment team.
          </p>
          <Link
            href="/contact"
            className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-white hover:bg-orange-600 focus:ring-accent-orange"
          >
            Schedule a Consultation
          </Link>
        </div>
      </Section>
    </>
  );
}
