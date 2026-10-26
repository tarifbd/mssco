'use client';

import React from 'react';
import Link from 'next/link';
import {
  Store,
  Factory,
  Ship,
  Laptop,
  HeartHandshake,
  Building,
  Stethoscope,
  GraduationCap,
  Cog,
  Rocket,
  ArrowUpRight,
} from 'lucide-react';
import { industriesList } from '@/content/industries';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Store,
  Factory,
  Ship,
  Laptop,
  HeartHandshake,
  Building,
  Stethoscope,
  GraduationCap,
  Cog,
  Rocket,
};

export function IndustriesStrip() {
  const { locale } = useLanguage();

  return (
    <section className="bg-surface py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Sector Experience"
            title="Industries We Serve Across Bangladesh"
            subtitle="Every sector in Bangladesh faces distinct statutory rules—from RMG export realization and manufacturing Mushak 4.3 cost sheets to IT remittance encashments and NGOAB FD-4 project audits."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-600/30 bg-white px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shrink-0"
          >
            <span>Explore Sector Solutions</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industriesList.map((industry) => {
            const IconComponent = iconMap[industry.icon] || Store;
            return (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className="group flex flex-col justify-between rounded-2xl border border-borderline bg-white p-5 shadow-indigo transition-all hover:-translate-y-0.5 hover:border-indigo-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-indigo-950 group-hover:text-indigo-600">
                    {industry.name}
                  </h3>
                  {locale === 'bn' && (
                    <p className="mt-0.5 font-bengali text-xs font-medium text-indigo-800">
                      {industry.nameBn}
                    </p>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-ink-600 line-clamp-3">
                    {industry.tagline}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  <span>Sector details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
