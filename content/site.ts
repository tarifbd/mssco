export type Locale = 'en' | 'bn';

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  labelBn: string;
  description: string;
  isPlaceholder: boolean;
}

export const siteConfig = {
  firmName: 'M. S. Salekin & Co.',
  firmShortName: 'MS Salekin & Co',
  firmLegalNote:
    'M. S. Salekin & Co. is a proprietorship Chartered Accountancy practice of Mohammad Sirajus Salekin, FCA.',
  firmSubline: 'Chartered Accountants',
  ownerName: 'Mohammad Sirajus Salekin, FCA',
  ownerPhoto: '/images/proprietor-salekin.jpg',
  ownerCredentials: 'Fellow Chartered Accountant (FCA), Member of ICAB',
  ownerEnrolmentPlaceholder: 'Fellow Member (FCA), The Institute of Chartered Accountants of Bangladesh (ICAB)',
  tagline: 'Clarity in numbers. Confidence in decisions.',
  taglineBn: 'হিসাবের স্বচ্ছতা। সিদ্ধান্তে আত্মবিশ্বাস।',
  description:
    'M. S. Salekin & Co. (Chartered Accountants) is a proprietorship practice of Mohammad Sirajus Salekin, FCA located at Purana Paltan Line, Dhaka-1000, Bangladesh, offering statutory audit, NBR income tax, VAT & customs advisory, RJSC & BIDA corporate compliance, bookkeeping, payroll, and business advisory services.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mssalekin.com',
  location: {
    addressLine: 'House No: 49/1/B (1st Floor), Purana Paltan Line, Dhaka-1000, Bangladesh',
    cityPlaceholder: 'Dhaka',
    country: 'Bangladesh',
    postalCodePlaceholder: '1000',
    googleMapsEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=90.4050%2C23.7290%2C90.4200%2C23.7390&layer=mapnik&marker=23.7342%2C90.4128',
    mapNotice:
      'Chambers: House No: 49/1/B (1st Floor), Purana Paltan Line, Dhaka-1000, Bangladesh.',
  },
  contact: {
    phoneDisplay: '+88 01916 818858',
    phoneHref: '+8801916818858',
    telephoneDisplay: '+88 02 48319841',
    telephoneHref: '+880248319841',
    whatsappDisplay: '+88 01916 818858',
    whatsappNumber: '8801916818858',
    emailDisplay: 'audit@mssalekin.com',
    emailSecondary: 'salekin.mss@gmail.com',
    emailHref: 'audit@mssalekin.com',
    websiteDisplay: 'www.mssalekin.com',
    hours: 'Sun–Thu, 9:30 AM – 6:00 PM (BST)',
    hoursBn: 'রবি–বৃহস্পতি, সকাল ৯:৩০ – সন্ধ্যা ৬:০০',
    closedDays: 'Friday, Saturday & Government Holidays',
    consultationBookingUrl: '/contact#book-consultation',
    calendlyPlaceholderUrl: '/contact#enquiry-form',
  },
  socialPlaceholders: {
    linkedin: 'https://www.linkedin.com',
    facebook: 'https://www.facebook.com',
  },
  trustBadges: [
    {
      label: 'Fellow Member (FCA), ICAB',
      labelBn: 'ফেলো সদস্য (FCA), আইসিএবি',
      detail: 'The Institute of Chartered Accountants of Bangladesh',
    },
    {
      label: 'NBR Tax & VAT Practice',
      labelBn: 'এনবিআর আয়কর ও ভ্যাট পরামর্শক',
      detail: 'Income Tax Act 2023 & VAT Act 2012 Compliance',
    },
    {
      label: 'Confidential & Compliant',
      labelBn: 'গোপনীয়তা ও নৈতিক মানদণ্ডে অবিচল',
      detail: 'Strict adherence to ICAB Code of Ethics & BFRS/IFRS',
    },
  ],
  stats: [
    {
      id: 'experience',
      value: 12,
      suffix: '+',
      label: 'Years of Experience',
      labelBn: 'বছরের পেশাগত অভিজ্ঞতা',
      description: 'Statutory Audit, Taxation & Corporate Advisory',
      isPlaceholder: true,
    },
    {
      id: 'clients',
      value: 240,
      suffix: '+',
      label: 'Clients Served',
      labelBn: 'সেবাপ্রাপ্ত প্রতিষ্ঠান ও করদাতা',
      description: 'Companies, SMEs, NGOs & Individual Taxpayers',
      isPlaceholder: true,
    },
    {
      id: 'returns',
      value: 950,
      suffix: '+',
      label: 'Returns & Filings Completed',
      labelBn: 'আয়কর ও ভ্যাট রিটার্ন দাখিল',
      description: 'NBR Income Tax, Monthly VAT & RJSC Returns',
      isPlaceholder: true,
    },
    {
      id: 'audits',
      value: 180,
      suffix: '+',
      label: 'Audits & Reviews Completed',
      labelBn: 'সম্পন্ন অডিট ও অ্যাসুরেন্স কার্য',
      description: 'Statutory, Tax, Internal & NGO Project Audits',
      isPlaceholder: true,
    },
  ] as StatItem[],
  whyChooseUs: [
    {
      title: 'Direct Principal CA Oversight',
      titleBn: 'প্রিন্সিপাল সিএ-র সরাসরি তত্ত্বাবধান',
      description:
        'As a dedicated proprietorship practice, every engagement is reviewed and signed off directly by Mohammad Sirajus Salekin, FCA rather than being handed off entirely to junior staff.',
      icon: 'UserCheck',
    },
    {
      title: 'Disciplined Statutory Timelines',
      titleBn: 'নির্ধারিত সময়ে রিটার্ন ও প্রতিবেদন দাখিল',
      description:
        'Monthly VAT returns (15th of each month), withholding tax statements, Tax Day submissions, and RJSC annual filings are tracked on a structured compliance calendar.',
      icon: 'Clock',
    },
    {
      title: 'Strict Client Confidentiality',
      titleBn: 'তথ্যের সর্বোচ্চ গোপনীয়তা ও নিরাপত্তা',
      description:
        'Financial records, payroll registers, tax files, and board resolutions are handled under strict professional secrecy and role-restricted document workflows.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Transparent, Written Scope & Fees',
      titleBn: 'স্বচ্ছ কর্মপরিধি ও নির্ধারিত ফি কাঠামো',
      description:
        'Every engagement begins with a formal engagement letter detailing deliverables, document checklists, statutory fees, and professional charges in BDT (৳).',
      icon: 'FileCheck2',
    },
    {
      title: 'Uncompromising Ethical Practice',
      titleBn: 'পেশাগত সততা ও নৈতিক মানদণ্ড',
      description:
        'We operate in strict conformity with the ICAB Code of Ethics, International Standards on Auditing (ISA), IFRS/BFRS, and the laws of Bangladesh—without exaggerated claims.',
      icon: 'Scale',
    },
    {
      title: 'Practical Regulatory Navigation',
      titleBn: 'স্থানীয় নিয়ন্ত্রক সংস্থার বিধিমালার বাস্তব অভিজ্ঞতা',
      description:
        'From NBR Circle assessments and Mushak 9.1 filings to RJSC name clearances and BIDA work permits, we translate complex statutory notices into clear action steps.',
      icon: 'Compass',
    },
  ],
  methodology: [
    {
      step: '01',
      title: 'Discover & Diagnose',
      titleBn: 'পর্যালোচনা ও সমস্যা নির্ণয়',
      summary:
        'We review your entity structure, prior tax/VAT filings, chart of accounts, and regulatory exposure during a confidential diagnostic consultation.',
      deliverable: 'Initial Compliance Gap Note & Document Checklist',
    },
    {
      step: '02',
      title: 'Plan & Scope',
      titleBn: 'পরিকল্পনা ও কর্মপরিধি নির্ধারণ',
      summary:
        'We issue a clear engagement letter specifying statutory deadlines, applicable provisions (Income Tax Act 2023, VAT Act 2012, Companies Act 1994), responsibilities, and timelines.',
      deliverable: 'Written Engagement Letter & Milestone Schedule',
    },
    {
      step: '03',
      title: 'Execute & Verify',
      titleBn: 'বাস্তবায়ন ও যাচাইকরণ',
      summary:
        'Our team performs audit testing, reconciles books with bank and Mushak ledgers, prepares computations, and subjects every working paper to Principal CA review.',
      deliverable: 'Draft Reports, Tax Computations & Statutory Forms',
    },
    {
      step: '04',
      title: 'Review, File & Support',
      titleBn: 'চূড়ান্ত দাখিল ও পরবর্তী সহায়তা',
      summary:
        'We walk management through our findings, complete statutory submissions, archive acknowledgement receipts, and set reminders for upcoming compliance cycles.',
      deliverable: 'Signed Reports, Filing Receipts & Forward Compliance Calendar',
    },
  ],
  about: {
    principalBio: [
      'Mohammad Sirajus Salekin, FCA, is the Proprietor and Principal of M. S. Salekin & Co., Chartered Accountants. As a Fellow Member (FCA) of The Institute of Chartered Accountants of Bangladesh (ICAB), he established the practice with a singular commitment: bringing institutional-grade audit rigour, tax clarity, and regulatory discipline to businesses and individuals operating in Bangladesh.',
      'Throughout his professional career, Mohammad Sirajus Salekin, FCA has advised private and public limited companies, small and medium enterprises (SMEs), export-oriented manufacturers, IT exporters, foreign-invested subsidiaries, and non-governmental organisations across statutory audit, direct and indirect taxation, corporate secretarial compliance, and financial systems design.',
    ],
    philosophyQuote:
      '“Reliable financial reporting and proactive tax compliance are not merely statutory obligations—they are the foundation upon which business owners, lenders, and investors make confident decisions.”',
    qualifications: [
      'Fellow Chartered Accountant (FCA) — The Institute of Chartered Accountants of Bangladesh (ICAB)',
      'Proprietor and Principal — M. S. Salekin & Co., Chartered Accountants',
      'Income Tax, VAT & Corporate Regulatory Practice — Bangladesh',
    ],
    careerTimeline: [
      {
        period: 'Present',
        role: 'Proprietor and Principal',
        organization: 'M. S. Salekin & Co., Chartered Accountants (Purana Paltan Line, Dhaka-1000)',
        summary:
          'Leading statutory audit, taxation, VAT advisory, RJSC corporate compliance, and financial consultancy engagements for local and international clients.',
      },
      {
        period: 'Fellow Membership',
        role: 'Fellow Chartered Accountant (FCA)',
        organization: 'The Institute of Chartered Accountants of Bangladesh (ICAB)',
        summary:
          'Elevated to Fellow Member (FCA) of ICAB in recognition of extensive post-qualification practice and professional leadership.',
      },
      {
        period: 'Foundational Training',
        role: 'Chartered Accountancy Qualification & Assurance Practice',
        organization: 'Registered under The Institute of Chartered Accountants of Bangladesh (ICAB)',
        summary:
          'Completed rigorous ICAB professional examinations and articleship training covering external audit, BFRS/IFRS financial reporting, and NBR taxation.',
      },
    ],
    firmStory: [
      'M. S. Salekin & Co. (Chartered Accountants) is a proprietorship practice founded by Mohammad Sirajus Salekin, FCA, headquartered at Purana Paltan Line, Dhaka-1000, to serve organizations that value direct principal-level engagement alongside methodical technical execution.',
      'In Bangladesh’s evolving regulatory landscape—marked by the Income Tax Act 2023, the Value Added Tax and Supplementary Duty Act 2012, digital return platforms, and heightened Financial Reporting Council (FRC) oversight—enterprises require timely, accurate, and candid professional guidance. Our practice bridges the gap between complex statutory texts and day-to-day operational finance.',
    ],
    mission:
      'To deliver independent assurance, accurate tax and regulatory compliance, and practical financial insight that empower organisations and individuals in Bangladesh to operate with transparency and confidence.',
    vision:
      'To be recognized as a trusted, ethically grounded Chartered Accountancy practice known for technical precision, responsiveness, and enduring professional integrity.',
    coreValues: [
      {
        title: 'Integrity',
        description:
          'We uphold truthfulness and objectivity in every audit opinion, tax computation, and advisory report—never compromising professional standards.',
      },
      {
        title: 'Independence',
        description:
          'In assurance engagements, we maintain independence of both mind and appearance in accordance with the ICAB Code of Ethics and International Standards on Auditing.',
      },
      {
        title: 'Diligence',
        description:
          'Every voucher, challan, withholding deduction, and statutory schedule is cross-checked against primary documentation and current law.',
      },
      {
        title: 'Confidentiality',
        description:
          'Client financial data, commercial strategies, and personal tax documents are safeguarded with strict access controls and professional discretion.',
      },
    ],
    regulatoryBodies: [
      {
        acronym: 'ICAB',
        name: 'The Institute of Chartered Accountants of Bangladesh',
        relationship: 'Professional Governing Body (Principal is a Fellow Member — FCA)',
      },
      {
        acronym: 'NBR',
        name: 'National Board of Revenue',
        relationship: 'Direct Tax (Income Tax) & Indirect Tax (VAT & Customs) Regulatory Authority',
      },
      {
        acronym: 'RJSC',
        name: 'Registrar of Joint Stock Companies and Firms',
        relationship: 'Company Incorporation, Annual Returns & Statutory Filings Authority',
      },
      {
        acronym: 'BIDA',
        name: 'Bangladesh Investment Development Authority',
        relationship: 'Industrial Registration, Branch/Liaison Office & Work Permit Authority',
      },
      {
        acronym: 'FRC',
        name: 'Financial Reporting Council Bangladesh',
        relationship: 'Financial Reporting & Auditing Standards Oversight Authority',
      },
      {
        acronym: 'BSEC / NGOAB',
        name: 'Bangladesh Securities and Exchange Commission & NGO Affairs Bureau',
        relationship: 'Capital Market & Development Sector Regulatory Authorities',
      },
    ],
  },
  // 4-Tier Leadership & Team Hierarchy (Row 1: Principal -> Row 2: Partner -> Row 3: Director -> Row 4: Manager)
  teamHierarchy: {
    principal: {
      tierLabel: 'Row 01 • Proprietor & Principal',
      tierLabelBn: 'প্রথম স্তর • প্রোপ্রাইটর ও প্রিন্সিপাল',
      name: 'Mohammad Sirajus Salekin, FCA',
      photo: '/images/proprietor-salekin.jpg',
      designation: 'Proprietor and Principal',
      designationBn: 'প্রোপ্রাইটর ও প্রিন্সিপাল',
      credentials: 'FCA, Fellow Member of ICAB',
      enrolmentNote: 'M. S. Salekin & Co., Chartered Accountants',
      bio: 'Leads overall firm governance, engagement quality control, statutory audit sign-off, complex NBR tax & appellate representation, and strategic financial advisory.',
      specializations: [
        'Statutory Audit & Assurance (ISA)',
        'Corporate & International Tax (NBR)',
        'Business Valuation & Advisory',
      ],
    },
    partners: [
      {
        id: 'partner-1',
        name: '[Partner Name Placeholder]',
        designation: 'Partner — Audit, Assurance & Financial Reporting',
        designationBn: 'পার্টনার — অডিট, অ্যাসুরেন্স ও ফিন্যান্সিয়াল রিপোর্টিং',
        credentials: '[FCA / ACA, Member of ICAB — Incoming Partner Slot]',
        badge: 'Incoming / Next Partner Slot',
        summary:
          'Designated leadership tier for incoming Partner appointments overseeing statutory assurance, IFRS/BFRS technical review, and FRC compliance.',
        focusAreas: ['External Audit', 'IFRS / BFRS Review', 'Quality Control (ISQM)'],
      },
      {
        id: 'partner-2',
        name: '[Partner Name Placeholder]',
        designation: 'Partner — Taxation, VAT & Corporate Regulatory Advisory',
        designationBn: 'পার্টনার — আয়কর, ভ্যাট ও কর্পোরেট রেগুলেটরি অ্যাডভাইজরি',
        credentials: '[FCA / ACA, Member of ICAB — Incoming Partner Slot]',
        badge: 'Incoming / Next Partner Slot',
        summary:
          'Designated leadership tier for incoming Partner appointments leading corporate tax planning, Transfer Pricing, VAT litigation, and BIDA/RJSC structuring.',
        focusAreas: ['NBR Tax & Appeals', 'VAT & Customs', 'Transfer Pricing & FDI'],
      },
    ],
    directors: [
      {
        id: 'director-1',
        name: '[Director Name Placeholder]',
        designation: 'Director — Audit & Risk Advisory',
        designationBn: 'ডিরেক্টর — অডিট ও রিস্ক অ্যাডভাইজরি',
        credentials: '[ACA / Qualified Professional — Placeholder]',
        summary:
          'Directs multi-team audit fieldwork, NGOAB FD-4 project audits, internal control assessments, and SOP implementation across manufacturing and service sectors.',
        focusAreas: ['Statutory & NGO Audit', 'Internal Audit & SOPs', 'Forensic & Risk Review'],
      },
      {
        id: 'director-2',
        name: '[Director Name Placeholder]',
        designation: 'Director — Direct & Indirect Taxation (NBR)',
        designationBn: 'ডিরেক্টর — প্রত্যক্ষ ও পরোক্ষ কর (এনবিআর)',
        credentials: '[ACA / ITP / Tax Specialist — Placeholder]',
        summary:
          'Supervises corporate and individual income tax assessments, withholding tax audits, Mushak 4.3 cost declarations, and VAT Commissionerate hearings.',
        focusAreas: ['Income Tax Act 2023', 'VAT & SD Act 2012', 'Tax Tribunal & Hearing Files'],
      },
      {
        id: 'director-3',
        name: '[Director Name Placeholder]',
        designation: 'Director — Corporate Secretarial & Financial Consultancy',
        designationBn: 'ডিরেক্টর — কর্পোরেট সেক্রেটারিয়াল ও ফিন্যান্সিয়াল কনসালটেন্সি',
        credentials: '[ACA / CFA / MBA — Placeholder]',
        summary:
          'Leads RJSC incorporations, BIDA branch/liaison office permissions, Bangladesh Bank Section 18B filings, project feasibility studies, and bank CMA packs.',
        focusAreas: ['RJSC & BIDA Compliance', 'Project Profiles & CMA', 'Due Diligence & Valuation'],
      },
    ],
    managers: [
      {
        id: 'manager-1',
        name: '[Senior Manager Name Placeholder]',
        designation: 'Senior Manager — Audit & Assurance',
        designationBn: 'সিনিয়র ম্যানেজার — অডিট ও অ্যাসুরেন্স',
        credentials: '[CA (CC) / Articled Senior — Placeholder]',
        department: 'Assurance & Financial Reporting',
        summary:
          'Manages on-site audit execution, working paper verification, physical inventory/asset verification, and draft financial statement schedules.',
      },
      {
        id: 'manager-2',
        name: '[Manager Name Placeholder]',
        designation: 'Manager — Corporate & Individual Income Tax',
        designationBn: 'ম্যানেজার — কর্পোরেট ও ব্যক্তি আয়কর',
        credentials: '[ITP / Tax Practitioner — Placeholder]',
        department: 'Direct Tax (NBR)',
        summary:
          'Handles corporate tax computations, individual wealth reconciliations (IT-10B), monthly TDS returns, and Taxes Circle submissions.',
      },
      {
        id: 'manager-3',
        name: '[Manager Name Placeholder]',
        designation: 'Manager — VAT, Customs & Mushak Compliance',
        designationBn: 'ম্যানেজার — ভ্যাট, কাস্টমস ও মূসক কমপ্লায়েন্স',
        credentials: '[VAT Specialist / Consultant — Placeholder]',
        department: 'Indirect Tax (VAT & Customs)',
        summary:
          'Coordinates monthly Mushak 9.1 filings by the 15th, Mushak 6.1/6.2/6.3 registers, VDS reconciliations, and e-BIN registrations.',
      },
      {
        id: 'manager-4',
        name: '[Manager Name Placeholder]',
        designation: 'Manager — Outsourced Accounting, Payroll & RJSC',
        designationBn: 'ম্যানেজার — অ্যাকাউন্টিং, পেরোল ও আরজেএসসি',
        credentials: '[Accounting & ERP Specialist — Placeholder]',
        department: 'Bookkeeping, Payroll & Secretarial',
        summary:
          'Manages monthly Tally/QuickBooks closing, bank reconciliations, confidential employee payroll & salary TDS, and annual RJSC filings.',
      },
    ],
  },
  testimonialsPlaceholder: [
    {
      quote:
        '[Client testimonial placeholder — To be added by the firm owner only where permissible under professional conduct guidelines.]',
      attribution: '[Authorized Client Representative, Industry Sector — Placeholder]',
    },
    {
      quote:
        '[Client feedback note placeholder — Replace with verified client commentary in /content/site.ts.]',
      attribution: '[Managing Director, Private Limited Company — Placeholder]',
    },
  ],
  ui: {
    en: {
      navHome: 'Home',
      navAbout: 'About',
      navServices: 'Services',
      navIndustries: 'Industries',
      navInsights: 'Insights & Resources',
      navContact: 'Contact',
      bookConsultation: 'Book a Consultation',
      exploreServices: 'Explore Services',
      callNow: 'Call',
      whatsapp: 'WhatsApp',
      enquire: 'Enquire',
      learnMore: 'Learn more',
    },
    bn: {
      navHome: 'হোম',
      navAbout: 'আমাদের সম্পর্কে',
      navServices: 'সেবাসমূহ',
      navIndustries: 'শিল্পখাত',
      navInsights: 'রিসোর্স ও কর নির্দেশিকা',
      navContact: 'যোগাযোগ',
      bookConsultation: 'পরামর্শের সময় নিন',
      exploreServices: 'সেবাসমূহ দেখুন',
      callNow: 'কল করুন',
      whatsapp: 'হোয়াটসঅ্যাপ',
      enquire: 'জিজ্ঞাসা',
      learnMore: 'বিস্তারিত দেখুন',
    },
  },
};
