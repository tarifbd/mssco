import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Info,
  ArrowLeft,
  ArrowRight,
  UserCheck,
} from 'lucide-react';
import { insightsArticles, getInsightBySlug } from '@/content/insights';
import { getServiceBySlug } from '@/content/services';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { CtaBanner } from '@/components/sections/CtaBanner';

interface InsightDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: InsightDetailPageProps): Metadata {
  const article = getInsightBySlug(params.slug);
  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
  };
}

export default function InsightDetailPage({ params }: InsightDetailPageProps) {
  const article = getInsightBySlug(params.slug);
  if (!article) {
    notFound();
  }

  const relatedService = getServiceBySlug(article.relatedServiceSlug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Person',
      name: `${siteConfig.ownerName}, ${siteConfig.ownerCredentials}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.firmName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Article Header */}
      <section className="bg-surface pt-10 pb-14 sm:pt-14 sm:pb-16 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Insights & Resources', href: '/insights' },
              { label: article.title, href: `/insights/${article.slug}` },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="rounded-full bg-violet-100 px-3.5 py-1 text-indigo-800">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-ink-600 tabular-nums">
                <Calendar className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                {article.publishedDate}
              </span>
              <span className="inline-flex items-center gap-1 text-ink-600 tabular-nums">
                <Clock className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              {article.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-borderline text-xs text-ink-600">
              <UserCheck className="h-4 w-4 text-indigo-600 shrink-0" aria-hidden="true" />
              <span>
                Reviewed by <strong className="text-indigo-950">{siteConfig.ownerName}</strong> ({siteConfig.ownerCredentials}), {siteConfig.firmName}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-14 sm:py-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Informational-Only Notice */}
              <div className="flex items-start gap-3 rounded-xl border border-indigo-500/30 bg-indigo-50/60 p-4 text-xs sm:text-sm text-ink-900">
                <Info className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  <strong>Informational Guidance Only:</strong> This briefing is prepared for general educational reference and does not constitute formal tax, audit, or legal advice. Always verify current rates, exemptions, and deadlines with official NBR/RJSC notifications.
                </p>
              </div>

              {/* Key Takeaways Box */}
              <div className="rounded-2xl border border-borderline bg-surface p-6 sm:p-8 shadow-indigo">
                <h2 className="font-heading text-lg font-extrabold uppercase tracking-wider text-indigo-950">
                  Executive Summary &amp; Key Takeaways
                </h2>
                <ul className="mt-4 space-y-3">
                  {article.keyTakeaways.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-ink-900">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Sections */}
              <div className="space-y-10">
                {article.sections.map((sec) => (
                  <div key={sec.heading}>
                    <h2 className="font-heading text-2xl font-extrabold text-indigo-950">
                      {sec.heading}
                    </h2>
                    <div className="mt-3 space-y-4 text-base leading-relaxed text-ink-600">
                      {sec.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    {sec.bullets && (
                      <ul className="mt-5 space-y-2.5 rounded-xl border border-borderline bg-surface p-5 text-sm sm:text-base text-ink-900">
                        {sec.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-1" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-borderline flex items-center justify-between">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Back to All Insights &amp; Checklists</span>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {relatedService && (
                <div className="rounded-2xl border border-indigo-500/30 bg-surface p-6 shadow-indigo">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Related Practice Area
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-indigo-950">
                    {relatedService.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-600">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>Explore {relatedService.title} deliverables</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )}

              <div className="rounded-2xl bg-indigo-950 p-6 text-white shadow-indigo-lg">
                <h3 className="font-heading text-lg font-bold">
                  Need Tailored Advice for Your Organisation?
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-indigo-50/85">
                  Book a confidential consultation with {siteConfig.ownerName} to review your specific tax, VAT, or corporate compliance situation.
                </p>
                <Link
                  href="/contact#enquiry-form"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-xs font-bold text-white"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
