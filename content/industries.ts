export interface IndustryItem {
  id: string;
  name: string;
  nameBn: string;
  icon: string;
  tagline: string;
  overview: string;
  keyChallenges: string[];
  howWeHelp: string[];
  relatedServiceSlugs: string[];
}

export const industriesList: IndustryItem[] = [
  {
    id: 'smes',
    name: 'SMEs & Family Enterprises',
    nameBn: 'এসএমই ও পারিবারিক ব্যবসায়',
    icon: 'Store',
    tagline: 'Structured bookkeeping, tax discipline, and working-capital readiness for growing businesses.',
    overview:
      'Small and medium enterprises form the backbone of Bangladesh’s economy yet often operate with informal accounting, cash-heavy expense workflows, and last-minute tax filings. As NBR tightens banking-channel rules and banks demand audited financials under ICRRS ratings, SMEs need practical, right-sized financial governance.',
    keyChallenges: [
      'Transitioning from informal cash ledgers to double-entry accounting compliant with Income Tax Act 2023 banking-channel rules',
      'Avoiding expense disallowances caused by missed TDS/VDS deductions on rent, supplier bills, and salaries',
      'Preparing credible financial statements and CMA projections to secure SME or working-capital loans',
    ],
    howWeHelp: [
      'Monthly bookkeeping and TallyPrime/QuickBooks setup tailored to SME transaction volumes',
      'Proactive quarterly tax and monthly Mushak 9.1 VAT compliance',
      'Bank loan documentation, project profiles, and proprietor/company tax return filing',
    ],
    relatedServiceSlugs: ['accounting-bookkeeping', 'income-tax-services', 'vat-customs-advisory'],
  },
  {
    id: 'rmg-textile',
    name: 'RMG, Textile & Apparel Exporters',
    nameBn: 'তৈরি পোশাক (RMG) ও টেক্সটাইল খাত',
    icon: 'Factory',
    tagline: 'Export realization tax compliance, zero-rated VAT records, bond/customs reconciliations, and WPPF/PF audits.',
    overview:
      'Bangladesh’s ready-made garments (RMG), knitwear, spinning, and accessories manufacturers operate under complex export incentives, source tax at realization, bonded warehouse obligations, and strict labour law compliance.',
    keyChallenges: [
      'Reconciling Export Proceeds Realization Certificates (PRC), back-to-back LCs, and source tax deducted by AD banks',
      'Maintaining zero-rated monthly VAT returns (Mushak 9.1) and VDS compliance on local sub-contracts and overheads',
      'Managing Recognized Provident Fund, Gratuity, and Workers’ Profit Participation Fund (WPPF) audits under the Labour Act',
    ],
    howWeHelp: [
      'Statutory financial statement audits and factory inventory/fixed-asset verifications',
      'Corporate income tax computation reconciling export realization TDS against minimum tax rules',
      'Provident Fund, Gratuity, and WPPF trust accounting and annual audits',
    ],
    relatedServiceSlugs: ['audit-assurance', 'income-tax-services', 'payroll-labour-compliance'],
  },
  {
    id: 'trading-import-export',
    name: 'Trading, Commercial Import & Export',
    nameBn: 'ট্রেডিং ও আমদানি-রপ্তানি বাণিজ্য',
    icon: 'Ship',
    tagline: 'Import-stage AIT/AT reconciliation, Mushak 4.3 input-output declarations, and IRC/ERC compliance.',
    overview:
      'Commercial importers, indentors, distributors, and exporters face heavy upfront tax collection at customs points—Advance Income Tax (AIT) and Advance Tax (AT) on VAT—which directly impacts cash flow and pricing margins if not properly adjusted.',
    keyChallenges: [
      'Tracking and claiming credit/decreasing adjustments for Advance Tax (AT) and AIT paid across multiple Bills of Entry (BoE)',
      'Filing accurate Input-Output Coefficient / Trade Price declarations (Mushak 4.3) to protect margins',
      'Reconciling LC margins, customs assessed values, and physical warehouse stock with annual accounts',
    ],
    howWeHelp: [
      'Bill of Entry (BoE) tax/VAT ledger tracking and Advance Tax refund/adjustment claims',
      'Monthly Mushak 6.1, 6.2, 6.3, and 9.1 maintenance for commercial importers and wholesalers',
      'IRC/ERC renewals, corporate tax assessments, and bank CC/LTR limit documentation',
    ],
    relatedServiceSlugs: ['vat-customs-advisory', 'income-tax-services', 'accounting-bookkeeping'],
  },
  {
    id: 'it-freelancers',
    name: 'IT / ITES, Software Firms & Freelancers',
    nameBn: 'আইটি, সফটওয়্যার ও ফ্রিল্যান্সার',
    icon: 'Laptop',
    tagline: 'Foreign remittance tax exemption documentation, Encashment Certificates (Form-C), and SaaS/agency accounting.',
    overview:
      'Software developers, IT/ITES exporters, BPOs, digital agencies, and independent freelancers earning foreign currency through banking channels operate under specific tax provisions and conditions set by the NBR and Bangladesh Bank.',
    keyChallenges: [
      'Maintaining proper inward remittance documentation (Form-C / Encashment Certificates) to substantiate tax treatment of eligible IT/ITES income',
      'Separating taxable local revenue from export software/ITES revenue in books of account',
      'Handling withholding tax and VAT on cross-border cloud hosting, SaaS tools, and digital marketing payments',
    ],
    howWeHelp: [
      'Individual and corporate tax return filing with complete remittance schedules and bank encashment reconciliation',
      'Advisory on applicable IT/ITES tax rules under the Income Tax Act 2023 and Finance Acts',
      'BIDA/BASIS-linked corporate setup, payroll TDS for tech teams, and investor-ready SaaS bookkeeping',
    ],
    relatedServiceSlugs: ['income-tax-services', 'accounting-bookkeeping', 'company-formation-compliance'],
  },
  {
    id: 'ngos-development',
    name: 'NGOs, INGOs & Development Projects',
    nameBn: 'এনজিও ও উন্নয়ন প্রকল্প',
    icon: 'HeartHandshake',
    tagline: 'NGOAB FD-4 audits, donor grant expenditure verification, and source tax/VAT deduction compliance.',
    overview:
      'Local NGOs, International NGOs (INGOs), foundations, and donor-funded development projects must satisfy dual accountability: strict Bangladeshi statutory rules (NGOAB, NBR, RJSC/Societies) and rigorous international donor reporting standards.',
    keyChallenges: [
      'Timely completion of FD-4 project audits and budget-vs-actual expenditure statements for the NGO Affairs Bureau (NGOAB)',
      'Strict adherence to TDS and VDS withholding rules on vendor payments, field office rent, and consultant honorariums',
      'Maintaining fund-segregated accounting across multiple restricted and unrestricted donor grants',
    ],
    howWeHelp: [
      'Independent project audits, FD-4 reports, and agreed-upon procedures for local and international donors',
      'Monthly TDS/VDS compliance reviews and withholding tax return submissions',
      'Internal control manuals, procurement SOPs, and field-office financial monitoring',
    ],
    relatedServiceSlugs: ['audit-assurance', 'internal-audit-risk-forensic', 'payroll-labour-compliance'],
  },
  {
    id: 'real-estate-construction',
    name: 'Real Estate, Landowners & Construction',
    nameBn: 'রিয়েল এস্টেট, ভূমি মালিক ও নির্মাণ খাত',
    icon: 'Building',
    tagline: 'Joint-venture landowner tax planning, project cost accounting (IFRS 15), and contractor TDS/VDS management.',
    overview:
      'Real estate developers, landowners entering Joint Venture (JV) development agreements, and civil/EPC contractors deal with multi-year project lifecycles, registration-stage taxes, and complex withholding regimes.',
    keyChallenges: [
      'Structuring Joint Venture agreements, power of attorney, and apartment sharing ratios between landowners and developers with full tax clarity',
      'Managing revenue recognition across multi-year projects and reconciling customer advances with project costs',
      'Reconciling source tax and VAT deducted from running contractor bills by government and corporate employers',
    ],
    howWeHelp: [
      'Advisory on capital gains and tax implications for landowners and real estate developers',
      'Project-wise cost accounting,WIP tracking, and statutory financial audits',
      'Contractor bill TDS/VDS certificate reconciliation and annual income tax assessments',
    ],
    relatedServiceSlugs: ['income-tax-services', 'accounting-bookkeeping', 'business-advisory-consultancy'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare, Hospitals & Diagnostics',
    nameBn: 'স্বাস্থ্যসেবা, হাসপাতাল ও ডায়াগনস্টিক সেন্টার',
    icon: 'Stethoscope',
    tagline: 'Medical equipment import compliance, consultant doctor TDS management, and revenue/inventory controls.',
    overview:
      'Hospitals, diagnostic centres, clinics, and specialist medical practitioners manage high-value medical equipment imports, reagent inventories, daily cash/card patient collections, and consultant fee disbursements.',
    keyChallenges: [
      'Controlling daily billing, pharmacy/reagent stock consumption, and cash-to-bank deposit reconciliations',
      'Applying accurate withholding tax (TDS) on specialist doctor consultation fees, referral payments, and equipment maintenance contracts',
      'Preparing feasibility studies and CMA packs for hospital expansion or diagnostic machinery financing',
    ],
    howWeHelp: [
      'Internal audit and SOP design covering patient billing, pharmacy inventory, and procurement',
      'Personal income tax return and wealth statement advisory for specialist doctors and clinic owners',
      'Statutory audit, equipment CAPEX feasibility modelling, and NBR tax/VAT compliance',
    ],
    relatedServiceSlugs: ['internal-audit-risk-forensic', 'income-tax-services', 'audit-assurance'],
  },
  {
    id: 'education',
    name: 'Education, Universities & Training Institutes',
    nameBn: 'শিক্ষা প্রতিষ্ঠান ও প্রশিক্ষণ কেন্দ্র',
    icon: 'GraduationCap',
    tagline: 'Trust/foundation governance, tuition fee & payroll compliance, and Provident Fund assurance.',
    overview:
      'Private universities, English-medium and national-curriculum schools, EdTech platforms, and vocational training institutes require transparent fund governance, faculty payroll compliance, and statutory audits.',
    keyChallenges: [
      'Maintaining transparent trust/society accounts and complying with governing board and regulatory reporting standards',
      'Managing faculty and administrative payroll TDS, Provident Funds, and campus lease VAT/TDS',
      'Reconciling student fee collections across bank counters, MFS, and online payment gateways',
    ],
    howWeHelp: [
      'Annual statutory and trust/society financial statement audits',
      'Faculty payroll processing, salary tax computation, and Recognized Provident Fund setup',
      'Internal control reviews of fee collection, scholarship accounting, and campus capital expenditure',
    ],
    relatedServiceSlugs: ['audit-assurance', 'payroll-labour-compliance', 'accounting-bookkeeping'],
  },
  {
    id: 'manufacturing',
    name: 'Industrial Manufacturing & FMCG',
    nameBn: 'শিল্প উৎপাদন ও ভোগ্যপণ্য (FMCG)',
    icon: 'Cog',
    tagline: 'Mushak 4.3 cost declarations, BOM/wastage accounting, inventory audits, and plant expansion feasibility.',
    overview:
      'Local industrial manufacturers, agro-processors, packaging plants, and FMCG producers must align factory cost accounting with strict NBR VAT input-output declarations and raw-material withholding rules.',
    keyChallenges: [
      'Preparing accurate Input-Output Coefficient declarations (Mushak 4.3) that reflect real Bill of Materials (BoM) and normal wastage',
      'Preventing disallowance of input VAT credits due to timing mismatches, missing Mushak 6.3 invoices, or banking-channel errors',
      'Tracking raw material, work-in-progress (WIP), and finished goods inventory across factory and depot locations',
    ],
    howWeHelp: [
      'End-to-end VAT advisory: Mushak 4.3 preparation, Mushak 6.1/6.2 registers, and monthly Mushak 9.1 filing',
      'Physical inventory verification, cost accounting systems design, and statutory audit',
      'BMRE project feasibility reports and working capital loan documentation',
    ],
    relatedServiceSlugs: ['vat-customs-advisory', 'internal-audit-risk-forensic', 'business-advisory-consultancy'],
  },
  {
    id: 'startups-foreign-investors',
    name: 'Startups, Subsidiaries & Foreign Investors',
    nameBn: 'স্টার্টআপ ও বৈদেশিক বিনিয়োগকারী',
    icon: 'Rocket',
    tagline: 'RJSC/BIDA market entry, FDI encashment & Section 18B filings, Transfer Pricing, and investor due diligence.',
    overview:
      'Venture-backed startups and multinational groups entering Bangladesh need a seamless bridge between global corporate standards and local RJSC, BIDA, Bangladesh Bank, and NBR regulations.',
    keyChallenges: [
      'Selecting the optimal entry structure (100% Foreign-Owned Subsidiary vs. Branch Office vs. Liaison Office)',
      'Properly documenting inward equity remittance (Encashment Certificate & Form-C) to protect future dividend and capital repatriation rights',
      'Complying with Transfer Pricing rules on inter-company transactions and preparing clean data rooms for seed/Series A investors',
    ],
    howWeHelp: [
      'End-to-end RJSC incorporation, BIDA registration, expatriate work permits, and Bangladesh Bank reporting',
      'Outsourced CFO & IFRS bookkeeping with monthly USD/BDT management reporting packs',
      'Transfer Pricing studies, CA certificates, and financial/tax due diligence support',
    ],
    relatedServiceSlugs: [
      'company-formation-compliance',
      'transfer-pricing-international-tax',
      'business-advisory-consultancy',
    ],
  },
];
