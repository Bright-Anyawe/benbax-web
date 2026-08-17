import Link from 'next/link';
import { VALUE_PROPOSITIONS } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

const ValueProposition = () => {
  return (
    <Section background="gray">
      <Reveal className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Why BENBAX LIMITED COMPANY</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Our approach combines local expertise, transparency, and long-term partnership to deliver better hiring outcomes.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPOSITIONS.slice(0, 4).map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} variant="up" delay={index * 90} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-4 text-6xl font-black text-slate-50 transition-colors duration-300 group-hover:text-primary-50"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="relative text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={150} className="mt-10 text-center">
        <Link
          href="/why-choose-us"
          className="btn-base rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-light focus:ring-primary"
        >
          Explore our advantages
        </Link>
      </Reveal>
    </Section>
  );
};

export default ValueProposition;
