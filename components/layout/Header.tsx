'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  Clock,
  ArrowUpRight,
  Shield,
  ChevronDown,
  ArrowRight,
  FileText,
  Calendar,
  CheckSquare,
  Users,
  Award,
  Landmark,
  Target,
} from 'lucide-react';
import { siteConfig } from '@/content/site';
import { servicesList } from '@/content/services';
import { industriesList } from '@/content/industries';
import { insightsArticles } from '@/content/insights';
import { Logo } from '@/components/ui/Logo';

type DropdownKey = 'about' | 'services' | 'industries' | 'insights' | null;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<DropdownKey>('services');
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const aboutLinks = [
    {
      title: 'Principal CA & Practice Profile',
      description: `Profile of ${siteConfig.ownerName} (${siteConfig.ownerCredentials})`,
      href: '/about',
      icon: Award,
    },
    {
      title: 'Leadership & Team Hierarchy',
      description: 'Principal, Partner, Director & Manager structure',
      href: '/about#team',
      icon: Users,
    },
    {
      title: 'Mission, Vision & Core Values',
      description: 'Integrity, Independence, Diligence & Confidentiality',
      href: '/about#values',
      icon: Target,
    },
    {
      title: 'Regulatory Bodies We Work With',
      description: 'ICAB, NBR, RJSC, BIDA, FRC & BSEC overview',
      href: '/about#regulators',
      icon: Landmark,
    },
  ];

  const insightResources = [
    {
      title: 'Compliance Briefings & Articles',
      description: '6 practical guides on Bangladesh tax, VAT & audit',
      href: '/insights',
      icon: FileText,
    },
    {
      title: 'BD Tax & Compliance Calendar',
      description: 'Monthly Mushak 9.1, TDS, AIT & Tax Day milestones',
      href: '/insights#tax-calendar',
      icon: Calendar,
    },
    {
      title: 'Downloadable Checklists',
      description: 'Individual Tax, RJSC Incorporation & Audit checklists',
      href: '/insights#checklists',
      icon: CheckSquare,
    },
  ];

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-header border-b border-borderline'
          : 'bg-white border-b border-borderline'
      }`}
    >
      {/* Top Institutional Credential Strip */}
      <div className="hidden lg:block bg-surface border-b border-borderline">
        <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-6 py-2 text-xs text-ink-600">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="whitespace-nowrap inline-flex items-center gap-1.5 font-semibold text-indigo-950">
              <Shield className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
              Proprietorship of {siteConfig.ownerName} (Member, ICAB)
            </span>
            <span className="text-borderline" aria-hidden="true">|</span>
            <span className="truncate">{siteConfig.location.addressLine}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
              {siteConfig.contact.hours}
            </span>
            <span className="text-borderline" aria-hidden="true">|</span>
            <a
              href={`tel:${siteConfig.contact.telephoneHref}`}
              className="inline-flex items-center gap-1 font-medium text-ink-600 hover:text-indigo-600 transition-colors"
            >
              <span className="tabular-nums">{siteConfig.contact.telephoneDisplay}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneHref}`}
              className="inline-flex items-center gap-1.5 font-semibold text-indigo-950 hover:text-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded"
            >
              <Phone className="h-3.5 w-3.5 text-indigo-600 shrink-0" aria-hidden="true" />
              <span className="tabular-nums">{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-4 sm:px-6 h-20">
        {/* Brand Logo */}
        <Link
          href="/"
          className="shrink-0 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
        >
          <Logo variant="dark" />
        </Link>

        {/* Desktop Navigation with Rich Dropdowns */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5">
          {/* 1. Home */}
          <Link
            href="/"
            aria-current={isActive('/') ? 'page' : undefined}
            className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
              isActive('/')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
            }`}
          >
            Home
          </Link>

          {/* 2. About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/about"
              aria-expanded={openDropdown === 'about'}
              aria-current={isActive('/about') ? 'page' : undefined}
              onFocus={() => handleMouseEnter('about')}
              className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                isActive('/about') || openDropdown === 'about'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === 'about' ? 'rotate-180 text-indigo-600' : 'text-ink-600'
                }`}
                aria-hidden="true"
              />
            </Link>

            {openDropdown === 'about' && (
              <div className="absolute left-0 top-full pt-2.5 w-80 z-50">
                <div className="rounded-2xl border border-borderline bg-white p-3 shadow-indigo-lg">
                  <div className="space-y-1">
                    {aboutLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface"
                        >
                          <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-indigo-950 group-hover:text-indigo-600">
                              {item.title}
                            </p>
                            <p className="text-xs text-ink-600 leading-snug mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Services Mega-Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              aria-expanded={openDropdown === 'services'}
              aria-current={isActive('/services') ? 'page' : undefined}
              onFocus={() => handleMouseEnter('services')}
              className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                isActive('/services') || openDropdown === 'services'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === 'services' ? 'rotate-180 text-indigo-600' : 'text-ink-600'
                }`}
                aria-hidden="true"
              />
            </Link>

            {openDropdown === 'services' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[680px] z-50">
                <div className="rounded-2xl border border-borderline bg-white p-5 shadow-indigo-lg">
                  <div className="flex items-center justify-between border-b border-borderline pb-3 mb-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                        9 Core Practice Areas
                      </p>
                      <p className="text-xs text-ink-600">
                        Statutory Audit, Direct &amp; Indirect Tax (NBR), RJSC/BIDA &amp; Advisory
                      </p>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                    >
                      <span>View All Services &amp; Matrix</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {servicesList.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-50 font-heading text-[11px] font-extrabold text-indigo-800 tabular-nums group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {service.number}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-indigo-950 group-hover:text-indigo-600">
                            {service.title}
                          </p>
                          <p className="text-xs text-ink-600 line-clamp-1 mt-0.5">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/industries"
              aria-expanded={openDropdown === 'industries'}
              aria-current={isActive('/industries') ? 'page' : undefined}
              onFocus={() => handleMouseEnter('industries')}
              className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                isActive('/industries') || openDropdown === 'industries'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === 'industries' ? 'rotate-180 text-indigo-600' : 'text-ink-600'
                }`}
                aria-hidden="true"
              />
            </Link>

            {openDropdown === 'industries' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[560px] z-50">
                <div className="rounded-2xl border border-borderline bg-white p-5 shadow-indigo-lg">
                  <div className="flex items-center justify-between border-b border-borderline pb-3 mb-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      10 Sectors Served in Bangladesh
                    </p>
                    <Link
                      href="/industries"
                      onClick={() => setOpenDropdown(null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                    >
                      <span>Full Sector Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {industriesList.map((ind, idx) => (
                      <Link
                        key={ind.id}
                        href={`/industries#${ind.id}`}
                        onClick={() => setOpenDropdown(null)}
                        className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-indigo-950 transition-colors hover:bg-surface hover:text-indigo-600"
                      >
                        <span className="text-[11px] font-bold text-indigo-600 tabular-nums">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="truncate">{ind.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Insights Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('insights')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/insights"
              aria-expanded={openDropdown === 'insights'}
              aria-current={isActive('/insights') ? 'page' : undefined}
              onFocus={() => handleMouseEnter('insights')}
              className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
                isActive('/insights') || openDropdown === 'insights'
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
              }`}
            >
              <span>Insights</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openDropdown === 'insights' ? 'rotate-180 text-indigo-600' : 'text-ink-600'
                }`}
                aria-hidden="true"
              />
            </Link>

            {openDropdown === 'insights' && (
              <div className="absolute right-0 top-full pt-2.5 w-[540px] z-50">
                <div className="rounded-2xl border border-borderline bg-white p-5 shadow-indigo-lg">
                  <div className="grid grid-cols-12 gap-4">
                    {/* Left: Resource Sections (5 cols) */}
                    <div className="col-span-5 border-r border-borderline pr-4 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">
                        Resources &amp; Tools
                      </p>
                      {insightResources.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="group flex items-start gap-2.5 rounded-xl p-2 transition-colors hover:bg-surface"
                          >
                            <Icon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                            <div>
                              <p className="text-xs font-bold text-indigo-950 group-hover:text-indigo-600">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-ink-600 leading-snug mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right: Featured Compliance Guides (7 cols) */}
                    <div className="col-span-7 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">
                        Featured Compliance Guides
                      </p>
                      {insightsArticles.slice(0, 4).map((article) => (
                        <Link
                          key={article.slug}
                          href={`/insights/${article.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-xl p-2 transition-colors hover:bg-surface"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                            {article.category}
                          </span>
                          <p className="text-xs font-bold text-indigo-950 hover:text-indigo-600 line-clamp-1">
                            {article.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. Contact */}
          <Link
            href="/contact"
            aria-current={isActive('/contact') ? 'page' : undefined}
            className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 ${
              isActive('/contact')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-ink-900 hover:bg-surface hover:text-indigo-600'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Primary Action CTA (Strictly Single-Line, Zero Wrapping) */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href="/contact"
            className="whitespace-nowrap inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-indigo transition-all hover:opacity-95 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-borderline bg-white p-2.5 text-indigo-950 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Expandable Submenus */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-borderline bg-white px-4 pt-3 pb-8 shadow-indigo-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-bold ${
                isActive('/') ? 'bg-indigo-50 text-indigo-600' : 'text-indigo-950 hover:bg-surface'
              }`}
            >
              Home
            </Link>

            {/* Mobile About Accordion */}
            <div className="rounded-xl border border-borderline/60">
              <div className="flex items-center justify-between">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-base font-bold text-indigo-950"
                >
                  About
                </Link>
                <button
                  type="button"
                  aria-label="Toggle mobile About links"
                  onClick={() =>
                    setMobileAccordion((prev) => (prev === 'about' ? null : 'about'))
                  }
                  className="px-4 py-3 text-indigo-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'about' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileAccordion === 'about' && (
                <div className="border-t border-borderline bg-surface px-3 py-2 space-y-1">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-indigo-950 hover:bg-indigo-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-borderline/60">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-base font-bold text-indigo-950"
                >
                  Services (9)
                </Link>
                <button
                  type="button"
                  aria-label="Toggle mobile Services links"
                  onClick={() =>
                    setMobileAccordion((prev) => (prev === 'services' ? null : 'services'))
                  }
                  className="px-4 py-3 text-indigo-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileAccordion === 'services' && (
                <div className="border-t border-borderline bg-surface px-3 py-2 space-y-1">
                  {servicesList.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-indigo-950 hover:bg-indigo-50"
                    >
                      <span className="text-[10px] font-bold text-indigo-600 tabular-nums">
                        {srv.number}
                      </span>
                      <span>{srv.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Accordion */}
            <div className="rounded-xl border border-borderline/60">
              <div className="flex items-center justify-between">
                <Link
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-base font-bold text-indigo-950"
                >
                  Industries (10)
                </Link>
                <button
                  type="button"
                  aria-label="Toggle mobile Industries links"
                  onClick={() =>
                    setMobileAccordion((prev) => (prev === 'industries' ? null : 'industries'))
                  }
                  className="px-4 py-3 text-indigo-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'industries' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileAccordion === 'industries' && (
                <div className="border-t border-borderline bg-surface px-3 py-2 grid grid-cols-1 gap-1">
                  {industriesList.map((ind) => (
                    <Link
                      key={ind.id}
                      href={`/industries#${ind.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-indigo-950 hover:bg-indigo-50"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Insights Accordion */}
            <div className="rounded-xl border border-borderline/60">
              <div className="flex items-center justify-between">
                <Link
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-base font-bold text-indigo-950"
                >
                  Insights &amp; Resources
                </Link>
                <button
                  type="button"
                  aria-label="Toggle mobile Insights links"
                  onClick={() =>
                    setMobileAccordion((prev) => (prev === 'insights' ? null : 'insights'))
                  }
                  className="px-4 py-3 text-indigo-600"
                >
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileAccordion === 'insights' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              {mobileAccordion === 'insights' && (
                <div className="border-t border-borderline bg-surface px-3 py-2 space-y-1">
                  {insightResources.map((res) => (
                    <Link
                      key={res.href}
                      href={res.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold text-indigo-950 hover:bg-indigo-50"
                    >
                      {res.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-3 text-base font-bold ${
                isActive('/contact')
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-indigo-950 hover:bg-surface'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="mt-5 border-t border-borderline pt-4">
            <p className="text-xs font-medium text-ink-600">
              Proprietorship of {siteConfig.ownerName} ({siteConfig.ownerCredentials})
            </p>
            <p className="mt-1 text-xs text-ink-600">{siteConfig.contact.hours}</p>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3.5 text-sm font-bold text-white shadow-indigo"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
