'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Calculator,
  Receipt,
  Building2,
  BookOpen,
  Users,
  TrendingUp,
  SearchCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { servicesList, ServiceItem } from '@/content/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Calculator,
  Receipt,
  Building2,
  BookOpen,
  Users,
  TrendingUp,
  SearchCheck,
  Globe,
};

interface ServicesGridProps {
  limit?: number;
  showViewAllButton?: boolean;
}

export function ServicesGrid({ limit, showViewAllButton = true }: ServicesGridProps) {
  const { locale, t } = useLanguage();
  const displayedServices: ServiceItem[] = limit ? servicesList.slice(0, limit) : servicesList;

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Practice Taxonomy"
            title="Comprehensive Chartered Accountancy & Advisory Services"
            subtitle="Structured around Bangladesh’s statutory frameworks—from annual ISA audits and NBR tax/VAT representation to RJSC/BIDA corporate compliance and financial modelling."
          />
          {showViewAllButton && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-600/30 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shrink-0"
            >
              <span>View All 9 Practice Areas</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;
            return (
              <article
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-borderline bg-white p-7 shadow-indigo transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-indigo-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-indigo-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="font-heading text-xs font-bold tracking-widest text-ink-600 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors">
                    <Link
                      href={`/services/${service.slug}`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </Link>
                  </h3>

                  {locale === 'bn' && (
                    <p className="mt-1 font-bengali text-xs font-semibold text-indigo-800">
                      {service.titleBn}
                    </p>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-borderline flex items-center justify-between text-sm font-semibold text-indigo-600">
                  <span>{t.learnMore}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
