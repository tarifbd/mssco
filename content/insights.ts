export interface InsightArticle {
  slug: string;
  title: string;
  titleBn: string;
  category: 'Income Tax' | 'VAT & Customs' | 'Corporate Compliance' | 'Audit & Assurance' | 'Accounting & Bookkeeping';
  readingTime: string;
  publishedDate: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  relatedServiceSlug: string;
}

export interface TaxCalendarEvent {
  id: string;
  frequency: 'Monthly' | 'Semi-Annual / Periodic' | 'Annual';
  dueDateLabel: string;
  title: string;
  authority: 'NBR (VAT)' | 'NBR (Income Tax)' | 'RJSC' | 'BIDA / Labour';
  description: string;
  verificationNote: string;
}

export interface DownloadableChecklist {
  id: string;
  title: string;
  category: string;
  description: string;
  items: string[];
}

export const insightsArticles: InsightArticle[] = [
  {
    slug: 'individual-tax-return-checklist-bangladesh',
    title: 'Individual Tax Return Checklist in Bangladesh: Documents, Wealth Statement & Filing Steps',
    titleBn: 'ব্যক্তি করদাতার আয়কর রিটার্ন চেকলিস্ট: প্রয়োজনীয় কাগজপত্র ও সম্পদ বিবরণী',
    category: 'Income Tax',
    readingTime: '6 min read',
    publishedDate: '2026-09-15',
    excerpt:
      'A practical, step-by-step preparation guide for salaried individuals, company directors, and business proprietors preparing their annual income tax return for the National Board of Revenue (NBR).',
    keyTakeaways: [
      'Gather full July–June bank statements and TDS certificates before computing taxable income.',
      'Ensure your closing net wealth reconciles accurately with opening wealth, current-year net income, exempt receipts, and family lifestyle expenses.',
      'Keep Proof of Submission of Return (PSR) archived—it is required for over 40 statutory and banking services in Bangladesh.',
    ],
    sections: [
      {
        heading: '1. Understanding the Income Year & Tax Day Framework',
        paragraphs: [
          'In Bangladesh, the standard income year for individual taxpayers runs from July 1 to June 30, and the corresponding assessment year immediately follows. Under the Income Tax Act 2023, individual taxpayers are required to file their annual return on or before Tax Day (ordinarily November 30, subject to any official notifications by the National Board of Revenue).',
          'Submitting an accurate return on time secures your Proof of Submission of Return (PSR) and allows you to claim statutory investment tax rebates while avoiding delay interest or penalties.',
        ],
      },
      {
        heading: '2. Core Documents Required Before You Begin',
        paragraphs: [
          'Most errors in personal tax returns occur when taxpayers rely on estimates rather than primary certificates. Before drafting your computation, assemble the following file for the July–June income year:',
        ],
        bullets: [
          '12-digit e-TIN Certificate and a copy of the prior assessment year’s filed return and Acknowledgement Receipt (PSR).',
          'Bank statements (July 1 to June 30) and bank balance certificates for all savings, current, FDR, and DPS accounts.',
          'Employer Salary Certificate showing Basic Pay, Allowances, Festival Bonuses, Recognized Provident Fund contributions, and monthly tax deducted at source (TDS) with challan references.',
          'BO (Beneficiary Owner) account portfolio statement, dividend warrants, and capital gain/loss summary as of June 30.',
          'Sanchayapatra (National Savings Certificates) encashment and interest/TDS certificates issued by the bank or bureau.',
          'Supporting deeds, mutation records, or loan statements for any land, apartment, or motor vehicle bought or sold during the year.',
        ],
      },
      {
        heading: '3. Eligible Investments for Tax Rebate',
        paragraphs: [
          'The Income Tax Act 2023 permits individual taxpayers to claim a tax rebate on eligible investments made during the July–June income year, subject to statutory ceilings based on taxable income and total allowable investment limits. Common qualifying instruments include:',
        ],
        bullets: [
          'Deposit Pension Scheme (DPS) instalments within the statutory annual limit specified in the current Finance Act.',
          'Investments in approved Government Securities, Treasury Bonds, and Sanchayapatra within prescribed caps.',
          'Contributions to a Recognized Provident Fund (both employee and employer portions, as applicable).',
          'Life insurance premiums paid in Bangladesh (within policy-value limits) and investments in listed securities or mutual funds as permitted.',
        ],
      },
      {
        heading: '4. Reconciling the Statement of Assets, Liabilities & Expenses',
        paragraphs: [
          'For an individual return to withstand scrutiny at the Taxes Circle, the Wealth Statement (Statement of Assets and Liabilities as of June 30) and Lifestyle Expense Statement must balance mathematically to the Taka.',
          'Specifically, Opening Net Wealth (from June 30 of the previous year) plus Total Inflows (Taxable Income + Tax-Exempt Income + Documented Gifts/Inheritances + Realised Capital Gains) minus Total Outflows (Living & Family Expenses + Income Tax Paid + Loss/Deductions) must equal your Closing Net Wealth on June 30.',
        ],
      },
    ],
    relatedServiceSlug: 'income-tax-services',
  },
  {
    slug: 'vat-basics-for-smes-bangladesh',
    title: 'VAT Basics for SMEs in Bangladesh: BIN, Mushak 9.1, VDS & Input Tax Credits',
    titleBn: 'এসএমই ব্যবসায়ের জন্য ভ্যাট নির্দেশিকা: বিআইএন, মূসক ৯.১, ভিডিএস ও উপকরণ কর রেয়াত',
    category: 'VAT & Customs',
    readingTime: '7 min read',
    publishedDate: '2026-09-22',
    excerpt:
      'How small and medium enterprises in Bangladesh can structure monthly VAT compliance under the VAT and Supplementary Duty Act 2012 without losing legitimate input credits.',
    keyTakeaways: [
      'Monthly VAT returns (Mushak 9.1) must be filed on or before the 15th day of the following month—even if there were zero transactions (Nil return).',
      'Always issue and collect formal Mushak 6.3 Tax Invoices to protect input tax rebates and client VDS deductions.',
      'Reconcile your 12 monthly Mushak 9.1 returns against your annual financial statements before closing the year.',
    ],
    sections: [
      {
        heading: '1. e-BIN Registration & Choosing the Right VAT Regime',
        paragraphs: [
          'Under the Value Added Tax and Supplementary Duty Act 2012, eligible businesses must obtain a 13-digit Business Identification Number (e-BIN) from the National Board of Revenue (NBR). Depending on your annual turnover, nature of supply (manufacturing, trading, service, or import/export), and statutory thresholds, your entity may fall under standard VAT registration, truncated rates, or Turnover Tax.',
          'Note that entities opting for reduced/truncated VAT rates generally cannot claim input tax credit (rebate), whereas standard-rate (15%) registered taxpayers can offset eligible input VAT against output VAT.',
        ],
      },
      {
        heading: '2. Essential Mushak Forms Every SME Should Maintain',
        paragraphs: [
          'VAT compliance is built on contemporaneous register maintenance rather than year-end reconstruction. Key statutory forms include:',
        ],
        bullets: [
          'Mushak 6.1 (Purchase Register) & Mushak 6.2 (Sales Register) or Mushak 6.2.1 (Combined Register for traders).',
          'Mushak 6.3 (Tax Invoice): Issued with every taxable supply of goods or services.',
          'Mushak 4.3 (Input-Output Coefficient Declaration): Mandatory for manufacturers and commercial suppliers prior to supplying goods.',
          'Mushak 6.6 (Withholding VAT Certificate): Issued when VAT is Deducted at Source (VDS) by a withholding entity.',
          'Mushak 9.1 (Monthly VAT Return): Submitted on or before the 15th of the following month.',
        ],
      },
      {
        heading: '3. Protecting Your Input Tax Credit (Rebate)',
        paragraphs: [
          'A frequent source of VAT disputes in Bangladesh is the disallowance of input tax credits during audit. Under the VAT & SD Act 2012, claiming an input tax rebate requires strict adherence to procedural conditions: the purchase must be declared in your Mushak 4.3, supported by a valid Mushak 6.3 invoice or Bill of Entry, recorded in Mushak 6.1, paid through banking channels where required, and claimed within the statutory tax periods.',
        ],
      },
    ],
    relatedServiceSlug: 'vat-customs-advisory',
  },
  {
    slug: 'steps-to-register-private-limited-company-rjsc',
    title: 'Steps to Register a Private Limited Company at RJSC in Bangladesh',
    titleBn: 'বাংলাদেশে প্রাইভেট লিমিটেড কোম্পানি নিবন্ধনের ধাপসমূহ (RJSC)',
    category: 'Corporate Compliance',
    readingTime: '6 min read',
    publishedDate: '2026-10-01',
    excerpt:
      'An end-to-end walkthrough of incorporating a Private Limited Company with the Registrar of Joint Stock Companies and Firms (RJSC) and completing post-incorporation tax and trade licenses.',
    keyTakeaways: [
      'Incorporation begins with RJSC Name Clearance and carefully drafted Memorandum & Articles of Association (MoA & AoA).',
      'Foreign shareholders must remit paid-up capital through an Authorized Dealer (AD) bank and obtain an Encashment Certificate.',
      'Incorporation is only step one—immediately obtain your e-TIN, Trade License, bank account, and 13-digit e-BIN.',
    ],
    sections: [
      {
        heading: '1. Pre-Incorporation Planning: Shareholding, Directors & Capital',
        paragraphs: [
          'Under the Companies Act 1994, a Private Limited Company in Bangladesh requires a minimum of 2 and a maximum of 50 shareholders, and at least 2 directors (for a single individual founder, a One Person Company—OPC—is available under amended provisions). Before applying, founders should agree on Authorized Capital, Paid-up Capital, shareholding ratios, and the company’s primary business objectives.',
        ],
      },
      {
        heading: '2. Step-by-Step RJSC Incorporation Workflow',
        paragraphs: [
          'The incorporation process with the Registrar of Joint Stock Companies and Firms (RJSC) follows a structured sequence:',
        ],
        bullets: [
          'Step 1 — Name Clearance: Search the RJSC database and apply for name reservation. Once approved, the name clearance remains valid for a defined window (extendable prior to expiry).',
          'Step 2 — Drafting MoA & AoA: Prepare the Memorandum of Association (defining business object clauses and authorized capital) and Articles of Association (defining internal governance, quorum, and director powers).',
          'Step 3 — Bank Account & Foreign Equity Encashment (For Foreign Shareholders): Open a provisional bank account in the proposed company name, remit the foreign shareholder’s paid-up capital in foreign currency, and obtain the bank Encashment Certificate.',
          'Step 4 — RJSC Filing & Fee Deposit: Upload subscriber forms (Form I, Form VI, Form IX, Form X, Form XII), signed MoA/AoA, NIDs, and e-TINs of Bangladeshi directors, and pay statutory stamp duty and registration fees.',
          'Step 5 — Issuance of Digital Certificates: Upon verification, RJSC issues the Certificate of Incorporation, certified MoA/AoA, and Form XII (Particulars of Directors).',
        ],
      },
      {
        heading: '3. Mandatory Post-Incorporation Compliance Checklist',
        paragraphs: [
          'Once incorporated, a new company must establish its operational and tax identity before commencing commercial invoicing:',
        ],
        bullets: [
          'Obtain a 12-digit Corporate e-TIN from the National Board of Revenue (NBR).',
          'Procure a commercial Trade License from the respective City Corporation or Municipality using the registered office lease agreement.',
          'Convert the provisional bank account into an active corporate current account via a Board Resolution.',
          'Register for a 13-digit e-BIN (VAT Registration) and appoint the company’s first Statutory Auditor.',
        ],
      },
    ],
    relatedServiceSlug: 'company-formation-compliance',
  },
  {
    slug: 'why-annual-statutory-audit-matters',
    title: 'Why Annual Statutory Audit Matters Beyond Regulatory Filing',
    titleBn: 'বার্ষিক স্ট্যাট্যুটরি অডিট কেন কেবল আইনি আনুষ্ঠানিকতার চেয়ে বেশি গুরুত্বপূর্ণ',
    category: 'Audit & Assurance',
    readingTime: '5 min read',
    publishedDate: '2026-10-08',
    excerpt:
      'How a well-executed statutory audit and Management Letter protect Bangladeshi companies from tax disallowances, internal control leakage, and banking bottlenecks.',
    keyTakeaways: [
      'Audited financial statements are mandatory for RJSC annual filings, NBR corporate tax returns, and commercial bank credit renewals.',
      'Early audit planning prevents year-end scrambles over bank confirmations, physical stock counts, and TDS/VDS reconciliations.',
      'The Management Letter issued alongside the audit opinion provides leadership with an actionable roadmap to tighten internal controls.',
    ],
    sections: [
      {
        heading: '1. The Regulatory Mandate in Bangladesh',
        paragraphs: [
          'Under the Companies Act 1994 and the Income Tax Act 2023, limited companies and specified organizations in Bangladesh must have their annual financial statements audited by an independent firm of Chartered Accountants registered with ICAB. With the Document Verification System (DVC) and Financial Reporting Council (FRC) standards in effect, regulators, banks, and tax authorities expect complete alignment between audited statements and statutory returns.',
        ],
      },
      {
        heading: '2. Detecting Tax & VAT Exposures Before Assessment',
        paragraphs: [
          'A rigorous audit tests whether expenses exceeding statutory limits were routed through banking channels, whether TDS and VDS were properly deducted and deposited, and whether annual revenue matches the sum of 12 monthly Mushak 9.1 VAT returns. Catching and rectifying reconciliations during the audit phase saves substantial time and exposure during NBR Circle assessments.',
        ],
      },
      {
        heading: '3. Strengthening Governance & Credit Readiness',
        paragraphs: [
          'Commercial banks in Bangladesh evaluate corporate borrowers under Bangladesh Bank’s Internal Credit Risk Rating System (ICRRS). Clean, timely audited financial statements with clear disclosure notes and healthy financial ratios directly support credit rating outcomes, working capital renewals, and LC limit enhancements.',
        ],
      },
    ],
    relatedServiceSlug: 'audit-assurance',
  },
  {
    slug: 'tax-planning-for-freelancers-it-exporters',
    title: 'Tax Compliance & Remittance Documentation for Freelancers and IT Exporters in Bangladesh',
    titleBn: 'ফ্রিল্যান্সার ও আইটি রপ্তানিকারকদের আয়কর কমপ্লায়েন্স ও রেমিট্যান্স ডকুমেন্টেশন',
    category: 'Income Tax',
    readingTime: '6 min read',
    publishedDate: '2026-10-14',
    excerpt:
      'What software firms, ITES exporters, and independent freelancers in Bangladesh need to know about inward remittance documentation, Encashment Certificates, and annual return filing.',
    keyTakeaways: [
      'Tax exemption or special treatment on eligible IT/ITES income does NOT exempt a taxpayer from filing an annual income tax return.',
      'Every foreign remittance should be supported by an AD Bank Encashment Certificate / Form-C specifying the nature of service.',
      'Cash incentives received and non-IT income streams must be separately evaluated and disclosed in the return.',
    ],
    sections: [
      {
        heading: '1. Exemption vs. Mandatory Return Filing',
        paragraphs: [
          'A common misconception among independent freelancers and software entrepreneurs in Bangladesh is that if their export earnings qualify for tax exemption under current statutory provisions, they do not need an e-TIN or an annual tax return. In reality, claiming tax-exempt treatment requires filing a formal annual return and disclosing the exempt income along with supporting banking documentation.',
        ],
      },
      {
        heading: '2. Maintaining the Remittance Audit Trail',
        paragraphs: [
          'To substantiate that inward remittances represent qualifying software development, ITES, or freelance digital service exports, taxpayers should preserve a complete documentary trail for each income year:',
        ],
        bullets: [
          'Authorized Dealer (AD) Bank Encashment Certificates and Form-C copies clearly stating the purpose of inward remittance.',
          'Client contracts, work orders, or platform payout statements (e.g., Upwork, Fiverr, Payoneer-to-Bank transfer records, or direct wire invoices).',
          'Full July–June bank statements showing the credit of foreign proceeds into the Bangladeshi bank account.',
          'BASIS membership or BIDA/RJSC registration documents (for corporate IT/ITES entities).',
        ],
      },
      {
        heading: '3. Building Credible Personal & Corporate Wealth Records',
        paragraphs: [
          'When IT professionals or founders purchase property, invest in FDRs/Sanchayapatra, or apply for foreign travel visas and bank financing, authorities verify whether their accumulated assets match their historical tax returns. Filing a disciplined annual return builds an unimpeachable white-money track record.',
        ],
      },
    ],
    relatedServiceSlug: 'income-tax-services',
  },
  {
    slug: 'common-bookkeeping-mistakes-bangladesh-businesses',
    title: 'Common Bookkeeping Mistakes That Trigger Expense Disallowances in Bangladesh',
    titleBn: 'বুককিপিংয়ের সাধারণ ভুল যা বাংলাদেশে ব্যবসায়িক খরচ অননুমোদিত (Disallow) করতে পারে',
    category: 'Accounting & Bookkeeping',
    readingTime: '6 min read',
    publishedDate: '2026-10-20',
    excerpt:
      'Even profitable companies face unexpected corporate tax bills when legitimate business expenses are disallowed under the Income Tax Act 2023 due to preventable bookkeeping and payment errors.',
    keyTakeaways: [
      'Paying rent, salaries, or large purchases in cash instead of crossed cheque/bank transfer can lead to 100% disallowance of the expense.',
      'Failing to deduct or deposit TDS/VDS on supplier and service bills renders the underlying expense inadmissible for tax purposes.',
      'Monthly three-way reconciliation between Books of Account, Bank Statements, and Mushak 9.1 returns prevents year-end surprises.',
    ],
    sections: [
      {
        heading: '1. Violating Statutory Banking-Channel Payment Rules',
        paragraphs: [
          'Under the Income Tax Act 2023, specific categories of expenditure must be paid through banking channels (crossed cheque, bank transfer, or approved electronic means) to be treated as allowable business deductions. Paying employee salaries, office/factory rent, or raw material/general purchases in physical cash above the statutory threshold allows the Deputy Commissioner of Taxes (DCT) to disallow the expense entirely—meaning the business pays corporate tax on money it actually spent.',
        ],
      },
      {
        heading: '2. Overlooking Withholding Tax (TDS) & VAT at Source (VDS)',
        paragraphs: [
          'Whenever a company or designated withholding entity pays a supplier, contractor, landlord, professional consultant, or advertising agency, it must check whether Tax Deducted at Source (TDS) and VAT Deducted at Source (VDS) apply. If an accountant records and pays the full invoice without deducting required source taxes, the expense risks disallowance and penal interest.',
        ],
      },
      {
        heading: '3. Unreconciled Turnover Between VAT Returns and Financial Statements',
        paragraphs: [
          'Many businesses treat monthly VAT filing (Mushak 9.1) as a separate administrative task disconnected from their accounting software. At year-end, when total sales or purchases in the audited Profit & Loss statement differ from the sum of 12 monthly VAT returns—for instance due to credit notes, advances, or unrecorded invoices—both VAT and Income Tax authorities raise queries. Implementing a monthly close checklist resolves these variances in real time.',
        ],
      },
    ],
    relatedServiceSlug: 'accounting-bookkeeping',
  },
];

export const taxCalendarItems: TaxCalendarEvent[] = [
  {
    id: 'vat-monthly-return',
    frequency: 'Monthly',
    dueDateLabel: '15th of Every Month',
    title: 'Monthly VAT Return Filing (Mushak 9.1)',
    authority: 'NBR (VAT)',
    description:
      'Submission of monthly VAT return (Mushak 9.1) along with treasury challans and schedules for the preceding calendar month under the VAT & SD Act 2012.',
    verificationNote: 'Statutory deadline is the 15th day of the following month. Verify public holiday adjustments with NBR.',
  },
  {
    id: 'tds-monthly-deposit',
    frequency: 'Monthly',
    dueDateLabel: 'Monthly Prescribed Window',
    title: 'Deposit of Tax Deducted at Source (TDS) & Withholding Statements',
    authority: 'NBR (Income Tax)',
    description:
      'Deposit of taxes withheld from salaries, suppliers, rent, and services to the Government Treasury via A-Challan and submission of prescribed withholding tax returns.',
    verificationNote: 'Check exact rule timelines under current Withholding Tax Rules issued by NBR.',
  },
  {
    id: 'advance-income-tax-instalments',
    frequency: 'Semi-Annual / Periodic',
    dueDateLabel: '15 Sep • 15 Dec • 15 Mar • 15 Jun',
    title: 'Quarterly Advance Income Tax (AIT) Instalments',
    authority: 'NBR (Income Tax)',
    description:
      'Payment of quarterly advance income tax instalments by taxpayers whose last assessed income exceeds the statutory threshold under the Income Tax Act 2023.',
    verificationNote: 'Four quarterly dates across the financial year. Confirm applicability and thresholds with your tax advisor.',
  },
  {
    id: 'individual-tax-day',
    frequency: 'Annual',
    dueDateLabel: 'November 30 (Tax Day)',
    title: 'Annual Income Tax Return — Individual Taxpayers',
    authority: 'NBR (Income Tax)',
    description:
      'Statutory deadline (Tax Day) for individual taxpayers (covering the July 1 – June 30 income year) to file their return and obtain Proof of Submission of Return (PSR).',
    verificationNote: 'Subject to any official extension notice published by the National Board of Revenue (NBR).',
  },
  {
    id: 'company-tax-day',
    frequency: 'Annual',
    dueDateLabel: '15th Day of 7th Month after Year-End (e.g., Jan 15 for June 30 YE)',
    title: 'Corporate Income Tax Return Filing — Companies',
    authority: 'NBR (Income Tax)',
    description:
      'Submission of corporate income tax return accompanied by Audited Financial Statements, tax computation, and Statement of International Transactions (if applicable).',
    verificationNote: 'Due date depends on the company’s official accounting year-end (June 30 vs. Dec 31). Verify under Income Tax Act 2023.',
  },
  {
    id: 'rjsc-annual-compliance',
    frequency: 'Annual',
    dueDateLabel: 'Within Statutory Days of AGM',
    title: 'Annual General Meeting (AGM), Schedule X & Audited Balance Sheet Filing',
    authority: 'RJSC',
    description:
      'Holding the Annual General Meeting and filing the Annual Summary of Share Capital (Schedule X), Form XII updates, and Audited Financial Statements with RJSC.',
    verificationNote: 'Governed by the Companies Act 1994 timelines from incorporation/last AGM.',
  },
];

export const downloadableChecklists: DownloadableChecklist[] = [
  {
    id: 'checklist-individual-tax',
    title: 'Individual Income Tax Return Preparation Checklist (FY July–June)',
    category: 'Income Tax (NBR)',
    description:
      'Complete document checklist covering bank statements, salary TDS, Sanchayapatra, BO accounts, investment rebates, and net wealth reconciliation.',
    items: [
      '12-digit e-TIN Certificate & prior year Return + Acknowledgement Receipt (PSR)',
      'Bank statements (July 1 – June 30) and balance certificates for all accounts, FDRs & DPS',
      'Employer Salary Certificate & monthly TDS Treasury Challan / A-Challan copies',
      'Sanchayapatra encashment and interest/source tax certificates',
      'BO Account portfolio valuation & capital gain/dividend statements as of June 30',
      'Eligible investment proofs (DPS, Life Insurance, Govt. Securities, Listed Shares)',
      'Land/apartment deeds, car registration papers, or loan statements for any changes during the year',
      'Summary of annual personal and family living expenses (IT-10BB2 reconciliation)',
    ],
  },
  {
    id: 'checklist-rjsc-incorporation',
    title: 'Private Limited Company Incorporation Checklist (RJSC & Post-Setup)',
    category: 'Corporate Compliance (RJSC)',
    description:
      'Required KYC, constitutional details, and post-incorporation steps for registering a Private Limited Company in Bangladesh.',
    items: [
      '2–3 proposed company names for RJSC Name Clearance application',
      'Summary of primary business objectives, Authorized Capital, and Paid-up Capital',
      'National ID (NID) and 12-digit e-TIN of all Bangladeshi Directors & Shareholders',
      'Passport copies, parent Board Resolution & AD Bank Encashment Certificate (for Foreign Shareholders)',
      'Passport-size photographs, active mobile numbers, and email addresses of all Subscribers',
      'Registered office commercial lease agreement & utility bill (for Trade License & e-BIN)',
      'Post-Incorporation: Corporate e-TIN, Trade License, Corporate Bank Account, and 13-digit e-BIN',
    ],
  },
  {
    id: 'checklist-statutory-audit',
    title: 'Annual Statutory Audit Readiness Checklist for Limited Companies',
    category: 'Audit & Assurance',
    description:
      'Essential schedules, reconciliations, and statutory registers to prepare before external audit fieldwork begins.',
    items: [
      'Final Trial Balance, General Ledger, Cash Book, and draft IFRS/BFRS Financial Statements',
      'Full-year bank statements, bank reconciliation statements, and bank balance confirmations',
      '12 months of filed VAT returns (Mushak 9.1) reconciled with total book revenue and purchases',
      'Summary of all TDS and VDS deducted and deposited, matched with Treasury/A-Challans',
      'Fixed Asset Register with additions, disposals, and depreciation calculations',
      'Physical inventory count sheets as of the year-end balance sheet date',
      'Updated RJSC documents (MoA/AoA, Certificate of Incorporation, Schedule X, Form XII) and Trade License',
      'Board Meeting & AGM minutes, loan sanction letters, and major customer/supplier contracts',
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightsArticles.find((article) => article.slug === slug);
}
