import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Feedback & Testimonials',
  description:
    'Read what our clients, candidates, and customers say about BENBAX LIMITED COMPANY. Reviews for our software development, recruitment, and restaurant services.',
  keywords: ['testimonials', 'customer feedback', 'BENBAX reviews', 'client reviews', 'customer reviews'],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-slate-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Section>
        <PageHeader
          title="Customer Feedback & Testimonials"
          description="Hear from our clients, candidates, and customers about their experience working with BENBAX."
        />

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={Math.min(index, 5) * 70} className="h-full">
                <Card hover className="h-full flex flex-col">
                  <div className="mb-3">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p className="mb-4 text-slate-700 italic leading-relaxed flex-1">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="border-t border-slate-200 pt-3">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
