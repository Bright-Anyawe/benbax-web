'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} aria-hidden="true" />

      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl lg:hidden">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 transition-colors hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                        isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-100',
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t p-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-base w-full rounded-lg bg-accent-orange px-8 py-4 text-lg text-white hover:bg-orange-600 focus:ring-accent-orange"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
