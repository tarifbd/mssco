import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  UserCheck,
  Briefcase,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TeamHierarchySection } from '@/components/sections/TeamHierarchySection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: `About the Firm & Principal CA (${siteConfig.ownerName})`,
  description: `Learn about ${siteConfig.firmName}, a proprietorship Chartered Accountancy practice of ${siteConfig.ownerName} (${siteConfig.ownerCredentials}) in ${siteConfig.location.addressLine}.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-surface pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'About the Firm', href: '/about' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>Chartered Accountancy Proprietorship • Bangladesh</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
              Independent Assurance. Methodical Tax &amp; Regulatory Counsel.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-ink-600">
              <strong className="font-semibold text-indigo-950">{siteConfig.firmLegalNote}</strong> We combine the technical discipline of institutional auditing and tax practice with the responsiveness and direct accountability of a principal-led firm.
            </p>
          </div>
        </div>
      </section>

      {/* Principal CA Profile Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Principal CA Portrait Placeholder Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-borderline bg-surface p-6 shadow-indigo">
                {/* Architectural Portrait SVG Placeholder */}
                <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 bg-indigo-950 aspect-[4/4.5] flex flex-col items-center justify-center p-6 text-center text-white">
                  <svg
                    viewBox="0 0 200 200"
                    className="h-28 w-28 text-violet-100/90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="100" cy="100" r="92" stroke="#6366F1" strokeWidth="2" strokeDasharray="6 6" />
                    <circle cx="100" cy="76" r="32" fill="#4F46E5" />
                    <path
                      d="M44 168C44 137.072 69.0721 112 100 112C130.928 112 156 137.072 156 168"
                      stroke="#EDE9FE"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-violet-100">
                    [Principal CA Portrait Placeholder]
                  </p>
                  <p className="mt-1 text-xs text-indigo-50/75">
                    Replace with professional photograph of {siteConfig.ownerName} in <code className="text-violet-100">/public/images/</code>
                  </p>
                </div>

                <div className="mt-6">
                  <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-indigo-800">
                    Proprietor &amp; Principal CA
                  </span>
                  <h2 className="mt-2 font-heading text-2xl font-extrabold text-indigo-950">
                    {siteConfig.ownerName}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-indigo-600">
                    {siteConfig.ownerCredentials}
                  </p>
                  <p className="mt-1 text-xs text-ink-600">
                    {siteConfig.ownerEnrolmentPlaceholder}
                  </p>

                  <div className="mt-5 border-t border-borderline pt-4 space-y-2.5 text-xs text-ink-600">
                    <p className="font-bold uppercase tracking-wider text-indigo-950">
                      Qualifications &amp; Credentials
                    </p>
                    {siteConfig.about.qualifications.map((qual) => (
                      <div key={qual} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Philosophy & Experience Timeline (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                  Principal Profile
                </span>
                <h2 className="mt-2 font-heading text-3xl font-extrabold text-indigo-950">
                  Leadership Grounded in Professional Ethics
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-600">
                  {siteConfig.about.principalBio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Philosophy Callout */}
              <blockquote className="rounded-2xl border-l-4 border-indigo-600 bg-indigo-50/70 p-6 sm:p-8">
                <Quote className="h-7 w-7 text-indigo-600 mb-3" aria-hidden="true" />
                <p className="font-heading text-lg sm:text-xl font-bold leading-relaxed text-indigo-950">
                  {siteConfig.about.philosophyQuote}
                </p>
                <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-indigo-800">
                  — {siteConfig.ownerName}, {siteConfig.ownerCredentials}
                </footer>
              </blockquote>

              {/* Experience & Qualification Timeline */}
              <div>
                <h3 className="font-heading text-xl font-extrabold text-indigo-950 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <span>Professional Experience Timeline (Editable Placeholders)</span>
                </h3>
                <div className="mt-6 space-y-4 border-l-2 border-indigo-500/30 pl-6">
                  {siteConfig.about.careerTimeline.map((item) => (
                    <div
                      key={item.role}
                      className="relative rounded-xl border border-borderline bg-surface p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-indigo-600"
                      />
                      <span className="inline-block rounded-md bg-violet-100 px-2.5 py-0.5 text-xs font-bold text-indigo-800 tabular-nums">
                        {item.period}
                      </span>
                      <h4 className="mt-2 font-heading text-base font-bold text-indigo-950">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600">{item.organization}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Tier Leadership & Team Hierarchy (Principal -> Partner -> Director -> Manager) */}
      <TeamHierarchySection />

      {/* Firm Story, Mission, Vision & Core Values */}
      <section id="values" className="scroll-mt-24 bg-surface py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="Our Practice Story"
                title="Built for Clarity in Bangladesh’s Regulatory Environment"
              />
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-600">
                {siteConfig.about.firmStory.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-indigo-500/25 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Formal Proprietorship Declaration
                </p>
                <p className="mt-1 text-sm font-semibold text-indigo-950">
                  {siteConfig.firmLegalNote} All statutory assurance, tax, and advisory engagements are conducted under the direct supervision of the Proprietor.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 gap-6">
              <div className="rounded-2xl border border-borderline bg-white p-7 shadow-indigo">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-indigo-950">Our Mission</h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-600">
                  {siteConfig.about.mission}
                </p>
              </div>

              <div className="rounded-2xl border border-borderline bg-white p-7 shadow-indigo">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <Eye className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-indigo-950">Our Vision</h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink-600">
                  {siteConfig.about.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="font-heading text-2xl font-extrabold text-indigo-950">
              Four Core Values Guiding Every Engagement
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.about.coreValues.map((val, idx) => (
                <div
                  key={val.title}
                  className="rounded-2xl border border-borderline bg-white p-6 shadow-indigo"
                >
                  <div className="flex items-center justify-between">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                    <span className="text-xs font-bold text-indigo-600 tabular-nums">0{idx + 1}</span>
                  </div>
                  <h4 className="mt-4 font-heading text-lg font-bold text-indigo-950">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Professional Bodies We Interact With */}
      <section id="regulators" className="scroll-mt-24 bg-white py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <SectionHeader
            eyebrow="Regulatory Landscape"
            title="Professional & Statutory Authorities in Bangladesh"
            subtitle="Our engagements involve compliance filings, reporting standards, and representation across Bangladesh’s primary statutory and professional bodies. (Note: Listing a regulatory authority below indicates our practice’s compliance coverage and does not claim special endorsement or panel license unless explicitly confirmed by the firm owner.)"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.about.regulatoryBodies.map((body) => (
              <div
                key={body.acronym}
                className="rounded-2xl border border-borderline bg-surface p-6 shadow-indigo"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-950 text-xs font-extrabold text-white">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-heading text-lg font-extrabold text-indigo-950">
                      {body.acronym}
                    </span>
                  </div>
                </div>
                <h3 className="mt-3 font-heading text-sm font-bold text-indigo-950">
                  {body.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-600">{body.relationship}</p>
              </div>
            ))}
          </div>

          {/* Client Feedback Placeholder Section */}
          <div className="mt-16 rounded-2xl border border-dashed border-indigo-500/40 bg-indigo-50/40 p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-800">
                  Client Perspectives (Owner-Editable Placeholders)
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold text-indigo-950">
                  Verified Client Commentary
                </h3>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
              >
                <span>Request references during consultation</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {siteConfig.testimonialsPlaceholder.map((item, i) => (
                <div key={i} className="rounded-xl border border-borderline bg-white p-5">
                  <p className="text-sm italic text-ink-600">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-bold text-indigo-950">
                    <UserCheck className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <span>{item.attribution}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
