import React from 'react';
import type { Metadata } from 'next';
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
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Compass,
} from 'lucide-react';
import { industriesList } from '@/content/industries';
import { servicesList } from '@/content/services';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'Industries Served Across Bangladesh',
  description: `Specialized audit, NBR tax, VAT, and corporate compliance solutions across 10 key sectors in Bangladesh: SMEs, RMG/Textile, Import-Export, IT & Freelancers, NGOs, Real Estate, Healthcare, Education, Manufacturing, and Startups.`,
  alternates: {
    canonical: '/industries',
  },
};

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

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Industries Served', href: '/industries' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <Compass className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>10 Sector Specializations in Bangladesh</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
              Industry-Specific Regulatory &amp; Financial Expertise
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600">
              Taxation, VAT input-output rules, and audit risk profiles differ dramatically between an RMG exporter, a software freelancer, an NGOAB-registered NGO, and a commercial importer. Explore how {siteConfig.firmName} supports your sector.
            </p>
          </div>

          {/* Anchor Jump Pills */}
          <nav
            aria-label="Sector Anchor Navigation"
            className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-borderline"
          >
            {industriesList.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="rounded-xl border border-borderline bg-white px-3.5 py-2 text-xs font-semibold text-indigo-950 shadow-sm transition-colors hover:border-indigo-600 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
              >
                {ind.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* 10 Anchor Industry Sections */}
      <section className="bg-white py-14 sm:py-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6 space-y-12">
          {industriesList.map((industry, index) => {
            const IconComponent = iconMap[industry.icon] || Store;
            const relatedServices = servicesList.filter((s) =>
              industry.relatedServiceSlugs.includes(s.slug)
            );

            return (
              <article
                key={industry.id}
                id={industry.id}
                className="scroll-mt-28 rounded-2xl border border-borderline bg-surface p-6 sm:p-8 lg:p-10 shadow-indigo"
              >
                <div className="flex flex-col justify-between gap-4 border-b border-borderline pb-6 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                        <span className="tabular-nums">Sector {String(index + 1).padStart(2, '0')}</span>
                        <span>•</span>
                        <span>Bangladesh Market Practice</span>
                      </div>
                      <h2 className="mt-1 font-heading text-2xl font-extrabold text-indigo-950 sm:text-3xl">
                        {industry.name}
                      </h2>
                    </div>
                  </div>

                  <Link
                    href="/contact#enquiry-form"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-950 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-indigo-800 shrink-0 self-start lg:self-center"
                  >
                    <span>Enquire for {industry.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <p className="mt-6 text-base leading-relaxed text-ink-600">
                  {industry.overview}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Sector Challenges */}
                  <div className="rounded-xl border border-borderline bg-white p-5">
                    <h3 className="flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-wider text-indigo-950">
                      <AlertTriangle className="h-4 w-4 text-violet-600" aria-hidden="true" />
                      <span>Typical Regulatory &amp; Finance Challenges</span>
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-sm text-ink-600">
                      {industry.keyChallenges.map((challenge) => (
                        <li key={challenge} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-600 shrink-0" aria-hidden="true" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How We Help */}
                  <div className="rounded-xl border border-indigo-500/25 bg-white p-5">
                    <h3 className="flex items-center gap-2 font-heading text-sm font-extrabold uppercase tracking-wider text-indigo-950">
                      <CheckCircle2 className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                      <span>How Our Practice Supports You</span>
                    </h3>
                    <ul className="mt-3.5 space-y-2.5 text-sm text-ink-900">
                      {industry.howWeHelp.map((help) => (
                        <li key={help} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{help}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Related Services Pills */}
                <div className="mt-6 pt-5 border-t border-borderline flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-600 mr-1">
                    Relevant Practice Areas:
                  </span>
                  {relatedServices.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-1 rounded-lg border border-indigo-500/25 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-800 hover:bg-violet-100 transition-colors"
                    >
                      <span>{srv.title}</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
