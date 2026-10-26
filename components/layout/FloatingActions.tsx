'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { useLanguage } from './LanguageProvider';

export function FloatingActions() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Assalamu Alaikum / Hello ${siteConfig.firmName}, I would like to enquire about your Chartered Accountancy services.`
  )}`;

  return (
    <>
      {/* Floating WhatsApp Quick-Chat Button (Bottom-Right, lifted above mobile bar on small screens) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Consultation"
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 inline-flex items-center gap-2.5 rounded-full bg-indigo-950 border-2 border-violet-500 px-4 py-3 text-xs sm:text-sm font-semibold text-white shadow-indigo-lg transition-transform hover:-translate-y-0.5 hover:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
      >
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
        <MessageSquare className="h-4 w-4 text-violet-100" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp Consultation</span>
      </a>

      {/* Mobile Bottom Sticky Action Bar ("Call / WhatsApp / Enquire") */}
      <div
        role="region"
        aria-label="Quick Contact Actions"
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-borderline bg-white/95 backdrop-blur-md px-3 py-2 shadow-header md:hidden"
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-borderline bg-surface py-2.5 text-xs font-bold text-indigo-950 transition-colors hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            <Phone className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.callNow}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-50 py-2.5 text-xs font-bold text-indigo-800 transition-colors hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            <MessageSquare className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
            <span>{t.whatsapp}</span>
          </a>

          <Link
            href="/contact#enquiry-form"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-gradient py-2.5 text-xs font-bold text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.enquire}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
