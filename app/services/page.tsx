import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Chartered Accountancy, Audit, Tax, VAT & RJSC Services',
  description: `Explore all 9 practice areas offered by ${siteConfig.firmName} in Bangladesh: Audit & Assurance, NBR Income Tax, VAT & Customs, RJSC/BIDA Incorporation, Bookkeeping, Payroll, Advisory, Internal Audit, and Transfer Pricing.`,
  alternates: {
    canonical: '/services',
  },
};

const complianceMatrix = [
  {
    entityType: 'Individual Taxpayer / Professional / Freelancer',
    nbrTax: '12-digit e-TIN, Annual Return (IT-11GA) & Wealth Statement by Nov 30',
    vat: 'Applicable if supplying taxable commercial goods/services above threshold',
    rjscBida: 'Trade License (if operating a proprietorship business)',
    audit: 'Mandatory if turnover/capital exceeds statutory thresholds',
  },
  {
    entityType: 'Private / Public Limited Company',
    nbrTax: 'Corporate e-TIN, Monthly TDS Returns, Quarterly AIT & Annual Corporate Return',
    vat: '13-digit e-BIN, Mushak 6.1/6.2/6.3, Monthly Mushak 9.1 by the 15th',
    rjscBida: 'Incorporation, AGM, Annual Schedule X, Form XII & Audited Balance Sheet filing',
    audit: 'Mandatory Annual Statutory Audit by Chartered Accountants (Companies Act 1994)',
  },
  {
    entityType: 'Foreign Branch / Liaison Office / Subsidiary',
    nbrTax: 'Corporate Return, Expatriate Employee TDS, Transfer Pricing (if > BDT 3 Cr)',
    vat: '13-digit e-BIN, VDS on cross-border services & Monthly Mushak 9.1',
    rjscBida: 'BIDA Permission renewal, Work Permits, Section 18B Bangladesh Bank filings',
    audit: 'Mandatory Annual Statutory Audit & Inward Remittance Utilization Certification',
  },
  {
    entityType: 'NGO / Development Project',
    nbrTax: 'Entity Return, Monthly Withholding Tax (TDS) on Vendors, Staff & Rent',
    vat: 'Monthly VDS deduction & deposit, Mushak 9.1 compliance',
    rjscBida: 'NGOAB project approvals (FD-6 / FD-7), Societies/Trust renewal',
    audit: 'Annual Statutory Audit & NGOAB Project Audit (FD-4 Certification)',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-surface pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>9 Specialized Practice Areas</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
              Audit, Tax, VAT, Corporate Secretarial &amp; Financial Advisory
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600">
              Every service at {siteConfig.firmName} is structured around Bangladesh’s statutory frameworks—combining rigorous technical compliance with clear, practical commercial advice. Select any practice area below for deliverables, required documents, timelines, and FAQs.
            </p>
          </div>
        </div>
      </section>

      {/* All 9 Services Grid */}
      <ServicesGrid showViewAllButton={false} />

      {/* Bangladesh Entity Compliance Matrix */}
      <section className="bg-surface py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionHeader
            eyebrow="Compliance Overview"
            title="Statutory Obligations by Entity Type in Bangladesh"
            subtitle="Not sure which filings apply to your organisation? Use this high-level matrix to identify your core statutory touchpoints across NBR, VAT, RJSC, BIDA, and External Audit."
          />

          <div className="mt-10 overflow-x-auto rounded-2xl border border-borderline bg-white shadow-indigo">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-borderline bg-indigo-950 text-white">
                  <th className="py-4 px-5 font-heading font-bold">Entity Type</th>
                  <th className="py-4 px-5 font-heading font-bold">Income Tax (NBR)</th>
                  <th className="py-4 px-5 font-heading font-bold">VAT (NBR)</th>
                  <th className="py-4 px-5 font-heading font-bold">RJSC / BIDA / Licensing</th>
                  <th className="py-4 px-5 font-heading font-bold">Audit &amp; Assurance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-borderline">
                {complianceMatrix.map((row) => (
                  <tr key={row.entityType} className="hover:bg-surface transition-colors">
                    <td className="py-4 px-5 font-heading font-bold text-indigo-950">
                      {row.entityType}
                    </td>
                    <td className="py-4 px-5 text-ink-600">{row.nbrTax}</td>
                    <td className="py-4 px-5 text-ink-600">{row.vat}</td>
                    <td className="py-4 px-5 text-ink-600">{row.rjscBida}</td>
                    <td className="py-4 px-5 text-ink-600">{row.audit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-indigo-500/20 bg-indigo-50/70 p-4 text-xs sm:text-sm text-indigo-950">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" aria-hidden="true" />
              <span>Need a tailored compliance calendar and fee estimate for your entity?</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:underline shrink-0"
            >
              <span>Request a custom scope review</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <HowWeWork />
      <CtaBanner />
    </>
  );
}
