'use client';

import { Phone, X } from 'lucide-react';
import { useState } from 'react';

const CEO_PHONE = '+233 054 6013031';
const CEO_PHONE_HREF = 'tel:+2330546013031';

export default function CeoContactBadge() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <a
        href={CEO_PHONE_HREF}
        aria-label="Call the CEO"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl animate-fade-up"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent-orange animate-ping" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent-orange" />
      </a>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
      {/* Glow ring */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent-orange to-primary opacity-60 blur-md animate-pulse" />

      <div className="relative flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-2xl ring-2 ring-primary/30">
        {/* Dismiss button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Minimize badge"
          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-500 transition-colors hover:bg-slate-300 hover:text-slate-700"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Phone icon */}
        <a
          href={CEO_PHONE_HREF}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform hover:scale-110"
        >
          <Phone className="h-5 w-5" />
        </a>

        {/* Text content */}
        <div className="pr-3">
          <span className="mb-0.5 inline-block rounded-full bg-accent-orange/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-orange">
            CEO Direct Line
          </span>
          <a
            href={CEO_PHONE_HREF}
            className="block text-base font-bold text-slate-900 transition-colors hover:text-primary"
          >
            {CEO_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
