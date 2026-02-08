'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import Logo from '../common/Logo';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const headerBackground = isHomePage && !isScrolled ? 'bg-transparent' : 'bg-white shadow-sm';
  const textColor = isHomePage && !isScrolled ? 'text-white' : 'text-slate-700';
  const logoColor = isHomePage && !isScrolled ? 'text-white' : 'text-primary';

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-30 transition-all duration-300', headerBackground)}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo textColor={logoColor} />

          <nav className="hidden items-center space-x-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    isActive ? 'text-primary' : textColor,
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="btn-base hidden rounded-lg bg-accent-orange px-6 py-3 text-base text-white hover:bg-orange-600 focus:ring-accent-orange lg:inline-flex"
          >
            Get Started
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              isHomePage && !isScrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100',
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
