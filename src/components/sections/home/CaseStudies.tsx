import Link from 'next/link';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { CASE_STUDIES } from '@/lib/constants';

const CaseStudies = () => {
  return (
    <Section>
      <Reveal className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Recent Delivery Highlights</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Examples of how we solve hiring challenges with clear process ownership and measurable outcomes.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((caseStudy, index) => (
          <Reveal key={caseStudy.id} variant="up" delay={index * 100} className="h-full">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 text-5xl font-black text-slate-50 transition-colors duration-300 group-hover:text-primary-50"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="relative mb-3 inline-flex w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {caseStudy.service}
              </p>
              <h3 className="relative mb-4 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
              <div className="relative space-y-3 text-sm text-slate-700">
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
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-10 text-center">
        <Link
          href="/contact"
          className="btn-base rounded-lg border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
        >
          Discuss Your Hiring Project
        </Link>
      </Reveal>
    </Section>
  );
};

export default CaseStudies;
