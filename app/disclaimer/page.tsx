import React from 'react';
import type { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Professional Disclaimer',
  description: `Professional advice and non-solicitation disclaimer for ${siteConfig.firmName}, Chartered Accountants in Bangladesh.`,
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Professional Disclaimer', href: '/disclaimer' }]} />

        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/70 p-4 text-xs sm:text-sm text-indigo-950 mb-8 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong>Legal &amp; Professional Conduct Review Notice:</strong> This Disclaimer is drafted to align with ICAB professional conduct norms and should be reviewed and confirmed by the firm owner prior to publication.
          </p>
        </div>

        <h1 className="font-heading text-3xl font-extrabold text-indigo-950 sm:text-4xl">
          Professional Disclaimer
        </h1>
        <p className="mt-2 text-sm text-ink-600">
          {siteConfig.firmName} • {siteConfig.firmLegalNote}
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              1. Not Professional Audit, Tax, or Legal Advice
            </h2>
            <p className="mt-2">
              The information, articles, statutory calendars, and checklists contained on this website are published for general informational and educational purposes only. Bangladeshi tax, VAT, corporate, and financial reporting laws—including the Income Tax Act 2023, the Value Added Tax and Supplementary Duty Act 2012, the Companies Act 1994, Finance Acts, and Statutory Regulatory Orders (SROs)—are subject to frequent amendment and official interpretation. You should not act or refrain from acting on the basis of any content on this website without seeking formal professional advice tailored to your specific facts.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              2. No Chartered Accountant–Client Relationship
            </h2>
            <p className="mt-2">
              Viewing this website, downloading a checklist, or transmitting an enquiry through the website Contact Form, email, or WhatsApp does not create a Chartered Accountant–Client relationship between you and {siteConfig.firmName} or {siteConfig.ownerName}. Do not send confidential financial records or sensitive proprietary documents until we have confirmed there is no conflict of interest and an Engagement Letter has been signed.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              3. Professional Ethics &amp; Non-Solicitation
            </h2>
            <p className="mt-2">
              In accordance with the ethical guidelines applicable to Chartered Accountants in Bangladesh, this website is not intended to be a source of advertising or solicitation. The visitor acknowledges that they are accessing this website voluntarily to obtain factual information about our practice areas, qualifications, and contact coordinates.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              4. External Links &amp; Regulatory References
            </h2>
            <p className="mt-2">
              References to Bangladeshi regulatory bodies—including ICAB, NBR, RJSC, BIDA, FRC, BSEC, NGOAB, and Bangladesh Bank—are made solely to describe the statutory frameworks relevant to our services. Unless explicitly stated and verified by the firm owner, reference to any regulatory authority does not imply official affiliation, endorsement, or special licensing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
