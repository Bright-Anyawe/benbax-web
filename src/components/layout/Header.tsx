'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Download, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GEOATTEND_INFO, NAV_LINKS } from '@/lib/constants';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';

const PRIMARY_NAV = NAV_LINKS.filter(link =>
  ['/', '/about', '/services', '/careers', '/employers', '/faq', '/contact'].includes(link.href)
);

const MORE_LINKS = NAV_LINKS.filter(link =>
  ['/why-choose-us', '/testimonials', '/restaurant'].includes(link.href)
);

const NavDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isAnyActive = MORE_LINKS.some(link => pathname === link.href);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'group relative flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-primary',
          isAnyActive ? 'text-primary' : 'text-slate-700',
        )}
      >
        More
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
        <span
          className={cn(
            'absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300',
            isAnyActive ? 'w-full' : 'w-0 group-hover:w-full',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-56 origin-top-right animate-fade-in rounded-xl border border-slate-200 bg-white py-2 shadow-xl"
          role="menu"
        >
          {MORE_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-5 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary',
                )}
                role="menuitem"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isTopState = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b transition-all duration-300',
          isTopState
            ? 'border-white/75 bg-white/90 backdrop-blur-xl shadow-[0_10px_36px_-24px_rgba(46,188,59,0.75)]'
            : 'border-slate-200 bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.45)]'
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo className="transition-transform duration-300 hover:scale-[1.01]" />

          <nav className="hidden items-center space-x-6 xl:flex">
            {PRIMARY_NAV.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group relative text-sm font-semibold tracking-wide text-slate-700 transition-colors duration-300 hover:text-primary',
                    isActive && 'text-primary',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-2 left-0 h-0.5 rounded-full bg-primary transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <NavDropdown />
          </nav>

          <a
            href={GEOATTEND_INFO.apkUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-base relative hidden animate-bounce rounded-xl bg-accent-orange px-6 py-3 text-base text-slate-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange [animation-duration:2.4s] xl:inline-flex"
          >
            <span className="absolute -top-2 -right-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
              New
            </span>
            Download {GEOATTEND_INFO.name}
            <Download className="ml-2 h-4 w-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              'rounded-lg p-2 transition-colors xl:hidden',
              'text-slate-700 hover:bg-slate-100',
            )}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;