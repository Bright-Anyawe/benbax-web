import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import Section from '@/components/ui/Section';
import { COMPANY_INFO, COMPANY_REPRESENTATIVES } from '@/lib/constants';
import { formatTel } from '@/lib/utils';

const CompanyRepresentatives = () => {
  return (
    <Section>
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Our Team</p>
        <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Meet the Team</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          Dedicated professionals driving innovation and service excellence across every BENBAX division.
        </p>
      </div>

      {/* Team Members - Circular Images */}
      <div className="mx-auto mb-14 flex max-w-5xl flex-wrap items-start justify-center gap-x-12 gap-y-10">
        {COMPANY_REPRESENTATIVES.map((member) => (
          <div key={member.id} className="group flex w-64 flex-col items-center text-center">
            {/* Circular Image */}
            <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/10 transition-all duration-500 group-hover:ring-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 md:h-32 md:w-32">
              <Image
                src={member.image}
                alt={member.alt}
                fill
                sizes="128px"
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>

            {/* Name & Title */}
            <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
              {member.title}
            </p>
            <p className="text-sm leading-relaxed text-slate-500">{member.description}</p>
          </div>
        ))}
      </div>

      {/* Address & Contact Bar */}
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-6 py-5 shadow-sm md:flex-nowrap md:px-8">
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Visit Us</p>
              <p className="text-sm font-medium text-slate-800">{COMPANY_INFO.location}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 md:block" aria-hidden="true" />

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm font-medium text-slate-800 transition-colors hover:text-primary"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-slate-200 md:block" aria-hidden="true" />

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary">
              <Phone className="h-4 w-4" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Call Us</p>
              <a
                href={formatTel(COMPANY_INFO.phone)}
                className="text-sm font-medium text-slate-800 transition-colors hover:text-primary"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CompanyRepresentatives;
