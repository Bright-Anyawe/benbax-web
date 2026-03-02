import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Inbox, Phone } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import Logo from '../common/Logo';
import { formatMailto, formatTel } from '@/lib/utils';

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
            <Logo theme="dark" size="compact" className="mb-4" />
            <p className="text-sm text-slate-400 mb-4">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-sm text-slate-400">
              {COMPANY_INFO.description}
            </p>
            <div className="mt-4 flex items-center space-x-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {SOCIAL_LINKS.tiktok && (
                <a
                  href={SOCIAL_LINKS.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52V6.79a4.83 4.83 0 0 1-1-.1z" />
                  </svg>
                </a>
              )}
            </div>
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
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href={formatTel(COMPANY_INFO.phone)}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <a
                    href={formatTel(COMPANY_INFO.phoneAlt)}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {COMPANY_INFO.phoneAlt}
                  </a>
                  <a
                    href={formatTel(COMPANY_INFO.restaurantPhone)}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Restaurant: {COMPANY_INFO.restaurantPhone}
                  </a>
                </div>
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
              Powered by Benbax software developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
