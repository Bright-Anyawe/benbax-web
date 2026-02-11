import Link from 'next/link';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { CASE_STUDIES } from '@/lib/constants';

const CaseStudies = () => {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Recent Delivery Highlights</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Examples of how we solve hiring challenges with clear process ownership and measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((caseStudy) => (
          <Card key={caseStudy.id} className="h-full p-7">
            <p className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {caseStudy.service}
            </p>
            <h3 className="mb-4 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Challenge:</span> {caseStudy.challenge}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Approach:</span> {caseStudy.approach}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Outcome:</span> {caseStudy.outcome}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="btn-base rounded-lg border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
        >
          Discuss Your Hiring Project
        </Link>
      </div>
    </Section>
  );
};

export default CaseStudies;
