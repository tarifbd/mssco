import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  ArrowRight,
  Info,
  FileCheck,
} from 'lucide-react';
import { insightsArticles } from '@/content/insights';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TaxCalendarWidget } from '@/components/sections/TaxCalendarWidget';
import { ChecklistDownloader } from '@/components/sections/ChecklistDownloader';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Insights, Tax Calendar & Compliance Checklists (Bangladesh)',
  description: `Practical guides on Individual Income Tax Returns, SME VAT compliance (Mushak 9.1), RJSC company incorporation, statutory audit readiness, and freelancer remittance tax rules in Bangladesh.`,
  alternates: {
    canonical: '/insights',
  },
};

export default function InsightsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-surface pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Insights & Resources', href: '/insights' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <BookOpen className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>Knowledge Hub • Bangladesh Tax, VAT &amp; Corporate Law</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
              Insights, Compliance Calendar &amp; Practical Checklists
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600">
              Plain-language briefings prepared by {siteConfig.firmName} to help business owners, finance teams, and individual taxpayers navigate statutory filings in Bangladesh.
            </p>
          </div>

          {/* Mandatory Visible Informational-Only Disclaimer Banner */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-indigo-500/30 bg-white p-4 sm:p-5 text-xs sm:text-sm text-ink-900 shadow-sm">
            <Info className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="font-bold text-indigo-950">
                Informational Only — Not Professional Advice:
              </strong>{' '}
              The articles, checklists, and compliance dates on this page provide general guidance based on Bangladesh statutes and are not a substitute for formal professional audit, tax, or legal advice tailored to your specific circumstances. Always verify current provisions with official NBR, RJSC, BIDA, and FRC notifications or consult a Chartered Accountant.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Original Sample Articles Grid */}
      <section className="bg-white py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionHeader
            eyebrow="Compliance Briefings"
            title="6 Essential Guides for Taxpayers & Businesses in Bangladesh"
            subtitle="Explore our structured primers covering individual tax returns, SME VAT management, RJSC company registration, statutory audit readiness, IT/freelancer remittance rules, and bookkeeping controls."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insightsArticles.map((article) => (
              <article
                key={article.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-borderline bg-surface p-7 shadow-indigo transition-all hover:-translate-y-1 hover:bg-white hover:border-indigo-500/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="rounded-full bg-violet-100 px-3 py-1 font-bold text-indigo-800">
                      {article.category}
                    </span>
                    <span className="text-ink-600 font-medium tabular-nums">
                      {article.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-5 font-heading text-xl font-bold text-indigo-950 group-hover:text-indigo-600 transition-colors">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-borderline flex items-center justify-between text-xs font-bold text-indigo-600">
                  <span className="inline-flex items-center gap-1.5 text-ink-600 tabular-nums">
                    <Calendar className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                    {article.publishedDate}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Read Full Guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bangladesh Tax & Compliance Calendar Widget */}
      <section className="bg-surface py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <TaxCalendarWidget />
        </div>
      </section>

      {/* Downloadable / Printable Checklists Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <FileCheck className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>Ready-to-Use Preparation Tools</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-indigo-950 sm:text-4xl">
              Downloadable &amp; Printable Compliance Checklists
            </h2>
            <p className="mt-2 max-w-2xl text-base text-ink-600">
              Review, print as PDF, or download our structured preparation checklists before your annual tax filing, RJSC incorporation, or statutory audit.
            </p>
          </div>

          <ChecklistDownloader />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
