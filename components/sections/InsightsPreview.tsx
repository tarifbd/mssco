'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { insightsArticles } from '@/content/insights';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function InsightsPreview() {
  const { locale } = useLanguage();
  const previewArticles = insightsArticles.slice(0, 3);

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Insights & Regulatory Guides"
            title="Practical Tax, VAT & Compliance Briefings"
            subtitle="Clear, plain-language guidance on Bangladesh’s Income Tax Act 2023, VAT & SD Act 2012, RJSC incorporation procedures, and statutory audit readiness."
          />
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-600/30 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-800 transition-colors hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 shrink-0"
          >
            <span>View All Guides &amp; Tax Calendar</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {previewArticles.map((article) => (
            <article
              key={article.slug}
              className="group relative flex flex-col justify-between rounded-2xl border border-borderline bg-surface p-7 shadow-indigo transition-all hover:-translate-y-1 hover:bg-white hover:border-indigo-500/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="rounded-full bg-violet-100 px-3 py-1 font-semibold text-indigo-800">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-ink-600 tabular-nums">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h3>

                {locale === 'bn' && (
                  <p className="mt-1 font-bengali text-xs font-medium text-indigo-800">
                    {article.titleBn}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-borderline flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span className="inline-flex items-center gap-1.5 text-ink-600 tabular-nums">
                  <Calendar className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                  {article.publishedDate}
                </span>
                <span className="inline-flex items-center gap-1 text-indigo-600">
                  Read Briefing
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
