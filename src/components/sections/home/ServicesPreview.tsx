import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const ServicesPreview = () => {
  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          We deliver professional services across software, people, hospitality, logistics, construction, marketing, and
          international trade.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} hover className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative h-40 w-full shrink-0">
                <Image
                  src={service.image}
                  alt={service.shortTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.shortTitle}</h3>
                <p className="mb-5 flex-grow text-slate-600">{service.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary-light"
        >
          View all services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
};

export default ServicesPreview;
