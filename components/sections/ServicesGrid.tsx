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
    <section id="expertise" className="expertise-section bg-white py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Our expertise"
            title="Complexity, made clear."
            subtitle="From your first tax return to your next business milestone, find the specialist support you need."
          />
          {showViewAllButton && (
            <Link
              href="/services"
              className="editorial-text-link text-indigo-800 shrink-0"
            >
              <span>Explore all services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>

        <div data-stagger className="expertise-grid mt-12 grid grid-cols-1 md:grid-cols-2">
          {displayedServices.map((service) => {
            const IconComponent = iconMap[service.icon] || ShieldCheck;
            return (
              <article
                key={service.slug}
                className="service-card group relative flex flex-col justify-between border-t border-borderline bg-white py-8 md:p-8 transition-colors focus-within:ring-2 focus-within:ring-indigo-600"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-brand-gradient group-hover:text-white">
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
