'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

const CLOSE_ANIMATION_MS = 260;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setIsClosing(false);
      return;
    }

    if (!isMounted) return;

    setIsClosing(true);
    const timeout = setTimeout(() => {
      setIsMounted(false);
      setIsClosing(false);
    }, CLOSE_ANIMATION_MS);

    return () => clearTimeout(timeout);
  }, [isOpen, isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[2px] xl:hidden',
          isClosing ? 'animate-fade-out' : 'animate-fade-in'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-hidden bg-white shadow-2xl xl:hidden',
          isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-primary">Menu</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-200"
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
                        'block rounded-xl px-4 py-3 text-lg font-medium transition-all duration-300',
                        isActive
                          ? 'bg-primary text-white shadow-lg shadow-primary/20'
                          : 'text-slate-700 hover:translate-x-1 hover:bg-slate-100',
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
              href="/apps"
              onClick={onClose}
              className="btn-base relative w-full animate-attention rounded-xl bg-accent-orange px-8 py-4 text-lg text-slate-900 shadow-lg shadow-amber-500/20 hover:bg-amber-500 hover:text-slate-900 focus:ring-accent-orange"
            >
              <span className="absolute -top-2 -right-2 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white">
                New
              </span>
              <span className="inline-flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Check Out All Our New Apps
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
