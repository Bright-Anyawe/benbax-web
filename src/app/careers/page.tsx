import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { COMPANY_INFO, RECRUITMENT_PROCESS_CANDIDATE } from '@/lib/constants';
import { formatMailto } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Job Seekers',
  description:
    'BENBAX VENTURES supports job seekers with career guidance, interview preparation, and placement opportunities in Ghana.',
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
          <Card>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">How We Help</h2>
            <ul className="space-y-2 text-slate-700">
              <li>Personalized career consultation and goal alignment.</li>
              <li>Opportunity matching based on strengths and preferences.</li>
              <li>Interview preparation and professional guidance.</li>
              <li>Support through placement and onboarding.</li>
            </ul>
          </Card>

          <Card>
            <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Send Your CV</h2>
            <p className="mb-4 text-slate-700">
              Share your CV and career interests with our team. We will review your profile and contact you when suitable opportunities are available.
            </p>
            <a
              href={formatMailto(COMPANY_INFO.email, 'CV Submission - BENBAX VENTURES')}
              className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-white hover:bg-orange-600 focus:ring-accent-orange"
            >
              Email Your CV
            </a>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <h2 id="process" className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          Our Candidate Process
        </h2>
        <div className="space-y-4">
          {RECRUITMENT_PROCESS_CANDIDATE.map((step) => (
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
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Career Tips and Resources</h2>
          <ul className="space-y-3 text-slate-700">
            {careerTips.map((tip) => (
              <li key={tip} className="rounded-md bg-slate-50 px-4 py-3">
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
        </div>
      </Section>
    </>
  );
}
