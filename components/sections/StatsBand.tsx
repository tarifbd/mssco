'use client';

import React from 'react';
import { siteConfig } from '@/content/site';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function StatsBand() {
  const { locale } = useLanguage();

  return (
    <section aria-label="Practice Metrics" className="bg-surface border-b border-borderline py-12 sm:py-16">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-borderline bg-white p-6 shadow-indigo transition-transform hover:-translate-y-0.5"
            >
              <div className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight bg-brand-gradient bg-clip-text text-transparent tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 font-heading text-base font-bold text-indigo-950">
                {locale === 'bn' ? stat.labelBn : stat.label}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
