import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

const ServicesPreview = () => {
  const [featured, ...rest] = SERVICES;
  const FeaturedIcon = featured.icon;

  return (
    <Section>
      <Reveal className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Services</h2>
        <p className="mx-auto max-w-3xl text-lg text-slate-600">
          Our core focus starts with Software Development, followed by Recruitment and HR Services, then Restaurant
          Services. We also support selected business operations services for growing companies.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal variant="up" className="lg:col-span-3">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
            <div className="relative h-56 w-full overflow-hidden sm:h-64">
              <Image
                src={featured.image}
                alt={featured.shortTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                <Star className="h-3.5 w-3.5 fill-white" />
                Core Focus
              </span>
              <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <FeaturedIcon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-semibold">{featured.shortTitle}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="mb-5 flex-1 text-slate-600">{featured.description}</p>
              <Link
                href="/services"
                className="inline-flex items-center font-semibold text-primary transition-all duration-300 group-hover:gap-2.5 hover:text-primary-light"
              >
                Explore this service
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {rest.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} variant="up" delay={(index + 1) * 90} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">{service.shortTitle}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={150} className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary-light"
        >
          View all services
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Reveal>
    </Section>
  );
};

export default ServicesPreview;
