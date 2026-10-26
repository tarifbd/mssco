import React from 'react';
import type { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: `Website Terms of Use for ${siteConfig.firmName}, Chartered Accountants in Bangladesh.`,
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Terms of Use', href: '/terms' }]} />

        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/70 p-4 text-xs sm:text-sm text-indigo-950 mb-8 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong>Legal Review Notice:</strong> These Terms of Use are a plain-language draft prepared for informational website operation in Bangladesh and should be reviewed by legal counsel prior to publication.
          </p>
        </div>

        <h1 className="font-heading text-3xl font-extrabold text-indigo-950 sm:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-2 text-sm text-ink-600">
          Last updated: October 2026 • {siteConfig.firmName} ({siteConfig.location.addressLine})
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing and using this website operated by {siteConfig.firmName} ({siteConfig.firmLegalNote}), you agree to comply with these Terms of Use and our Professional Disclaimer.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              2. Informational Purpose Only
            </h2>
            <p className="mt-2">
              All content on this website—including service descriptions, tax calendar dates, checklists, and regulatory articles—is provided solely for general informational purposes. Nothing on this website constitutes a binding offer, a guarantee of tax or regulatory outcomes, or formal professional advice.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              3. No Client Relationship Without Written Engagement
            </h2>
            <p className="mt-2">
              Sending a message via our Contact Form, WhatsApp, or email does not create a Chartered Accountant–Client relationship between you and {siteConfig.firmName}. A formal professional engagement commences only after we complete our conflict/independence checks and both parties execute a written Engagement Letter.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              4. Intellectual Property
            </h2>
            <p className="mt-2">
              Unless otherwise stated, the text, checklists, custom graphics, and brand identity of {siteConfig.firmName} on this website are the intellectual property of the Firm. Visitors may download or print individual checklists for personal or internal business compliance reference, provided all attribution and disclaimer notices remain intact.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p className="mt-2">
              These Terms of Use are governed by and construed in accordance with the laws of the People&apos;s Republic of Bangladesh, and any disputes shall be subject to the exclusive jurisdiction of the courts of Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
