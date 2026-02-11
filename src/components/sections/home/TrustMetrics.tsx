import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { TRUST_METRICS } from '@/lib/constants';

const TrustMetrics = () => {
  return (
    <Section className="py-10 md:py-14" background="gray">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Performance You Can Measure</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          We track every stage of delivery so employers and candidates can make confident decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TRUST_METRICS.map((metric) => (
          <Card key={metric.id} className="h-full border-slate-200 bg-white">
            <p className="mb-2 text-3xl font-bold text-primary md:text-4xl">{metric.value}</p>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">{metric.label}</h3>
            <p className="text-sm text-slate-600">{metric.detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TrustMetrics;
