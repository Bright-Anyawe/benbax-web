import Link from 'next/link';
import { VALUE_PROPOSITIONS } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const ValueProposition = () => {
  return (
    <Section background="gray">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Why BENBAX LIMITED COMPANY</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Our approach combines local expertise, transparency, and long-term partnership to deliver better hiring outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPOSITIONS.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="h-full">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/why-choose-us"
          className="btn-base rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-light focus:ring-primary"
        >
          Explore our advantages
        </Link>
      </div>
    </Section>
  );
};

export default ValueProposition;

