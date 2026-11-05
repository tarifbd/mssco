'use client';

import React from 'react';
import { TeamPortrait } from '@/components/ui/TeamPortrait';
import {
  Users,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function TeamHierarchySection() {
  const { locale } = useLanguage();
  const { directors, managers } = siteConfig.teamHierarchy;

  return (
    <section
      id="team"
      className="team-section scroll-mt-24 bg-surface py-16 sm:py-24 border-b border-borderline"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Practice Leadership & Team Structure"
          title="The people behind your peace of mind."
          subtitle="Our directors and managers coordinate technical review and day-to-day engagement delivery."
        />

        {/* ===================================================================
            ROW 3: DIRECTOR LEVEL
        =================================================================== */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 rounded-full border border-borderline bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-indigo-950 shadow-sm">
              <Briefcase className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>
                {locale === 'bn' ? 'তৃতীয় স্তর • ডিরেক্টর পর্যায়' : 'Row 03 • Director Level'}
              </span>
            </span>
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {directors.map((director, idx) => (
              <div
                key={director.id}
                className="flex flex-col justify-between rounded-2xl border border-borderline bg-white p-6 shadow-indigo transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex flex-col items-start gap-3">
                    <TeamPortrait person={director} />
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 tabular-nums">
                      Director 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-bold text-indigo-950">
                    {director.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-indigo-600">
                    {locale === 'bn' ? director.designationBn : director.designation}
                  </p>
                  <p className="mt-1 text-xs text-ink-600">{director.credentials}</p>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-600">
                    {director.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-borderline flex flex-wrap gap-1.5">
                  {director.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-800"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Hierarchy Connector Line */}
        <div className="mx-auto h-8 w-0.5 bg-indigo-500/30" aria-hidden="true" />

        {/* ===================================================================
            ROW 4: MANAGER LEVEL
        =================================================================== */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 rounded-full border border-borderline bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-indigo-950 shadow-sm">
              <Users className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>
                {locale === 'bn' ? 'চতুর্থ স্তর • ম্যানেজার পর্যায়' : 'Row 04 • Manager Level'}
              </span>
            </span>
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {managers.map((manager) => (
              <div
                key={manager.id}
                className="flex flex-col justify-between rounded-2xl border border-borderline bg-white p-5 shadow-indigo transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex flex-col items-start gap-3">
                    <TeamPortrait person={manager} />
                    <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-800">
                      {manager.department}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-heading text-base font-bold text-indigo-950">
                    {manager.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-indigo-600">
                    {locale === 'bn' ? manager.designationBn : manager.designation}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-600">{manager.credentials}</p>

                  <p className="mt-2.5 text-xs leading-relaxed text-ink-600">
                    {manager.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-borderline flex items-center gap-1.5 text-[11px] font-semibold text-ink-600">
                  <UserCheck className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
                  <span>Engagement management</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
