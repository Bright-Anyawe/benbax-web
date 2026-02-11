import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore BENBAX LIMITED COMPANY recruitment services including permanent staffing, contract staffing, executive search, RPO, and career advisory.',
  keywords: ['staffing solutions Ghana', 'executive search Ghana', 'RPO services', 'career advisory'],
};

export default function ServicesPage() {
  return (
    <Section>
      <PageHeader
        title="Recruitment and HR Services"
        description="Five focused service areas designed to help employers hire effectively and help candidates grow professionally."
      />

      <div className="space-y-6">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} className="p-7">
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
                  <li key={benefit} className="rounded-md bg-slate-50 px-3 py-2">
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

