import React from 'react';
import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CalendarCheck,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Book a Consultation',
  description: `Schedule a confidential consultation with ${siteConfig.ownerName} (${siteConfig.ownerCredentials}) at ${siteConfig.firmName} in ${siteConfig.location.addressLine}. Call, WhatsApp, or submit an online enquiry.`,
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Assalamu Alaikum / Hello ${siteConfig.firmName}, I would like to book a 30-minute consultation regarding your Chartered Accountancy services.`
  )}`;

  return (
    <>
      {/* Page Hero */}
      <section className="bg-surface pt-10 pb-14 sm:pt-14 sm:pb-16 border-b border-borderline">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <Breadcrumbs items={[{ label: 'Contact & Consultation', href: '/contact' }]} />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800">
              <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
              <span>Direct Principal CA Consultation • Confidential</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-indigo-950 sm:text-5xl">
              Speak With Our Practice
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-600">
              Whether you require an annual statutory audit, NBR corporate or personal tax representation, monthly VAT management, or RJSC/BIDA incorporation support, reach out to our office below. We respond to all enquiries within <strong>1 business day</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Contact Details, 30-Min Consultation Block & Map Embed (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Coordinates Card */}
              <div className="rounded-2xl border border-borderline bg-surface p-6 sm:p-8 shadow-indigo">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Chambers &amp; Coordinates
                </span>
                <h2 className="mt-1 font-heading text-2xl font-extrabold text-indigo-950">
                  {siteConfig.firmName}
                </h2>
                <p className="text-xs font-semibold text-ink-600 mt-0.5">
                  {siteConfig.firmLegalNote}
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950">Office Address</p>
                      <p className="text-ink-600 mt-0.5">{siteConfig.location.addressLine}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950">Telephone &amp; Mobile / WhatsApp</p>
                      <div className="mt-0.5 space-y-0.5">
                        <p className="text-xs text-ink-600">
                          Mobile / WhatsApp:{' '}
                          <a
                            href={`tel:${siteConfig.contact.phoneHref}`}
                            className="text-indigo-600 font-semibold tabular-nums hover:underline"
                          >
                            {siteConfig.contact.phoneDisplay}
                          </a>
                        </p>
                        <p className="text-xs text-ink-600">
                          Telephone:{' '}
                          <a
                            href={`tel:${siteConfig.contact.telephoneHref}`}
                            className="text-indigo-600 font-semibold tabular-nums hover:underline"
                          >
                            {siteConfig.contact.telephoneDisplay}
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950">Email Addresses</p>
                      <div className="mt-0.5 space-y-0.5">
                        <a
                          href={`mailto:${siteConfig.contact.emailDisplay}`}
                          className="block text-indigo-600 font-semibold hover:underline break-all"
                        >
                          {siteConfig.contact.emailDisplay}
                        </a>
                        <a
                          href={`mailto:${siteConfig.contact.emailSecondary}`}
                          className="block text-xs text-ink-600 font-medium hover:text-indigo-600 hover:underline break-all"
                        >
                          {siteConfig.contact.emailSecondary}
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-indigo-950">Office Hours</p>
                      <p className="text-ink-600">{siteConfig.contact.hours}</p>
                      <p className="text-xs text-ink-600 mt-0.5">
                        Closed: {siteConfig.contact.closedDays}
                      </p>
                    </div>
                  </li>
                </ul>

                {/* Direct Call & WhatsApp Buttons */}
                <div className="mt-6 pt-6 border-t border-borderline grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-borderline bg-white px-4 py-3 text-xs font-bold text-indigo-950 shadow-sm transition-colors hover:bg-indigo-50"
                  >
                    <Phone className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <span>Call Office Directly</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-950 px-4 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-indigo-800"
                  >
                    <MessageSquare className="h-4 w-4 text-violet-100" aria-hidden="true" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Book a 30-Minute Consultation Block */}
              <div
                id="book-consultation"
                className="rounded-2xl bg-brand-gradient p-6 sm:p-7 text-white shadow-indigo-lg"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-100">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  <span>Direct Scheduling Option</span>
                </div>
                <h3 className="mt-2 font-heading text-xl font-extrabold">
                  Book a 30-Minute Diagnostic Consultation
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-indigo-50">
                  Prefer to reserve a specific time slot for an in-person chamber meeting or virtual call with {siteConfig.ownerName}? Use our calendar booking link or request a slot via WhatsApp.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.contact.calendlyPlaceholderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-3 text-xs font-bold text-indigo-950 shadow-sm hover:bg-indigo-50"
                  >
                    <span>Schedule via Calendar (Placeholder)</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/35 bg-indigo-950/30 px-4 py-3 text-xs font-bold text-white hover:bg-indigo-950/50"
                  >
                    <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Book Slot via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Map Embed with Clear Replacement Note */}
              <div className="rounded-2xl border border-borderline bg-surface p-4 shadow-indigo">
                <div className="overflow-hidden rounded-xl border border-borderline bg-indigo-50">
                  <iframe
                    title={`Office Location Map Placeholder for ${siteConfig.firmName}`}
                    src={siteConfig.location.googleMapsEmbedUrl}
                    width="100%"
                    height="240"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full border-0"
                  />
                </div>
                <p className="mt-2.5 text-[11px] leading-relaxed text-ink-600">
                  {siteConfig.location.mapNotice}
                </p>
              </div>
            </div>

            {/* Right Column: Validated Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
