import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { COMPANY_REPRESENTATIVES } from '@/lib/constants';

const CompanyRepresentatives = () => {
  return (
    <Section>
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Our Team</p>
        <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Company Representatives</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Meet the professionals who represent BENBAX with modern leadership, strong execution, and reliable service.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {COMPANY_REPRESENTATIVES.map((member) => (
          <Card key={member.id} hover className="overflow-hidden p-0">
            <div className="relative h-[460px] w-full bg-slate-100 md:h-[520px]">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary">{member.title}</p>
              <p className="mt-3 text-slate-600">{member.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CompanyRepresentatives;
