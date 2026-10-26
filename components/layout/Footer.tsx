import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { servicesList } from '@/content/services';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white border-t-4 border-violet-500 pb-20 md:pb-0">
      <div className="mx-auto max-w-container px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Firm Identity & Proprietorship Notice (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              <Logo variant="light" />
            </Link>

            <p className="text-sm leading-relaxed text-indigo-50/90">
              {siteConfig.tagline} Independent assurance, direct &amp; indirect taxation (NBR), corporate compliance (RJSC/BIDA), and financial advisory for organisations and individuals in Bangladesh.
            </p>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-xs leading-relaxed text-indigo-50">
              <div className="flex items-center gap-2 font-semibold text-white mb-1">
                <ShieldCheck className="h-4 w-4 text-violet-500 shrink-0" aria-hidden="true" />
                <span>Practice Status &amp; Governance</span>
              </div>
              <p>{siteConfig.firmLegalNote}</p>
              <p className="mt-1 text-indigo-50/80">
                Principal: {siteConfig.ownerName}, {siteConfig.ownerCredentials}
              </p>
              <p className="mt-0.5 text-indigo-50/75">{siteConfig.ownerEnrolmentPlaceholder}</p>
            </div>
          </div>

          {/* Column 2: Practice Areas / Services (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-violet-100">
              Core Practice Areas
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesList.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-indigo-50/85 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-violet-100">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-indigo-50/85 hover:text-white transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-50/85 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-indigo-50/85 hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-indigo-50/85 hover:text-white transition-colors">
                  Insights &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/insights#tax-calendar" className="text-indigo-50/85 hover:text-white transition-colors">
                  BD Tax Calendar
                </Link>
              </li>
              <li>
                <Link href="/insights#checklists" className="text-indigo-50/85 hover:text-white transition-colors">
                  Compliance Checklists
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-indigo-50/85 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>

            <h2 className="mt-7 font-heading text-xs font-bold uppercase tracking-[0.14em] text-violet-100">
              Professional Links
            </h2>
            <div className="mt-2.5 flex items-center gap-3 text-xs">
              <a
                href={siteConfig.socialPlaceholders.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded border border-white/20 px-2.5 py-1 text-indigo-50 hover:border-white hover:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.socialPlaceholders.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded border border-white/20 px-2.5 py-1 text-indigo-50 hover:border-white hover:text-white"
              >
                <span>Facebook</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 4: Chambers & Contact Details (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-violet-100">
              Office &amp; Hours
            </h2>
            <ul className="mt-4 space-y-3 text-xs sm:text-sm text-indigo-50/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{siteConfig.location.addressLine}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${siteConfig.contact.phoneHref}`}
                    className="block tabular-nums hover:text-white underline-offset-4 hover:underline"
                  >
                    Mob: {siteConfig.contact.phoneDisplay}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.telephoneHref}`}
                    className="block text-xs text-indigo-50/80 tabular-nums hover:text-white underline-offset-4 hover:underline"
                  >
                    Tel: {siteConfig.contact.telephoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-0.5">
                  <a
                    href={`mailto:${siteConfig.contact.emailDisplay}`}
                    className="block hover:text-white underline-offset-4 hover:underline break-all"
                  >
                    {siteConfig.contact.emailDisplay}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.emailSecondary}`}
                    className="block text-xs text-indigo-50/80 hover:text-white underline-offset-4 hover:underline break-all"
                  >
                    {siteConfig.contact.emailSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-violet-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="block">{siteConfig.contact.hours}</span>
                  <span className="block text-xs text-indigo-50/70">
                    Closed: {siteConfig.contact.closedDays}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Conduct & Informational Disclaimer Strip */}
        <div className="mt-12 border-t border-white/15 pt-8 text-xs leading-relaxed text-indigo-50/75">
          <p>
            <strong className="text-white">Professional Disclaimer:</strong> The materials and guides published on this website are provided for general informational purposes regarding taxation, accounting, and corporate compliance in Bangladesh. They do not constitute formal audit, tax, or legal advice, nor does visiting this website or sending an enquiry establish a Chartered Accountant–Client relationship without a signed Engagement Letter. All regulatory deadlines and provisions remain subject to official acts, SROs, and circulars issued by the NBR, RJSC, BIDA, FRC, BSEC, and ICAB.
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-indigo-50/80 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {siteConfig.firmName}. All rights reserved. {siteConfig.firmLegalNote}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Professional Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
