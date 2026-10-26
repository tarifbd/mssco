import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/content/site';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export function CtaBanner({
  title = 'Ready to Bring Clarity to Your Audit, Tax & Regulatory Compliance?',
  subtitle = `Schedule a confidential initial consultation with ${siteConfig.ownerName} (${siteConfig.ownerCredentials}) to discuss your organisation’s statutory requirements or personal tax filing.`,
}: CtaBannerProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-8 sm:p-12 lg:p-14 text-white shadow-indigo-lg">
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-white">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>Confidential Consultation • {siteConfig.firmName}</span>
              </div>
              <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-indigo-50">
                {subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:items-end">
              <Link
                href="/contact#enquiry-form"
                className="inline-flex w-full sm:w-auto lg:w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-indigo-950 shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-800"
              >
                <span>Submit an Enquiry</span>
                <ArrowRight className="h-4 w-4 text-indigo-600" aria-hidden="true" />
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="inline-flex w-full sm:w-auto lg:w-full items-center justify-center gap-2 rounded-xl border border-white/35 bg-indigo-950/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-950/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">Call {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
