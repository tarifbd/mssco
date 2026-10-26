import React from 'react';
import type { Metadata } from 'next';
import { ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy and client confidentiality practices of ${siteConfig.firmName}, Chartered Accountants in Bangladesh.`,
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />

        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/70 p-4 text-xs sm:text-sm text-indigo-950 mb-8 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong>Legal Review Notice:</strong> This Privacy Policy is a plain-language draft tailored for a Chartered Accountancy proprietorship in Bangladesh. The firm owner should review and confirm this text with legal counsel prior to commercial publication.
          </p>
        </div>

        <h1 className="font-heading text-3xl font-extrabold text-indigo-950 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-600">
          Last updated: October 2026 • Entity: {siteConfig.firmName} ({siteConfig.firmLegalNote})
        </p>

        <div className="mt-8 space-y-8 text-base leading-relaxed text-ink-600">
          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              1. Commitment to Professional Secrecy &amp; Data Privacy
            </h2>
            <p className="mt-2">
              {siteConfig.firmName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Firm&rdquo;) operates in accordance with the professional confidentiality standards of The Institute of Chartered Accountants of Bangladesh (ICAB) and applicable laws of Bangladesh. This policy explains what information we collect when you visit our website or submit an enquiry, and how we safeguard it.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              2. Information We Collect
            </h2>
            <p className="mt-2">
              This website is strictly informational and does not require user accounts or online payments. We only collect personal or corporate contact data that you voluntarily submit through our Contact Form or via direct email/WhatsApp communication, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm sm:text-base">
              <li>Full name, designation, and company or organization name;</li>
              <li>Email address and Bangladesh telephone/WhatsApp number;</li>
              <li>The service area of interest and the description of your enquiry;</li>
              <li>Standard technical request metadata (such as IP address and timestamp) used solely for rate-limiting and spam prevention on our contact endpoint.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">
              Information submitted via our website is used exclusively to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1.5 text-sm sm:text-base">
              <li>Respond to your consultation request or service enquiry;</li>
              <li>Perform preliminary conflict-of-interest and independence checks required under ICAB ethical standards prior to accepting an engagement;</li>
              <li>Send an automated confirmation receipt acknowledging your enquiry.</li>
            </ul>
            <p className="mt-2">
              We do <strong>not</strong> sell, rent, or trade your contact details to any third party or marketing list.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              4. Data Retention &amp; Security
            </h2>
            <p className="mt-2">
              Enquiry emails are transmitted over encrypted channels (TLS) and restricted to the Principal Chartered Accountant and authorized engagement personnel. Where an enquiry transitions into a formal client engagement, record retention is governed by our signed Engagement Letter and statutory retention rules under Bangladesh law.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-indigo-950">
              5. Your Rights &amp; Contact Information
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of any personal contact details submitted through our website by contacting our office at <strong>{siteConfig.contact.emailDisplay}</strong> or calling <strong>{siteConfig.contact.phoneDisplay}</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
