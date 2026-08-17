import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { RECRUITMENT_PROCESS_EMPLOYER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Employers',
  description:
    'Partner with BENBAX LIMITED COMPANY for efficient recruitment support, quality talent matching, and long-term staffing solutions in Ghana.',
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
          <Reveal variant="right">
            <Card hover>
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Partnership Benefits</h2>
              <ul className="space-y-2 text-slate-700">
                <li>Access to pre-screened and qualified candidates.</li>
                <li>Reduced hiring time with streamlined workflows.</li>
                <li>Hiring support tailored to your culture and goals.</li>
                <li>Transparent communication and measurable progress.</li>
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card hover>
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Industries Served</h2>
              <ul className="space-y-2 text-slate-700">
                {industriesServed.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section background="gray">
        <Reveal>
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">Our Employer Recruitment Process</h2>
        </Reveal>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block"
            aria-hidden="true"
          />
          <div className="space-y-4">
            {RECRUITMENT_PROCESS_EMPLOYER.map((step, index) => (
              <Reveal key={step.step} delay={index * 90}>
                <div className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md md:flex-row md:items-start md:pl-4">
                  <div className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-slate-700">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal variant="scale" className="rounded-xl bg-primary-50 p-8 text-center">
          <h2 className="mb-3 text-3xl font-bold text-primary-dark">Need Talent for Your Team?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-slate-700">
            Schedule a consultation and discuss your hiring goals with our recruitment team.
          </p>
          <Link
            href="/contact"
            className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-slate-900 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
          >
            Schedule a Consultation
          </Link>
        </Reveal>
      </Section>
    </>
  );
}

