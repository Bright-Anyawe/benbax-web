import Link from 'next/link';
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

const FaqSection = () => {
  return (
    <Section background="gray">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Clear answers for employers and candidates before you get started.</p>
        </Reveal>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.id} variant="up" delay={Math.min(index, 6) * 60}>
              <details
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                name="faq"
              >
                <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-slate-900">
                  {item.question}
                  <span className="float-right text-primary transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pt-4 text-slate-700">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10 text-center">
          <Link
            href="/contact"
            className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-slate-900 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
          >
            Ask a Specific Question
          </Link>
        </Reveal>
      </div>
    </Section>
  );
};

export default FaqSection;
