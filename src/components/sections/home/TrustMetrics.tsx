import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { TRUST_METRICS } from '@/lib/constants';

const TrustMetrics = () => {
  return (
    <Section className="py-10 md:py-14" background="gray">
      <Reveal className="mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Performance You Can Measure</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          We track every stage of delivery so employers and candidates can make confident decisions.
        </p>
      </Reveal>

      <Reveal variant="scale">
        <div className="grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="group relative p-6 transition-colors duration-300 hover:bg-primary-50/60 sm:p-7"
            >
              <p className="mb-2 text-3xl font-extrabold text-primary transition-transform duration-300 ease-out group-hover:scale-110 md:text-4xl">
                {metric.value}
              </p>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">{metric.label}</h3>
              <p className="text-sm text-slate-600">{metric.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default TrustMetrics;
