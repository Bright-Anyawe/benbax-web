import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { VALUE_PROPOSITIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Discover why employers and job seekers choose BENBAX LIMITED COMPANY for ethical, efficient, and high-quality recruitment support in Ghana.',
  keywords: ['why choose BENBAX', 'recruitment expertise Ghana', 'staffing partner'],
};

export default function WhyChooseUsPage() {
  return (
    <Section background="gray">
      <PageHeader
        title="Why Choose BENBAX LIMITED COMPANY"
        description="We combine market expertise with a personalized and transparent recruitment process that prioritizes long-term outcomes."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPOSITIONS.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.id} delay={Math.min(index, 7) * 70} className="h-full">
              <Card hover className="group relative h-full overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-4 text-6xl font-black text-slate-50 transition-colors duration-300 group-hover:text-primary-50"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="relative mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="relative text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
