import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { COMPANY_INFO, RECRUITMENT_PROCESS_CANDIDATE } from '@/lib/constants';
import { formatMailto } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Job Seekers',
  description:
    'BENBAX LIMITED COMPANY supports job seekers with career guidance, interview preparation, and placement opportunities in Ghana.',
  keywords: ['jobs Ghana', 'career advisory Ghana', 'job seeker support', 'CV support'],
};

const careerTips = [
  'Keep your CV current and tailored to each role.',
  'Research employers before interviews and prepare practical examples.',
  'Build a strong professional network in your industry.',
  'Continue learning through short courses and workshops.',
];

export default function CareersPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="For Job Seekers"
          description="We help professionals find opportunities aligned with their skills, experience, and long-term career goals."
        />

        <div id="how-we-help" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal variant="right">
            <Card hover>
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">How We Help</h2>
              <ul className="space-y-2 text-slate-700">
                <li>Personalized career consultation and goal alignment.</li>
                <li>Opportunity matching based on strengths and preferences.</li>
                <li>Interview preparation and professional guidance.</li>
                <li>Support through placement and onboarding.</li>
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card hover>
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Send Your CV</h2>
              <p className="mb-4 text-slate-700">
                Share your CV and career interests with our team. We will review your profile and contact you when suitable opportunities are available.
              </p>
              <a
                href={formatMailto(COMPANY_INFO.email, 'CV Submission - BENBAX LIMITED COMPANY')}
                className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-slate-900 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
              >
                Email Your CV
              </a>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section background="gray">
        <Reveal>
          <h2 id="process" className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Our Candidate Process
          </h2>
        </Reveal>
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block"
            aria-hidden="true"
          />
          <div className="space-y-4">
            {RECRUITMENT_PROCESS_CANDIDATE.map((step, index) => (
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
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Career Tips and Resources</h2>
          <ul className="space-y-3 text-slate-700">
            {careerTips.map((tip) => (
              <li
                key={tip}
                className="rounded-md bg-slate-50 px-4 py-3 transition-colors duration-300 hover:bg-primary-50"
              >
                {tip}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/contact"
              className="btn-base rounded-lg border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
            >
              Talk to Our Team
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

