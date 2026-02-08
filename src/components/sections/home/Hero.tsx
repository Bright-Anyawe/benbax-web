import Link from 'next/link';
import Container from '@/components/ui/Container';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary pb-24 pt-28 text-white md:pb-28 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.35),transparent_50%)]" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-200">Recruitment and HR Services</p>
          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Your Partner in Strategic Talent Acquisition
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-slate-100 md:text-xl">
            Connecting exceptional talent with leading organizations across Ghana through ethical, professional, and people-first recruitment solutions.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/employers"
              className="btn-base rounded-lg bg-accent-orange px-8 py-4 text-lg text-white hover:bg-orange-600 focus:ring-accent-orange"
            >
              I&apos;m Hiring
            </Link>
            <Link
              href="/careers"
              className="btn-base rounded-lg border-2 border-white px-8 py-4 text-lg text-white hover:bg-white hover:text-primary focus:ring-white"
            >
              I&apos;m Job Seeking
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
