import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Download, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import Hero from '@/components/sections/home/Hero';
import ServicesPreview from '@/components/sections/home/ServicesPreview';
import TrustMetrics from '@/components/sections/home/TrustMetrics';
import CaseStudies from '@/components/sections/home/CaseStudies';
import ValueProposition from '@/components/sections/home/ValueProposition';
import FaqSection from '@/components/sections/home/FaqSection';
import CompanyRepresentatives from '@/components/sections/home/CompanyRepresentatives';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { COMPANY_INFO, GEOATTEND_INFO, BENBAX_REQUEST_INFO, BENBAX_DRIVER_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'BENBAX LIMITED COMPANY delivers software development, recruitment and HR services, and restaurant services in Ghana. Download the GeoAttend APK for testing.',
  keywords: ['software development Ghana', 'recruitment and HR services', 'restaurant services', 'BENBAX'],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TrustMetrics />
      <ValueProposition />
      <CompanyRepresentatives />
      <CaseStudies />
      <FaqSection />

      <Section background="gray">
        <Reveal variant="scale" className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-50 via-white to-amber-50 p-8 shadow-sm md:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
            <Smartphone className="h-4 w-4" />
            New Mobile App for Testing
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                {GEOATTEND_INFO.name} APK Is Ready - Download and Test Now
              </h2>
              <p className="mb-5 max-w-3xl text-lg text-slate-700">
                GeoAttend is our geofenced attendance management system built for institutions in Ghana. It combines GPS
                geofence verification, QR code check-in, and role-based reporting across mobile and web.
              </p>
              <div className="mb-6 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <ShieldCheck className="mr-2 inline h-4 w-4 text-primary" />
                  Secure attendance with JWT, geofence enforcement, and duplicate check-in prevention.
                </p>
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <MapPin className="mr-2 inline h-4 w-4 text-primary" />
                  Accurate GPS distance checks and QR scans for staff check-in/check-out.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <a
                href={GEOATTEND_INFO.apkUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-base animate-attention inline-flex items-center justify-center rounded-xl bg-accent-orange px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg hover:bg-amber-500 focus:ring-accent-orange"
              >
                <Download className="mr-2 h-5 w-5" />
                Download {GEOATTEND_INFO.name} APK
              </a>
              <p className="mt-3 text-center text-sm font-medium text-slate-600">Tap to test the latest Android build</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section background="white">
        <Reveal variant="scale" className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-amber-50 via-white to-primary-50 p-8 shadow-sm md:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
            <Smartphone className="h-4 w-4" />
            New Mobile App for Testing
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                {BENBAX_REQUEST_INFO.name} APK Is Ready - Download and Test Now
              </h2>
              <p className="mb-5 max-w-3xl text-lg text-slate-700">{BENBAX_REQUEST_INFO.description}</p>
              <div className="mb-6 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <MapPin className="mr-2 inline h-4 w-4 text-primary" />
                  Place and track delivery orders live.
                </p>
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <ShieldCheck className="mr-2 inline h-4 w-4 text-primary" />
                  Pay, top up your wallet, and manage your account.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <a
                href={BENBAX_REQUEST_INFO.apkUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-base animate-attention inline-flex items-center justify-center rounded-xl bg-accent-orange px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg hover:bg-amber-500 focus:ring-accent-orange"
              >
                <Download className="mr-2 h-5 w-5" />
                Download {BENBAX_REQUEST_INFO.name} APK
              </a>
              <p className="mt-3 text-center text-sm font-medium text-slate-600">Tap to test the latest Android build</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section background="white">
        <Reveal variant="scale" className="overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-50 via-white to-amber-50 p-8 shadow-sm md:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
            <Smartphone className="h-4 w-4" />
            New Mobile App for Testing
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="mb-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                {BENBAX_DRIVER_INFO.name} APK Is Ready - Download and Test Now
              </h2>
              <p className="mb-5 max-w-3xl text-lg text-slate-700">{BENBAX_DRIVER_INFO.description}</p>
              <div className="mb-6 grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <MapPin className="mr-2 inline h-4 w-4 text-primary" />
                  Online/offline mode with ride and delivery offers.
                </p>
                <p className="rounded-lg border border-slate-200 bg-white p-3 text-sm transition-shadow duration-300 hover:shadow-md">
                  <ShieldCheck className="mr-2 inline h-4 w-4 text-primary" />
                  Track active jobs, earnings, wallet, and safety features.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <a
                href={BENBAX_DRIVER_INFO.apkUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-base animate-attention inline-flex items-center justify-center rounded-xl bg-accent-orange px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg hover:bg-amber-500 focus:ring-accent-orange"
              >
                <Download className="mr-2 h-5 w-5" />
                Download {BENBAX_DRIVER_INFO.name} APK
              </a>
              <p className="mt-3 text-center text-sm font-medium text-slate-600">Tap to test the latest Android build</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <Reveal variant="right">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Built on Integrity, Focused on People</h2>
            <p className="mb-4 text-slate-600">
              {COMPANY_INFO.shortName} delivers software, recruitment, and restaurant services grounded in ethical
              practices, practical execution, and professional standards.
            </p>
            <p className="mb-6 text-slate-600">
              We work with both growing businesses and individual professionals to create sustainable employment outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="btn-base rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary-light focus:ring-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="btn-base rounded-lg border-2 border-primary px-6 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl bg-primary-50 p-8 transition-shadow duration-300 hover:shadow-lg">
            <h3 className="mb-3 text-2xl font-semibold text-primary-dark">Ready to work with us?</h3>
            <p className="mb-6 text-slate-700">
              Whether you need a software solution, workforce support, or restaurant service partnership, our team is
              ready to support your next step.
            </p>
            <Link
              href="/contact"
              className="btn-base rounded-lg bg-accent-orange px-6 py-3 text-slate-900 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
            >
              Start a conversation
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
              <MapPin className="h-4 w-4" />
              Office Location
            </p>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">Meet Us in {COMPANY_INFO.location}</h2>
            <p className="mb-5 text-slate-600">
              Visit our office for consultations, interview support, and hiring strategy sessions. Use the live map for
              real-time directions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-base rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-light focus:ring-primary"
              >
                Contact Us
              </Link>
              <a
                href={COMPANY_INFO.mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-base rounded-lg border border-primary px-5 py-3 text-primary hover:bg-primary hover:text-white focus:ring-primary"
              >
                Open in Google Maps
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="BENBAX location map"
              src={COMPANY_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full border-0 md:h-[360px]"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}

