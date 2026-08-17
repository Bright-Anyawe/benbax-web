import type { Metadata } from 'next';
import { Download, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { GEOATTEND_INFO, BENBAX_REQUEST_INFO, BENBAX_DRIVER_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Apps',
  description:
    'Download and test BENBAX mobile apps including GeoAttend attendance, Benbax-request delivery, and Benbax-driver partner app.',
  keywords: ['BENBAX apps', 'GeoAttend download', 'Benbax-request', 'Benbax-driver', 'mobile app testing'],
};

const APPS = [
  {
    name: GEOATTEND_INFO.name,
    apkUrl: GEOATTEND_INFO.apkUrl,
    description:
      'GeoAttend is our geofenced attendance management system built for institutions in Ghana. It combines GPS geofence verification, QR code check-in, and role-based reporting across mobile and web.',
    points: [
      'Secure attendance with JWT, geofence enforcement, and duplicate check-in prevention.',
      'Accurate GPS distance checks and QR scans for staff check-in/check-out.',
    ],
  },
  {
    name: BENBAX_REQUEST_INFO.name,
    apkUrl: BENBAX_REQUEST_INFO.apkUrl,
    description: BENBAX_REQUEST_INFO.description,
    points: [
      'Place and track delivery orders live.',
      'Pay, top up your wallet, and manage your account.',
    ],
  },
  {
    name: BENBAX_DRIVER_INFO.name,
    apkUrl: BENBAX_DRIVER_INFO.apkUrl,
    description: BENBAX_DRIVER_INFO.description,
    points: [
      'Online/offline mode with ride and delivery offers.',
      'Track active jobs, earnings, wallet, and safety features.',
    ],
  },
];

export default function AppsPage() {
  return (
    <Section background="gray">
      <PageHeader
        title="Check Out All Our New Apps"
        description="Download and test the latest BENBAX mobile apps for Android."
      />

      <div className="space-y-8">
        {APPS.map((app, index) => (
          <Reveal
            key={app.name}
            variant="scale"
            delay={index * 100}
            className="overflow-hidden rounded-2xl border border-primary/20 bg-white p-8 shadow-sm md:p-10"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  <Smartphone className="h-4 w-4" />
                  New Mobile App for Testing
                </div>
                <h2 className="mb-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
                  {app.name} APK Is Ready - Download and Test Now
                </h2>
                <p className="mb-5 max-w-3xl text-base text-slate-700 md:text-lg">{app.description}</p>
                <div className="grid grid-cols-1 gap-3 text-slate-700 sm:grid-cols-2">
                  {app.points.map((point) => (
                    <p
                      key={point}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      <MapPin className="mr-2 inline h-4 w-4 text-primary" />
                      {point}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a
                  href={app.apkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-base animate-attention inline-flex items-center justify-center rounded-xl bg-accent-orange px-6 py-4 text-lg font-extrabold text-slate-900 shadow-lg hover:bg-amber-500 focus:ring-accent-orange"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download {app.name} APK
                </a>
                <p className="mt-3 text-center text-sm font-medium text-slate-600">
                  Tap to test the latest Android build
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
