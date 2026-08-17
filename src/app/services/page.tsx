import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Reveal from '@/components/ui/Reveal';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore BENBAX LIMITED COMPANY services including software development, recruitment and HR, restaurant services, transportation, construction, marketing, and import/export.',
  keywords: [
    'software development Ghana',
    'recruitment and HR services',
    'restaurant services',
    'transportation services Ghana',
    'construction services Ghana',
    'marketing services Ghana',
    'import export services Ghana',
  ],
};

export default function ServicesPage() {
  return (
    <Section>
      <PageHeader
        title="Our Services"
        description="We deliver professional services across software, people, hospitality, logistics, construction, marketing, and international trade."
      />

      <div className="space-y-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          const imageOnRight = index % 2 === 1;
          return (
            <Reveal key={service.id} variant={imageOnRight ? 'right' : 'up'} delay={Math.min(index, 3) * 80}>
              <Card hover className="grid grid-cols-1 overflow-hidden p-0 lg:grid-cols-5">
                <div
                  className={`relative h-56 w-full lg:col-span-2 lg:h-full lg:min-h-[280px] ${imageOnRight ? 'lg:order-2' : ''}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className={`p-7 lg:col-span-3 ${imageOnRight ? 'lg:order-1' : ''}`}>
                  <div className="mb-5 flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="mb-2 text-2xl font-semibold text-slate-900">{service.title}</h2>
                      <p className="text-slate-700">{service.details}</p>
                    </div>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-primary">Key Benefits</h3>
                  <ul className="grid grid-cols-1 gap-2 text-slate-700 md:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="rounded-md bg-slate-50 px-3 py-2 transition-colors duration-300 hover:bg-primary-50">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
