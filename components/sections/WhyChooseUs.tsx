'use client';

import React from 'react';
import {
  UserCheck,
  Clock,
  ShieldCheck,
  FileCheck2,
  Scale,
  Compass,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck,
  Clock,
  ShieldCheck,
  FileCheck2,
  Scale,
  Compass,
};

export function WhyChooseUs() {
  const { locale } = useLanguage();

  return (
    <section className="bg-surface py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Choose Our Practice"
          title="Partner-Level Accountability Meets Technical Precision"
          subtitle="Businesses and individual taxpayers choose a Chartered Accountancy proprietorship when they want direct access to the Principal CA, clear written advice, and disciplined compliance without institutional bureaucracy."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.whyChooseUs.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-borderline bg-white p-7 shadow-indigo transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-600/80 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-indigo-950">
                  {item.title}
                </h3>
                {locale === 'bn' && (
                  <p className="mt-0.5 font-bengali text-xs font-semibold text-indigo-800">
                    {item.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
