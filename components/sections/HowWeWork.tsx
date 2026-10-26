'use client';

import React from 'react';
import { siteConfig } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function HowWeWork() {
  const { locale } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-borderline">
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Methodology"
          title="How We Work: A Structured 4-Stage Engagement Model"
          subtitle="Inspired by global advisory standards and adapted for Bangladeshi regulatory timelines, every engagement follows a predictable, documented workflow from initial diagnosis to final filing."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {siteConfig.methodology.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-borderline bg-surface p-7 shadow-indigo"
            >
              <div>
                <div className="flex items-center justify-between border-b border-borderline pb-4">
                  <span className="font-heading text-3xl font-extrabold bg-brand-gradient bg-clip-text text-transparent tabular-nums">
                    {step.step}
                  </span>
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-800">
                    Stage {step.step}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-xl font-bold text-indigo-950">
                  {step.title}
                </h3>
                {locale === 'bn' && (
                  <p className="mt-0.5 font-bengali text-xs font-semibold text-indigo-800">
                    {step.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {step.summary}
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-indigo-500/20 bg-white p-3.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                  Key Output
                </p>
                <p className="mt-1 text-xs font-semibold text-indigo-950">
                  {step.deliverable}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
