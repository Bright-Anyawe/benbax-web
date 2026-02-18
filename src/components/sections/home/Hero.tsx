import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, MapPin, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#14581C_0%,#2EBC3B_52%,#35C3D8_100%)] pb-20 pt-28 text-white md:pb-24 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,180,0,0.28),transparent_48%)]" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="max-w-3xl">
            <p className="mb-4 animate-fade-up text-sm font-semibold uppercase tracking-wider text-amber-100">
              Software | Recruitment | Restaurant | Transport | Construction | Marketing | Trade
            </p>
            <h1 className="mb-6 animate-fade-up [animation-delay:120ms] text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Building Software, Teams, and Business Solutions in Ghana
            </h1>
            <p className="mb-8 max-w-2xl animate-fade-up [animation-delay:220ms] text-lg text-slate-100 md:text-xl">
              From custom software development to recruitment, restaurant services, transportation, construction,
              marketing, and import/export — we deliver multi-sector solutions for businesses and communities across Ghana.
            </p>

            <div className="mb-8 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
              <div className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm [animation-delay:320ms]">
                <CheckCircle2 className="h-4 w-4 text-amber-200" />
                Multi-sector business solutions
              </div>
              <div className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm [animation-delay:380ms]">
                <MapPin className="h-4 w-4 text-amber-200" />
                Proudly serving Ghana
              </div>
            </div>

            <div className="flex animate-fade-up flex-col gap-4 [animation-delay:440ms] sm:flex-row">
              <Link
                href="/employers"
                className="btn-base rounded-xl bg-accent-orange px-8 py-4 text-lg text-slate-900 shadow-lg shadow-amber-500/25 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
              >
                I&apos;m Hiring
              </Link>
              <Link
                href="/careers"
                className="btn-base rounded-xl border-2 border-white px-8 py-4 text-lg text-white hover:bg-white hover:text-primary focus:ring-white"
              >
                I&apos;m Job Seeking
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-fade-up [animation-delay:300ms]">
            <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-3 shadow-2xl shadow-slate-900/25 backdrop-blur-sm">
              <Image
                src="/images/RP.jpg"
                alt="Ghanaian software professional working at a modern coding workstation"
                width={540}
                height={304}
                className="h-auto w-full rounded-2xl object-contain bg-slate-900/20"
                priority
              />

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/90 p-3 text-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Average shortlist</p>
                  <p className="mt-1 text-xl font-bold">8 Days</p>
                </div>
                <div className="rounded-xl bg-white/90 p-3 text-slate-900">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">12-Month retention</p>
                  <p className="mt-1 text-xl font-bold">91%</p>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-6 hidden animate-float-slow rounded-xl border border-white/35 bg-white/15 p-3 text-sm text-slate-100 shadow-lg backdrop-blur-sm md:block">
              <span className="inline-flex items-center gap-2 font-semibold">
                <TrendingUp className="h-4 w-4 text-amber-200" />
                Growth-ready hiring pipeline
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
