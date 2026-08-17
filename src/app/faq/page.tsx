import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { FAQ_ITEMS } from '@/lib/constants';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about BENBAX LIMITED COMPANY services including software development, recruitment, restaurant, and more.',
  keywords: ['FAQ', 'frequently asked questions', 'BENBAX help', 'recruitment questions', 'software development FAQ'],
};

export default function FaqPage() {
  const categories = [
    {
      title: 'Recruitment & HR',
      items: FAQ_ITEMS.filter(i => ['how-fast', 'industries', 'candidate-cost', 'replacement', 'employer-cost', 'candidate-process'].includes(i.id)),
    },
    {
      title: 'Software Development',
      items: FAQ_ITEMS.filter(i => ['software-process', 'software-tech'].includes(i.id)),
    },
    {
      title: 'Restaurant Services',
      items: FAQ_ITEMS.filter(i => ['restaurant-hours', 'restaurant-catering'].includes(i.id)),
    },
    {
      title: 'Other Services',
      items: FAQ_ITEMS.filter(i => ['transport-areas', 'construction-projects', 'marketing-services-detail', 'import-export-countries'].includes(i.id)),
    },
  ];

  return (
    <>
      <Section>
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services."
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {categories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 60}>
              <h2 className="mb-6 text-2xl font-bold text-primary-dark">{category.title}</h2>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <details
                    key={item.id}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                    name="faq-page"
                  >
                    <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-slate-900">
                      {item.question}
                      <span className="float-right text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <p className="pt-4 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
