import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { VALUE_PROPOSITIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Discover why employers and job seekers choose BENBAX VENTURES for ethical, efficient, and high-quality recruitment support in Ghana.',
  keywords: ['why choose BENBAX', 'recruitment expertise Ghana', 'staffing partner'],
};

export default function WhyChooseUsPage() {
  return (
    <Section background="gray">
      <PageHeader
        title="Why Choose BENBAX VENTURES"
        description="We combine market expertise with a personalized and transparent recruitment process that prioritizes long-term outcomes."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPOSITIONS.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="h-full">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="text-slate-600">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
