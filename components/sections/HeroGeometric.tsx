'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Landmark } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { useLanguage } from '@/components/layout/LanguageProvider';

export function HeroGeometric() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-borderline">
      {/* Subtle architectural grid background in indigo-50 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#EEF2FF_1px,transparent_1px),linear-gradient(to_bottom,#EEF2FF_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000_70%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-container px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Headline, Sub-headline, CTAs & Trust Strip (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-800">
              <span className="h-2 w-2 rounded-full bg-brand-gradient" aria-hidden="true" />
              <span>Chartered Accountants • {siteConfig.location.addressLine}</span>
            </div>

            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl lg:text-[60px] lg:leading-[1.08]">
              Clarity in numbers.{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Confidence in decisions.
              </span>
            </h1>

            {locale === 'bn' && (
              <p className="mt-2 font-bengali text-xl font-bold text-indigo-800">
                {siteConfig.taglineBn}
              </p>
            )}

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-600">
              {siteConfig.firmName} is a Chartered Accountancy proprietorship practice of{' '}
              <strong className="font-semibold text-ink-900">{siteConfig.ownerName}</strong> ({siteConfig.ownerCredentials}). We deliver independent statutory audit, NBR income tax &amp; VAT advisory, RJSC/BIDA corporate compliance, and structured financial consultancy across Bangladesh.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-gradient px-7 py-4 text-base font-semibold text-white shadow-indigo transition-all hover:opacity-95 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
              >
                <span>{t.bookConsultation}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-indigo-950/15 bg-white px-7 py-4 text-base font-semibold text-indigo-950 transition-colors hover:border-indigo-600 hover:bg-indigo-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
              >
                <span>{t.exploreServices}</span>
              </Link>
            </div>

            {/* 3-Item Trust Strip */}
            <div className="mt-10 pt-8 border-t border-borderline grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-indigo-950">
                      {locale === 'bn' ? badge.labelBn : badge.label}
                    </p>
                    <p className="text-xs text-ink-600 leading-snug mt-0.5">{badge.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Original Architectural & Financial Governance Geometric Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl border border-indigo-500/20 bg-surface p-6 sm:p-8 shadow-indigo-lg">
                {/* Top Accent Bar */}
                <div className="h-1.5 w-24 rounded-full bg-brand-gradient mb-6" />

                {/* Custom SVG Architectural Ledger & Compliance Matrix */}
                <svg
                  viewBox="0 0 420 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Geometric illustration representing financial assurance, tax compliance, and regulatory structure in Bangladesh"
                  className="w-full h-auto rounded-xl bg-white border border-borderline p-3"
                >
                  <defs>
                    <linearGradient id="hero-card-grad" x1="0" y1="0" x2="420" y2="300" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                    <linearGradient id="hero-soft-grad" x1="0" y1="0" x2="0" y2="260" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#EEF2FF" />
                      <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Background Grid */}
                  <rect x="8" y="8" width="404" height="284" rx="10" fill="url(#hero-soft-grad)" />
                  <line x1="8" y1="70" x2="412" y2="70" stroke="#E5E7EB" strokeDasharray="4 4" />
                  <line x1="8" y1="140" x2="412" y2="140" stroke="#E5E7EB" strokeDasharray="4 4" />
                  <line x1="8" y1="210" x2="412" y2="210" stroke="#E5E7EB" strokeDasharray="4 4" />
                  <line x1="140" y1="8" x2="140" y2="292" stroke="#E5E7EB" strokeDasharray="4 4" />
                  <line x1="280" y1="8" x2="280" y2="292" stroke="#E5E7EB" strokeDasharray="4 4" />

                  {/* Rising Precision Pillars (Audit, Tax, VAT, Advisory) */}
                  <rect x="38" y="168" width="42" height="96" rx="6" fill="#1E1B4B" fillOpacity="0.85" />
                  <rect x="102" y="132" width="42" height="132" rx="6" fill="#3730A3" />
                  <rect x="166" y="96" width="42" height="168" rx="6" fill="#4F46E5" />
                  <rect x="230" y="58" width="42" height="206" rx="6" fill="url(#hero-card-grad)" />

                  {/* Precision Trend Trajectory */}
                  <path
                    d="M59 152 L123 116 L187 80 L251 44 L350 44"
                    stroke="#7C3AED"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="59" cy="152" r="5" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="123" cy="116" r="5" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="187" cy="80" r="5" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="3" />
                  <circle cx="251" cy="44" r="6" fill="#7C3AED" stroke="#FFFFFF" strokeWidth="2.5" />

                  {/* Right Floating Compliance Verification Badge inside SVG */}
                  <rect x="292" y="84" width="104" height="180" rx="10" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="1.5" />
                  <rect x="306" y="102" width="44" height="8" rx="4" fill="#1E1B4B" />
                  <rect x="306" y="118" width="76" height="6" rx="3" fill="#E5E7EB" />
                  <rect x="306" y="138" width="76" height="28" rx="6" fill="#EEF2FF" />
                  <text x="314" y="156" fill="#3730A3" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10">IFRS / BFRS</text>
                  <rect x="306" y="176" width="76" height="28" rx="6" fill="#EDE9FE" />
                  <text x="314" y="194" fill="#4F46E5" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10">ISA • ICAB</text>
                  <rect x="306" y="214" width="76" height="28" rx="6" fill="#1E1B4B" />
                  <text x="314" y="232" fill="#FFFFFF" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="10">NBR • RJSC</text>
                </svg>

                {/* Bottom Statutory Pillars Summary */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-3 border border-borderline">
                    <ShieldCheck className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <p className="mt-1.5 font-heading text-xs font-bold text-indigo-950">Assurance</p>
                    <p className="text-[11px] text-ink-600">ISA &amp; BFRS/IFRS</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-borderline">
                    <FileText className="h-4 w-4 text-violet-600" aria-hidden="true" />
                    <p className="mt-1.5 font-heading text-xs font-bold text-indigo-950">Tax &amp; VAT</p>
                    <p className="text-[11px] text-ink-600">ITA 2023 &amp; VAT 2012</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-borderline">
                    <Landmark className="h-4 w-4 text-indigo-800" aria-hidden="true" />
                    <p className="mt-1.5 font-heading text-xs font-bold text-indigo-950">Corporate</p>
                    <p className="text-[11px] text-ink-600">RJSC • BIDA • FRC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
