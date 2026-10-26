import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CheckCircle2,
  FileText,
  Clock,
  Landmark,
  Users,
  ArrowRight,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { servicesList, getServiceBySlug } from '@/content/services';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/ui/JsonLd';
import { CtaBanner } from '@/components/sections/CtaBanner';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} in Bangladesh`,
    description: `${service.shortDescription} Provided by ${siteConfig.firmName} (${siteConfig.ownerName}, ${siteConfig.ownerCredentials}) in ${siteConfig.location.addressLine}.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'AccountingService',
      name: siteConfig.firmName,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
  };

  return (
    <>
      <JsonLd data={[faqSchema, serviceSchema]} />

      {/* Service Hero */}
      <section className="bg-surface pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
                <span className="tabular-nums">Practice Area {service.number}</span>
                <span>•</span>
                <span>Statutory &amp; Advisory Practice</span>
              </div>

              <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
                {service.shortDescription}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact#enquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-6 py-4 text-sm font-bold text-white shadow-indigo transition-transform hover:-translate-y-0.5"
              >
                <span>Enquire About {service.title}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-borderline bg-white px-6 py-3.5 text-sm font-semibold text-indigo-950 hover:bg-indigo-50"
              >
                <Phone className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                <span className="tabular-nums">Speak with our office: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="bg-white py-16 sm:py-24 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              {/* 1. Overview */}
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-indigo-950">
                  Service Overview
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-600">
                  {service.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* 2. Who It Is For */}
              <div className="rounded-2xl border border-borderline bg-surface p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Users className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-extrabold text-indigo-950">
                    Who This Service Is For
                  </h2>
                </div>
                <ul className="mt-5 space-y-3">
                  {service.whoItIsFor.map((audience) => (
                    <li key={audience} className="flex items-start gap-3 text-sm sm:text-base text-ink-900">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. What We Do (Deliverables) */}
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-indigo-950">
                  What We Do &amp; Key Deliverables
                </h2>
                <p className="mt-2 text-sm text-ink-600">
                  Every engagement is scoped in writing with clear outputs reviewed by {siteConfig.ownerName}.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-borderline bg-white p-6 shadow-indigo"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 font-heading text-xs font-extrabold text-indigo-800 tabular-nums">
                          0{idx + 1}
                        </span>
                        <div>
                          <h3 className="font-heading text-lg font-bold text-indigo-950">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Documents Required */}
              <div className="rounded-2xl border border-indigo-500/25 bg-indigo-50/50 p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <FileText className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <h2 className="font-heading text-xl font-extrabold text-indigo-950">
                    Documents Typically Required
                  </h2>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-ink-600">
                  We share a customized document request list upon engagement onboarding. Core records typically include:
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-3">
                  {service.documentsRequired.map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-3 rounded-xl border border-borderline bg-white p-3.5 text-sm text-ink-900"
                    >
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Typical Timeline */}
              <div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-extrabold text-indigo-950">
                    Typical Engagement Timeline
                  </h2>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-ink-600">
                  Actual turnaround depends on transaction volume, readiness of primary records, and regulatory authority processing queues.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.typicalTimeline.map((step, i) => (
                    <div
                      key={step.phase}
                      className="rounded-xl border border-borderline bg-surface p-5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                          Phase 0{i + 1}
                        </span>
                        <span className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-bold text-indigo-800 tabular-nums">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-heading text-base font-bold text-indigo-950">
                        {step.phase}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-600">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Relevant Bangladesh Laws & Authorities */}
              <div>
                <div className="flex items-center gap-2.5">
                  <Landmark className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-extrabold text-indigo-950">
                    Relevant Bangladesh Laws &amp; Authorities
                  </h2>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {service.lawsAndAuthorities.map((law) => (
                    <div
                      key={law.name}
                      className="rounded-xl border border-borderline bg-white p-5 shadow-indigo"
                    >
                      <h3 className="font-heading text-base font-bold text-indigo-950">
                        {law.name}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-ink-600">{law.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Service-Specific FAQs */}
              <div>
                <h2 className="font-heading text-2xl font-extrabold text-indigo-950 mb-5">
                  Frequently Asked Questions — {service.title}
                </h2>
                <Accordion
                  items={service.faqs.map((f, i) => ({
                    id: `${service.slug}-faq-${i}`,
                    question: f.question,
                    answer: f.answer,
                  }))}
                />
              </div>
            </div>

            {/* Right Sidebar: Practice Area Switcher & Direct Consultation Box (4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Direct Consultation Card */}
                <div className="rounded-2xl bg-indigo-950 p-6 text-white shadow-indigo-lg border-t-4 border-violet-500">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-violet-100">
                    <ShieldCheck className="h-4 w-4 text-violet-500" aria-hidden="true" />
                    <span>Partner-Led Review</span>
                  </div>
                  <h3 className="mt-2 font-heading text-xl font-bold">
                    Need {service.title} Support?
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-indigo-50/85">
                    Discuss your scope, deadlines, and required documentation directly with {siteConfig.ownerName} ({siteConfig.ownerCredentials}).
                  </p>
                  <Link
                    href="/contact#enquiry-form"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:opacity-95"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <p className="mt-3 text-center text-xs text-indigo-50/75 tabular-nums">
                    Or call: {siteConfig.contact.phoneDisplay}
                  </p>
                </div>

                {/* All Practice Areas Directory */}
                <div className="rounded-2xl border border-borderline bg-surface p-6">
                  <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-indigo-950">
                    All Practice Areas
                  </h3>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {servicesList.map((item) => {
                      const active = item.slug === service.slug;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            aria-current={active ? 'page' : undefined}
                            className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 font-semibold transition-colors ${
                              active
                                ? 'bg-indigo-600 text-white'
                                : 'text-ink-900 hover:bg-indigo-50 hover:text-indigo-600'
                            }`}
                          >
                            <span>{item.title}</span>
                            <span className="text-xs opacity-75 tabular-nums">{item.number}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
