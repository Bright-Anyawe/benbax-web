import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { COMPANY_INFO, CORE_VALUES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about BENBAX LIMITED COMPANY, our mission, vision, and values across software development, recruitment and HR services, and restaurant services in Ghana.',
  keywords: ['about BENBAX LIMITED COMPANY', 'software development mission', 'HR values', 'restaurant services'],
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="About BENBAX LIMITED COMPANY"
          description="A multi-sector company focused first on Software Development, followed by Recruitment and HR Services, and Restaurant Services."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal variant="right">
            <Card hover className="h-full">
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Our Mission</h2>
              <p className="text-slate-700">{COMPANY_INFO.mission}</p>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card hover className="h-full">
              <h2 className="mb-3 text-2xl font-semibold text-primary-dark">Our Vision</h2>
              <p className="text-slate-700">{COMPANY_INFO.vision}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section background="gray">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">Core Values</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, index) => (
            <Reveal key={value.id} delay={index * 90} className="h-full">
              <Card hover className="h-full">
                <h3 className="mb-3 text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal variant="scale" className="mx-auto max-w-4xl rounded-xl bg-primary-50 p-8">
          <h2 className="mb-4 text-3xl font-bold text-primary-dark">Our Approach</h2>
          <ul className="space-y-3 text-slate-700">
            <li>People-first engagement with both clients and candidates.</li>
            <li>Ethical and transparent recruitment practices at every stage.</li>
            <li>Professional standards focused on quality outcomes and long-term fit.</li>
            <li>Local market insight combined with practical hiring strategy.</li>
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
