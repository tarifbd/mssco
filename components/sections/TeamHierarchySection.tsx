'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  UserCheck,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function TeamHierarchySection() {
  const { locale } = useLanguage();
  const { principal, partners, directors, managers } = siteConfig.teamHierarchy;

  return (
    <section
      id="team"
      className="scroll-mt-24 bg-surface py-16 sm:py-24 border-b border-borderline"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <SectionHeader
          align="center"
          eyebrow="Practice Leadership & Team Structure"
          title="Four-Tier Engagement Hierarchy: Principal to Manager"
          subtitle="Structured across four clear accountability tiers—Principal CA at the apex, followed by Partner level, Director level, and dedicated Line Managers—ensuring every client engagement receives both senior sign-off and disciplined day-to-day execution."
        />

        {/* ===================================================================
            ROW 1: PRINCIPAL & PROPRIETOR (APEX ROW)
        =================================================================== */}
        <div className="mt-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-violet-500" aria-hidden="true" />
              <span>{locale === 'bn' ? principal.tierLabelBn : principal.tierLabel}</span>
            </span>
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-indigo-600/35 bg-white p-6 sm:p-8 shadow-indigo-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gradient" aria-hidden="true" />

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Principal & Proprietor Portrait */}
              <div className="relative h-32 w-28 sm:h-36 sm:w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-indigo-500/30 bg-indigo-50 shadow-md">
                <Image
                  src={principal.photo}
                  alt={`${principal.name} — ${principal.designation}`}
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-bold text-indigo-800">
                    {principal.credentials}
                  </span>
                  <span className="text-xs font-medium text-ink-600">
                    {principal.enrolmentNote}
                  </span>
                </div>

                <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-indigo-950">
                  {principal.name}
                </h3>
                <p className="text-sm font-bold text-indigo-600">
                  {locale === 'bn' ? principal.designationBn : principal.designation}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {principal.bio}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-3 border-t border-borderline">
                  {principal.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-950"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                      <span>{spec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Hierarchy Connector Line */}
        <div className="mx-auto h-8 w-0.5 bg-indigo-500/30" aria-hidden="true" />

        {/* ===================================================================
            ROW 2: PARTNER LEVEL (READY FOR NEXT / INCOMING PARTNERS)
        =================================================================== */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-indigo-950">
              <Award className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>
                {locale === 'bn' ? 'দ্বিতীয় স্তর • পার্টনার পর্যায়' : 'Row 02 • Partner Level'}
              </span>
            </span>
            <span className="h-px w-12 bg-indigo-500/30" aria-hidden="true" />
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col justify-between rounded-2xl border border-indigo-500/30 bg-white p-6 sm:p-7 shadow-indigo transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 font-heading text-sm font-extrabold text-indigo-800 border border-indigo-500/20">
                      PT
                    </div>
                    <span className="rounded-full border border-violet-500/30 bg-violet-100/70 px-3 py-1 text-[11px] font-bold text-indigo-800">
                      {partner.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-indigo-950">
                    {partner.name}
                  </h3>
                  <p className="mt-0.5 text-xs sm:text-sm font-bold text-indigo-600">
                    {locale === 'bn' ? partner.designationBn : partner.designation}
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink-600">
                    {partner.credentials}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {partner.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-borderline flex flex-wrap gap-1.5">
                  {partner.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-md bg-surface border border-borderline px-2.5 py-1 text-xs font-semibold text-indigo-950"
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
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-950 text-xs font-extrabold text-white">
                      DIR
                    </div>
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
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-xs font-extrabold text-indigo-800">
                      MGR
                    </span>
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
                  <span>Edit in /content/site.ts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
