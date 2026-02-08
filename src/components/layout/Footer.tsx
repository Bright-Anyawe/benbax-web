import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Inbox } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import Logo from '../common/Logo';
import { formatMailto } from '@/lib/utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAV_LINKS.filter(link =>
    ['/', '/about', '/services', '/contact'].includes(link.href)
  );

  const forJobSeekers = [
    { href: '/careers', label: 'Job Opportunities' },
    { href: '/careers#how-we-help', label: 'How We Help' },
    { href: '/careers#process', label: 'Application Process' },
  ];

  const forEmployers = [
    { href: '/employers', label: 'Partner With Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
  ];

  return (
    <footer className="bg-primary-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <Logo textColor="text-white" className="mb-4" />
            <p className="text-sm text-slate-400 mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-slate-400">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Job Seekers & Employers */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">For Job Seekers</h3>
            <ul className="space-y-2 mb-6">
              {forJobSeekers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-lg mb-4">For Employers</h3>
            <ul className="space-y-2">
              {forEmployers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400">
                  <div>{COMPANY_INFO.location}</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Inbox className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400">
                  {COMPANY_INFO.poBox}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <a
                  href={formatMailto(COMPANY_INFO.email)}
                  className="text-sm text-slate-400 hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 text-center md:text-right">
              Powered by Excellence, Integrity & Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
