export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  titleBn: string;
  shortDescription: string;
  icon: string;
  overview: string[];
  whoItIsFor: string[];
  deliverables: ServiceDeliverable[];
  documentsRequired: string[];
  typicalTimeline: {
    phase: string;
    duration: string;
    detail: string;
  }[];
  lawsAndAuthorities: {
    name: string;
    role: string;
  }[];
  faqs: ServiceFaq[];
}

export const servicesList: ServiceItem[] = [
  {
    slug: 'audit-assurance',
    number: '01',
    title: 'Audit & Assurance',
    titleBn: 'অডিট ও অ্যাসুরেন্স সেবা',
    shortDescription:
      'Independent statutory audits, tax audits, NGO/donor project audits, and special-purpose assurance engagements under ISA and BFRS/IFRS.',
    icon: 'ShieldCheck',
    overview: [
      'Independent financial statement assurance is the cornerstone of corporate governance and stakeholder confidence in Bangladesh. Whether required under the Companies Act 1994, the Income Tax Act 2023, or donor grant agreements, an audit must provide more than a procedural signature—it must offer an objective, methodical examination of financial records and internal controls.',
      'At M. S. Salekin & Co., every assurance engagement is planned and supervised directly by Mohammad Sirajus Salekin, FCA in accordance with International Standards on Auditing (ISA) as adopted in Bangladesh and Financial Reporting Standards (IFRS/BFRS). We maintain strict professional independence and issue clear Management Letters highlighting control observations alongside the formal audit report.',
    ],
    whoItIsFor: [
      'Private and Public Limited Companies registered with RJSC requiring annual statutory audit',
      'Entities subject to mandatory audited financial statement submission under the Income Tax Act 2023',
      'Local and international NGOs requiring NGOAB (FD-4) or donor-funded project audits',
      'Provident Funds, Gratuity Funds, WPPF trusts, and educational or healthcare institutions',
      'Boards, lenders, and joint-venture partners requesting special-purpose audits or agreed-upon procedures (ISRS 4400)',
    ],
    deliverables: [
      {
        title: 'Statutory Financial Statement Audit',
        description:
          'Independent examination of annual financial statements under the Companies Act 1994 and IFRS/BFRS, including DVC (Document Verification Code) compliance as applicable under ICAB guidelines.',
      },
      {
        title: 'Income Tax & Regulatory Audit',
        description:
          'Verification of accounts, withholding tax compliance, and schedule reconciliations required for corporate return submission to the National Board of Revenue (NBR).',
      },
      {
        title: 'NGO & Donor-Funded Project Audit',
        description:
          'Project-specific expenditure verification, fund utilization statements, and FD-4 certification packages for NGO Affairs Bureau (NGOAB) and international development partners.',
      },
      {
        title: 'Review Engagements & Agreed-Upon Procedures',
        description:
          'ISRE 2400 limited assurance reviews and ISRS 4400 factual findings reports on specific financial balances, inventory counts, capital expenditure, or grant disbursements.',
      },
      {
        title: 'Management Letter on Internal Controls',
        description:
          'Actionable report identifying accounting discrepancies, tax exposure, and internal control weaknesses discovered during the audit, paired with practical remediation steps.',
      },
    ],
    documentsRequired: [
      'Trial Balance, General Ledger, Cash/Bank Books, and draft Financial Statements for the income year',
      'Bank statements, bank reconciliation statements, and balance confirmation certificates',
      'Certificate of Incorporation, Memorandum & Articles of Association, Form XII, and latest Trade License',
      'Monthly VAT returns (Mushak 9.1), withholding tax challans (TDS/VDS), and prior year income tax assessment order',
      'Fixed asset register, physical inventory sheets, sales/purchase invoices, and payroll registers',
      'Board minutes, loan sanction letters, lease agreements, and donor grant contracts (for NGOs)',
    ],
    typicalTimeline: [
      {
        phase: 'Engagement Acceptance & Planning',
        duration: '3 – 5 Business Days',
        detail: 'Independence verification, engagement letter issuance, and preliminary risk assessment.',
      },
      {
        phase: 'Fieldwork & Substantive Testing',
        duration: '1 – 3 Weeks (Depending on entity volume)',
        detail: 'Voucher sampling, ledger reconciliation, physical/third-party confirmations, and tax schedule checks.',
      },
      {
        phase: 'Draft Reporting & Management Discussion',
        duration: '3 – 5 Business Days',
        detail: 'Review of draft financial statements, disclosure notes, and Management Letter observations.',
      },
      {
        phase: 'Final Sign-Off & Issuance',
        duration: '2 – 3 Business Days',
        detail: 'Board approval of financial statements and delivery of signed Auditor’s Report.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'The Companies Act 1994', role: 'Mandates annual statutory audit of limited companies in Bangladesh' },
      { name: 'ICAB & FRC Bangladesh', role: 'Governs auditing standards (ISA), financial reporting (IFRS/BFRS), and ethical conduct' },
      { name: 'Income Tax Act 2023 (NBR)', role: 'Specifies thresholds and conditions for audited financial statements with tax returns' },
      { name: 'NGO Affairs Bureau (NGOAB)', role: 'Regulates foreign-funded NGO project audits and FD-4 certifications' },
    ],
    faqs: [
      {
        question: 'Is a statutory audit mandatory for all Private Limited Companies in Bangladesh?',
        answer:
          'Yes. Under the Companies Act 1994, every Private and Public Limited Company incorporated with RJSC must have its annual financial statements audited by a qualified Chartered Accountant firm in practice.',
      },
      {
        question: 'What is a Management Letter and why is it included with our audit?',
        answer:
          'While the Auditor’s Report provides an opinion on the financial statements as a whole, the Management Letter is a confidential report to management highlighting internal control gaps, accounting errors, or tax/VAT non-compliance noticed during fieldwork, along with recommendations to fix them.',
      },
      {
        question: 'Can the same CA firm prepare our books from scratch and also sign our statutory audit?',
        answer:
          'Under the ICAB Code of Ethics independence rules, an auditor cannot audit financial statements they have primary responsibility for preparing in a management capacity. Where full bookkeeping is required, we advise on proper segregation between accounting compilation and independent assurance.',
      },
    ],
  },
  {
    slug: 'income-tax-services',
    number: '02',
    title: 'Income Tax Services',
    titleBn: 'আয়কর সেবা ও পরামর্শ',
    shortDescription:
      'Corporate and individual NBR tax return filing, e-TIN registration, TDS compliance, tax planning, and assessment representation.',
    icon: 'Calculator',
    overview: [
      'Bangladesh’s direct tax framework under the Income Tax Act 2023 places heightened emphasis on proof of return submission (PSR), accurate source tax deduction (TDS), and reconciliation between bank flows, assets, and reported income. Both corporate entities and individual taxpayers face financial penalties and disallowed expenses when withholding rules or filing deadlines are overlooked.',
      'M. S. Salekin & Co. provides structured, compliant income tax advisory and representation before the National Board of Revenue (NBR). We focus on accurate tax computation, lawful rebates and exemptions, timely advance tax deposits, and thorough documentation to withstand Circle assessments.',
    ],
    whoItIsFor: [
      'Private and Public Limited Companies, Branches, Liaison Offices, and Partnership Firms',
      'Company Directors, Salaried Executives, Professionals, Doctors, Engineers, and Consultants',
      'SME Proprietors, Importers, Exporters, Contractors, and Real Estate Landowners/Developers',
      'IT/ITES Exporters and Freelancers receiving foreign remittance through banking channels',
      'Non-Resident Bangladeshis (NRBs) and Expatriate Employees working in Bangladesh',
    ],
    deliverables: [
      {
        title: 'Corporate Income Tax Return Preparation & Filing',
        description:
          'Computation of total income and tax liability under the Income Tax Act 2023, adjustment of admissible/inadmissible expenses, minimum tax calculation, and return filing.',
      },
      {
        title: 'Individual Tax Return & Wealth Statement (IT-10B)',
        description:
          'Preparation of individual returns covering salary, business, house property, capital gains, and investment rebates, with complete reconciliation of net wealth accretion and lifestyle expenses.',
      },
      {
        title: 'Withholding Tax (TDS/TCS) Compliance & Return Filing',
        description:
          'Advisory on applicable TDS rates across payments (suppliers, rent, professional fees, salaries), Treasury Challan / A-Challan verification, and periodic withholding tax return submission.',
      },
      {
        title: 'e-TIN Registration & Tax Certificates',
        description:
          'Obtaining 12-digit e-TIN certificates, updating taxpayer profiles, and procuring Proof of Submission of Return (PSR) / Tax Clearance Certificates.',
      },
      {
        title: 'Tax Assessment, Hearing & Appeal Support',
        description:
          'Drafting written explanations, compiling hearing files, and representing taxpayers before Deputy Commissioners of Taxes (DCT), Appellate Commissioners, and the Taxes Appellate Tribunal.',
      },
    ],
    documentsRequired: [
      '12-digit e-TIN Certificate and prior year Income Tax Return + Acknowledgement Receipt / PSR',
      'Bank statements for all personal or corporate accounts covering the full income year (July–June)',
      'Salary certificate, TDS challans, and Provident Fund statements (for salaried individuals)',
      'Audited Financial Statements and Trial Balance (for companies and applicable entities)',
      'Investment proofs eligible for tax rebate (DPS, Sanchayapatra, Govt. Treasury Bonds, Listed Shares, Life Insurance)',
      'Property purchase/sale deeds, loan statements, vehicle registration papers, and BO account certificates',
    ],
    typicalTimeline: [
      {
        phase: 'Document Collection & Income Mapping',
        duration: '2 – 4 Business Days',
        detail: 'Review of bank statements, TDS certificates, prior return balances, and asset changes.',
      },
      {
        phase: 'Computation & Wealth Reconciliation',
        duration: '2 – 5 Business Days',
        detail: 'Drafting tax computation, rebate calculation, and net wealth reconciliation (for individuals) or corporate schedules.',
      },
      {
        phase: 'Client Review & Tax Deposit',
        duration: '1 – 2 Business Days',
        detail: 'Walkthrough of draft return, adjustment of advance/source tax, and A-Challan/Pay Order deposit.',
      },
      {
        phase: 'Submission & PSR Archiving',
        duration: '1 – 2 Business Days',
        detail: 'Filing at the respective Taxes Circle or NBR e-Return portal and issuing verified acknowledgement copies.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'Income Tax Act 2023 & Finance Acts', role: 'Primary statute governing direct tax rates, TDS, minimum tax, and return filing' },
      { name: 'National Board of Revenue (NBR)', role: 'Central authority administering Taxes Zones, Circles, and e-Return systems' },
      { name: 'Withholding Tax Rules', role: 'Governs source deduction obligations, challan deposit timelines, and withholding returns' },
    ],
    faqs: [
      {
        question: 'When is the deadline (Tax Day) for Individual Taxpayers in Bangladesh?',
        answer:
          'Under the Income Tax Act 2023, the statutory Tax Day for individual taxpayers is generally November 30 following the end of the July–June income year (subject to any official extension announced by the NBR).',
      },
      {
        question: 'What is Proof of Submission of Return (PSR) and why is it needed?',
        answer:
          'PSR (Acknowledgement Receipt / Tax Certificate confirming return filing) is mandatory under the Income Tax Act 2023 for over 40 services in Bangladesh, including trade license renewal, company director continuation, bank loan sanctioning, credit card issuance, and property registration.',
      },
      {
        question: 'Can you assist if we receive a notice from the Deputy Commissioner of Taxes (DCT)?',
        answer:
          'Yes. We review the statutory basis of the notice, reconcile the underlying financial records, prepare a written legal and factual submission, and represent you at the hearing.',
      },
    ],
  },
  {
    slug: 'vat-customs-advisory',
    number: '03',
    title: 'VAT & Customs Advisory',
    titleBn: 'ভ্যাট ও কাস্টমস পরামর্শ সেবা',
    shortDescription:
      '13-digit BIN registration, monthly Mushak 9.1 filing, input-output coefficient (Mushak 4.3), VDS compliance, and VAT audit defense.',
    icon: 'Receipt',
    overview: [
      'Under the Value Added Tax and Supplementary Duty Act 2012, VAT compliance in Bangladesh is continuous and transaction-driven. Errors in input tax credit claims, late submission of monthly Mushak 9.1 returns, missing Mushak 6.3 tax invoices, or improper Price Declaration / Input-Output Coefficient (Mushak 4.3) filings can trigger heavy penalties and disallowance of rebates.',
      'M. S. Salekin & Co. helps manufacturers, service providers, importers, traders, and exporters maintain disciplined VAT books, submit accurate monthly returns by the 15th of every month, and resolve disputes before VAT Commissionerates.',
    ],
    whoItIsFor: [
      'Manufacturers requiring Input-Output Coefficient (Mushak 4.3) declarations and input tax rebate management',
      'Commercial importers, wholesalers, and retail chains managing multi-rate VAT and Advance Tax (AT)',
      'Service providers, IT firms, contractors, and procurement providers handling VDS (VAT Deducted at Source)',
      '100% Export-Oriented enterprises and deemed exporters maintaining zero-rated VAT records',
    ],
    deliverables: [
      {
        title: '13-Digit e-BIN Registration & Profile Updates',
        description:
          'New Business Identification Number (BIN) registration on the NBR IVA system, addition of branches/warehouses, economic activity updates, and turnover tax enrollment.',
      },
      {
        title: 'Monthly VAT Return (Mushak 9.1) Preparation & Filing',
        description:
          'Verification of sales, purchases, VDS certificates (Mushak 6.6), treasury challans, and timely online/circle filing by the 15th of each month.',
      },
      {
        title: 'Mushak Register Maintenance & Input-Output (Mushak 4.3)',
        description:
          'Structuring Mushak 6.1 (Purchase), 6.2 (Sales), 6.2.1, 6.3 (Tax Invoice), and preparing accurate cost breakdowns for Mushak 4.3 submission.',
      },
      {
        title: 'VDS Compliance & Advance Tax (AT) Refund/Adjustment',
        description:
          'Advisory on mandatory VAT withholding at source, issuance of Mushak 6.6 within statutory timelines, and decreasing adjustments for Advance Tax paid at import stage.',
      },
      {
        title: 'VAT Audit Support & Show-Cause Notice Replies',
        description:
          'Reconciling Annual Financial Statements with 12 months of Mushak 9.1 returns and representing clients before Divisional Offices, Commissionerates, and Tribunals.',
      },
    ],
    documentsRequired: [
      '13-digit BIN Certificate, Trade License, e-TIN, and Certificate of Incorporation (if applicable)',
      'Monthly sales invoices (Mushak 6.3) and purchase registers (Mushak 6.1 / 6.2)',
      'Bills of Entry (BoE) and customs assessment notices for imported raw materials or finished goods',
      'VDS certificates received from customers or issued to suppliers (Mushak 6.6)',
      'Treasury Challans / A-Challans evidencing VAT and VDS deposits',
      'Bill of Materials (BoM) and utility/overhead cost details for Mushak 4.3 preparation',
    ],
    typicalTimeline: [
      {
        phase: 'e-BIN Registration / Onboarding Review',
        duration: '3 – 7 Business Days',
        detail: 'Document verification, online IVA portal submission, and Circle coordination.',
      },
      {
        phase: 'Monthly Return Cycle (Mushak 9.1)',
        duration: '1st – 14th of Every Month',
        detail: 'Invoice verification, VDS/input credit reconciliation, treasury deposit, and filing before the 15th deadline.',
      },
      {
        phase: 'Mushak 4.3 Input-Output Filing',
        duration: '3 – 5 Business Days per product line',
        detail: 'Cost sheet formulation, wastage allowance check, and divisional submission prior to supply.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'Value Added Tax and Supplementary Duty Act 2012', role: 'Primary legislation governing VAT, SD, Turnover Tax, and Input Credit' },
      { name: 'Value Added Tax and Supplementary Duty Rules 2016', role: 'Prescribes Mushak forms, VDS procedures, and return timelines' },
      { name: 'NBR VAT Online / Customs, Excise & VAT Commissionerates', role: 'Administers BIN registration, Mushak 9.1 filing, and VAT audits' },
      { name: 'Customs Act 2023', role: 'Governs import/export assessments, HS codes, and customs valuation' },
    ],
    faqs: [
      {
        question: 'What is the deadline for filing the monthly VAT return (Mushak 9.1)?',
        answer:
          'Under the VAT & SD Act 2012, the monthly VAT return (Mushak 9.1) must be filed on or before the 15th day of the following month. Late filing attracts statutory monetary penalties and interest where applicable.',
      },
      {
        question: 'Why is reconciling our annual audited financial statements with Mushak 9.1 returns important?',
        answer:
          'Both VAT authorities and Income Tax DCTs routinely cross-verify revenue, purchases, and VDS reported in your 12 monthly Mushak 9.1 returns against your audited Profit & Loss account. Unexplained variances often trigger show-cause notices.',
      },
      {
        question: 'When is Mushak 4.3 (Input-Output Coefficient Declaration) required?',
        answer:
          'Registered manufacturers and commercial suppliers of goods must submit Mushak 4.3 before supplying goods, or whenever input costs/prices change beyond the statutory threshold, to maintain eligibility for input tax credit.',
      },
    ],
  },
  {
    slug: 'company-formation-compliance',
    number: '04',
    title: 'Company Formation & Regulatory Compliance',
    titleBn: 'কোম্পানি নিবন্ধন ও আরজেএসসি কমপ্লায়েন্স',
    shortDescription:
      'RJSC company incorporation, partnership registration, annual returns (Schedule X, Form XII), BIDA foreign investment setup, and secretarial compliance.',
    icon: 'Building2',
    overview: [
      'Selecting and maintaining the right legal vehicle in Bangladesh—whether a Private Limited Company, One Person Company (OPC), Partnership Firm, Society, or Foreign Branch/Liaison Office—shapes your tax profile, banking capabilities, and investor readiness.',
      'M. S. Salekin & Co. handles end-to-end entity formation and ongoing corporate secretarial compliance with the Registrar of Joint Stock Companies and Firms (RJSC), Bangladesh Investment Development Authority (BIDA), City Corporations, and sector regulators.',
    ],
    whoItIsFor: [
      'Founders and entrepreneurs incorporating a Private Limited Company or One Person Company (OPC)',
      'Foreign investors establishing a 100% foreign-owned subsidiary, Joint Venture, Branch Office, or Liaison Office',
      'Existing companies requiring annual RJSC filings (Schedule X, Form XII, Form XV, share transfers, capital increases)',
      'Professional partnerships, trade associations, and societies registering under the Partnership Act or Societies Registration Act',
    ],
    deliverables: [
      {
        title: 'RJSC Incorporation (Private/Public Ltd, OPC & Partnership)',
        description:
          'Name clearance, drafting of Memorandum & Articles of Association (MoA & AoA), digital submission, and obtaining Certificate of Incorporation, Form XII, and certified copies.',
      },
      {
        title: 'Post-Incorporation Statutory Setup',
        description:
          'Obtaining Trade License, 12-digit e-TIN, 13-digit e-BIN, Chamber of Commerce membership, and Import/Export Registration Certificates (IRC/ERC).',
      },
      {
        title: 'BIDA & Foreign Investment Registration',
        description:
          'BIDA permission for Branch/Liaison/Representative Offices, industrial project registration, expatriate work permits, E-visa recommendations, and Section 18B Bangladesh Bank reporting.',
      },
      {
        title: 'Annual RJSC Corporate Secretarial Filings',
        description:
          'Drafting AGM notices and minutes, filing Annual Summary of Share Capital (Schedule X), audited balance sheet submission, and updating director/shareholding changes (Form XII, Form IX, Form XV, Form 117).',
      },
    ],
    documentsRequired: [
      'Proposed entity names (2–3 options in order of preference) and summary of business objectives',
      'National ID (NID), e-TIN Certificate, passport-size photos, email, and mobile numbers of all Directors/Shareholders',
      'Passport copies, Certificate of Incorporation of parent company, Board Resolution, and encashment certificate (for foreign shareholders)',
      'Authorized and Paid-up Capital structure and shareholding percentages',
      'Registered office address details and commercial rental agreement / ownership proof (for Trade License & BIN)',
    ],
    typicalTimeline: [
      {
        phase: 'RJSC Name Clearance',
        duration: '1 – 2 Business Days',
        detail: 'Availability search and online name reservation with RJSC.',
      },
      {
        phase: 'MoA/AoA Drafting & Incorporation Submission',
        duration: '3 – 5 Business Days',
        detail: 'Drafting constitutional documents, subscriber signatures, fee payment, and RJSC digital filing.',
      },
      {
        phase: 'Post-Incorporation Licenses (e-TIN, Trade License, BIN)',
        duration: '5 – 10 Business Days',
        detail: 'Sequential registration with NBR and local City Corporation/Municipality.',
      },
      {
        phase: 'BIDA Branch / Liaison Office Permission (Foreign Entities)',
        duration: '3 – 6 Weeks (Subject to Inter-Ministerial Committee review)',
        detail: 'Document attestation, BIDA OSS application, and Bangladesh Bank intimation.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'The Companies Act 1994 & Partnership Act 1932', role: 'Governs formation, governance, share transfers, and annual filings' },
      { name: 'Registrar of Joint Stock Companies and Firms (RJSC)', role: 'Primary registry for companies, partnerships, and societies' },
      { name: 'Bangladesh Investment Development Authority (BIDA)', role: 'Regulates foreign/local industrial registration, branch offices, and work permits' },
      { name: 'Bangladesh Bank (FEID) & BSEC', role: 'Oversees foreign equity inward remittance (Form-C), repatriation, and capital issuances' },
    ],
    faqs: [
      {
        question: 'Can a foreign national or foreign company own 100% of a Private Limited Company in Bangladesh?',
        answer:
          'Yes, in most sectors (excluding a small list of reserved/controlled sectors), 100% foreign equity ownership is permitted. Foreign shareholders must bring in their paid-up capital through an Authorized Dealer (AD) bank in Bangladesh and obtain an Encashment Certificate prior to RJSC incorporation.',
      },
      {
        question: 'What happens if a Private Limited Company misses its annual RJSC filings?',
        answer:
          'Late filing of Schedule X and audited financial statements leads to cumulative late fees at RJSC, blocks the company from recording new director changes or share transfers, and can require a High Court condonation petition if AGM deadlines are significantly lapsed.',
      },
      {
        question: 'What is the difference between a Liaison Office and a Branch Office under BIDA?',
        answer:
          'A Liaison (Representative) Office cannot generate local commercial revenue in Bangladesh and must meet all expenses through inward remittance from its foreign parent. A Branch Office can engage in commercial activities explicitly approved in its BIDA permission letter.',
      },
    ],
  },
  {
    slug: 'accounting-bookkeeping',
    number: '05',
    title: 'Accounting & Bookkeeping',
    titleBn: 'অ্যাকাউন্টিং ও বুককিপিং সেবা',
    shortDescription:
      'Monthly bookkeeping, IFRS/BFRS financial statement preparation, MIS reporting, historical backlog cleanup, and accounting software setup.',
    icon: 'BookOpen',
    overview: [
      'Growing SMEs, startups, and foreign subsidiaries in Bangladesh often struggle with fragmented spreadsheets, unrecorded withholding taxes, and delayed monthly closes. Without structured books that align simultaneously with IFRS/BFRS and Bangladesh’s tax/VAT rules, management lacks visibility into real margins and cash flow.',
      'M. S. Salekin & Co. provides outsourced monthly bookkeeping, financial statement compilation, management information system (MIS) packs, and historical accounting cleanup—giving your leadership team clean, audit-ready financial records every month.',
    ],
    whoItIsFor: [
      'SMEs, startups, and trading firms seeking professional finance function management without hiring a full in-house team',
      'Foreign subsidiaries, Branch Offices, and Liaison Offices needing dual reporting (local BDT books + group IFRS packs)',
      'Companies with historical accounting backlogs preparing for statutory audit, bank financing, or investor due diligence',
      'Enterprises migrating from manual ledgers or spreadsheets to TallyPrime, QuickBooks, Xero, or Zoho Books',
    ],
    deliverables: [
      {
        title: 'Monthly Bookkeeping & Voucher Recording',
        description:
          'Systematic recording of sales, purchases, expenses, petty cash, bank transactions, and TDS/VDS deductions with proper voucher indexing.',
      },
      {
        title: 'Bank, Party & Tax Ledger Reconciliations',
        description:
          'Monthly reconciliation of bank accounts, mobile financial services (MFS), customer receivables, supplier payables, and NBR tax/VAT control accounts.',
      },
      {
        title: 'IFRS / BFRS Financial Statement Compilation',
        description:
          'Preparation of Statement of Financial Position, Statement of Profit or Loss, Cash Flow Statement, Changes in Equity, and explanatory disclosure notes.',
      },
      {
        title: 'Management Information System (MIS) & Budgeting',
        description:
          'Monthly management packs covering gross/net margin analysis, cost-center profitability, aging schedules, cash flow forecasts, and budget-vs-actual variance reports.',
      },
      {
        title: 'Accounting Software Implementation & Backlog Cleanup',
        description:
          'Designing Bangladesh tax-compliant Charts of Accounts in TallyPrime, QuickBooks, or Zoho Books, and reconstructing prior-period accounts from primary vouchers.',
      },
    ],
    documentsRequired: [
      'Monthly bank statements, cheque counterfoils, and MFS/payment gateway statements',
      'Sales invoices, delivery challans, purchase bills, and supplier payment vouchers',
      'Petty cash sheets, utility bills, rental agreements, and salary disbursement sheets',
      'Prior year audited financial statements and opening Trial Balance',
      'Copies of deposited TDS/VDS challans and monthly Mushak 9.1 returns',
    ],
    typicalTimeline: [
      {
        phase: 'Chart of Accounts & Opening Balance Setup',
        duration: '3 – 5 Business Days',
        detail: 'Structuring cost centers, tax ledgers, and migrating opening balances.',
      },
      {
        phase: 'Monthly Closing & Reconciliation Cycle',
        duration: 'By the 7th – 10th Business Day of the following month',
        detail: 'Posting transactions, reconciling banks, and delivering the monthly Trial Balance & MIS pack.',
      },
      {
        phase: 'Historical Accounts Cleanup (If required)',
        duration: '2 – 6 Weeks per financial year',
        detail: 'Reconstructing ledgers from bank statements, invoices, and statutory filings.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'IFRS / BFRS (ICAB & FRC)', role: 'Accounting standards governing recognition, measurement, and presentation of financial statements' },
      { name: 'Income Tax Act 2023 (Banking Channel Rules)', role: 'Requires specific expense thresholds (salary, rent, raw materials) to be routed via banking channels' },
      { name: 'Companies Act 1994 (Section 181–185)', role: 'Mandates maintenance of proper books of account at the registered office' },
    ],
    faqs: [
      {
        question: 'Why does Bangladesh tax law care about how we record and pay expenses in our daily books?',
        answer:
          'Under the Income Tax Act 2023, payments for salaries, rent, raw materials, and general expenses exceeding specified BDT thresholds must be made through crossed cheques or bank transfers, and applicable TDS/VDS must be deducted. Otherwise, the entire expense can be disallowed and taxed at the corporate rate.',
      },
      {
        question: 'Which accounting software do you support?',
        answer:
          'We work seamlessly with TallyPrime, QuickBooks Online/Desktop, Xero, Zoho Books, and custom ERP exports, configuring the Chart of Accounts so that TDS, VDS, and AIT ledgers map directly to NBR requirements.',
      },
      {
        question: 'Can you clean up 1–2 years of unorganized accounts before our audit?',
        answer:
          'Yes. We conduct a structured reconstruction using bank statements, supplier/customer confirmations, VAT returns, and physical voucher files to produce an audit-ready Trial Balance.',
      },
    ],
  },
  {
    slug: 'payroll-labour-compliance',
    number: '06',
    title: 'Payroll & Labour Compliance',
    titleBn: 'পেরোল ও শ্রম আইন কমপ্লায়েন্স',
    shortDescription:
      'Monthly payroll processing, employee salary TDS computation, Provident Fund & Gratuity accounting, and WPPF advisory.',
    icon: 'Users',
    overview: [
      'Payroll administration in Bangladesh intersects directly with the Income Tax Act 2023 and the Bangladesh Labour Act 2006 (as amended). Employers are legally obligated to compute monthly withholding tax on employee salaries, verify employee PSR submissions, deposit deducted tax to the government treasury on time, and structure terminal benefits accurately.',
      'M. S. Salekin & Co. provides confidential payroll processing, salary tax structuring, and compliance support for Provident Funds, Gratuity schemes, and Workers’ Profit Participation Fund (WPPF) obligations.',
    ],
    whoItIsFor: [
      'Corporate employers seeking confidential outsourced payroll processing and payslip distribution',
      'HR and Finance teams requiring accurate FY employee salary tax (TDS) calculations and annual tax certificates',
      'Organizations establishing or managing Recognized Provident Funds, Gratuity Funds, or WPPF trusts',
      'Companies employing expatriate staff requiring work-permit-linked tax compliance',
    ],
    deliverables: [
      {
        title: 'Monthly Payroll Processing & Bank Advice',
        description:
          'Calculation of gross pay, attendance adjustments, overtime, PF deductions, loan recoveries, net take-home pay, and automated bank disbursement schedules.',
      },
      {
        title: 'Employee Salary Tax (TDS) Computation & Challan Support',
        description:
          'Annualised tax projection for each taxable employee, investment rebate estimation, monthly TDS deduction, and treasury challan preparation.',
      },
      {
        title: 'Annual Salary Tax Certificates & Section 108/Withholding Returns',
        description:
          'Issuance of employee salary and tax deduction certificates at year-end and preparation of statutory employer salary statements for the NBR.',
      },
      {
        title: 'PF, Gratuity & WPPF Advisory and Audit',
        description:
          'Drafting trust deeds and rules, NBR recognition applications for Provident/Gratuity Funds, WPPF applicability assessment under the Bangladesh Labour Act 2006, and fund audits.',
      },
    ],
    documentsRequired: [
      'Employee master roster with designations, joining dates, NID, and 12-digit e-TIN + latest PSR copies',
      'Compensation structure / appointment letters showing basic salary, allowances, and benefits',
      'Monthly attendance, leave, bonus, and variable incentive records',
      'Employee investment declarations for tax rebate estimation',
      'Existing Provident Fund, Gratuity, or HR policy manuals (if any)',
    ],
    typicalTimeline: [
      {
        phase: 'Payroll Setup & Tax Slab Mapping',
        duration: '2 – 4 Business Days',
        detail: 'Configuring employee master data, salary heads, and current Finance Act tax slabs.',
      },
      {
        phase: 'Monthly Payroll Run',
        duration: '2 Business Days per month',
        detail: 'Processing monthly inputs, generating payslips, bank transfer files, and TDS schedules.',
      },
      {
        phase: 'PF / Gratuity Trust Deed & NBR Recognition',
        duration: '3 – 6 Weeks',
        detail: 'Drafting trust documents, registration, and filing application with the Commissioner of Taxes.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'Income Tax Act 2023 (Salary Withholding Provisions)', role: 'Mandates employer deduction of tax at source on salaries and verification of employee PSR' },
      { name: 'Bangladesh Labour Act 2006 & Labour Rules 2015', role: 'Governs employment terms, leave encashment, Provident Fund, Gratuity, and WPPF' },
      { name: 'National Board of Revenue (NBR)', role: 'Grants formal recognition to Employee Provident, Superannuation, and Gratuity Funds' },
    ],
    faqs: [
      {
        question: 'What happens if an employer fails to deduct monthly tax (TDS) from taxable employees’ salaries?',
        answer:
          'Under the Income Tax Act 2023, the employer is treated as an assessee-in-default for undeducted salary tax, faces monthly penal interest, and the corresponding salary expense can be disallowed during the company’s corporate tax assessment.',
      },
      {
        question: 'Do all employees need to submit their income tax return acknowledgement (PSR) to the employer?',
        answer:
          'Employees falling within mandatory return-filing criteria (including individuals earning above the taxable threshold or holding management/executive roles as specified in the Act) must furnish their PSR to their employer so the salary expense remains fully allowable.',
      },
      {
        question: 'When is WPPF (Workers’ Profit Participation Fund) applicable?',
        answer:
          'Under Chapter XV of the Bangladesh Labour Act 2006, companies meeting the statutory paid-up capital or fixed asset thresholds must establish a Participation Fund and Welfare Fund and allocate 5% of net profit accordingly.',
      },
    ],
  },
  {
    slug: 'business-advisory-consultancy',
    number: '07',
    title: 'Business Advisory & Consultancy',
    titleBn: 'বিজনেস অ্যাডভাইজরি ও আর্থিক পরামর্শ',
    shortDescription:
      'Business valuation, feasibility studies, project profiles & bank CMA documentation, financial modelling, and M&A due diligence.',
    icon: 'TrendingUp',
    overview: [
      'Strategic capital decisions—raising bank debt, onboarding an equity partner, expanding a factory line, or acquiring a business—require rigorous financial analysis grounded in Bangladesh’s market realities, interest rate environment, and regulatory framework.',
      'M. S. Salekin & Co. combines Big-4-style financial discipline with practical commercial insight to prepare bankable project profiles, independent valuations, Credit Monitoring Arrangement (CMA) packs, and financial due diligence reports.',
    ],
    whoItIsFor: [
      'Manufacturing and trading enterprises applying for term loans, working capital limits, or syndication finance from banks/NBFIs',
      'Startups and growth-stage companies preparing financial models, pitch financials, and cap-table structures for investors',
      'Shareholders, buyers, and sellers requiring independent business or share valuations and financial/tax due diligence',
      'Sponsors evaluating greenfield industrial projects, BMRE (Balancing, Modernization, Rehabilitation & Expansion), or joint ventures',
    ],
    deliverables: [
      {
        title: 'Project Feasibility Studies & Bankable Project Profiles',
        description:
          'Comprehensive technical, commercial, and financial feasibility reports including CAPEX breakdown, working capital assessment, DSCR, IRR, NPV, and sensitivity analysis.',
      },
      {
        title: 'Bank Loan Documentation & CMA Data Preparation',
        description:
          'Preparation of projected financial statements, Credit Monitoring Arrangement (CMA) forms, ICRRS rating support schedules, and working capital assessment sheets required by commercial banks.',
      },
      {
        title: 'Business & Share Valuation Reports',
        description:
          'Independent enterprise and equity valuations using Discounted Cash Flow (DCF), Net Asset Value (NAV), and comparable multiples for share transfers, RJSC/Bangladesh Bank filings, or investor negotiations.',
      },
      {
        title: 'Financial & Tax Due Diligence (Buy-Side / Sell-Side)',
        description:
          'Deep-dive investigation into quality of earnings, working capital quality, unrecorded liabilities, and contingent NBR tax/VAT exposures prior to investment or acquisition.',
      },
    ],
    documentsRequired: [
      'Last 3–5 years of Audited Financial Statements and latest provisional management accounts',
      'Existing bank sanction letters, loan repayment schedules, and CIB/facility summaries',
      'Machinery quotations, civil construction estimates, and capacity assumptions (for new/BMRE projects)',
      'Historical revenue breakdown by product/service, unit pricing, and major cost drivers',
      'Corporate statutory documents (MoA/AoA, Form XII, Schedule X) and tax/VAT assessment history',
    ],
    typicalTimeline: [
      {
        phase: 'Commercial & Financial Data Review',
        duration: '3 – 5 Business Days',
        detail: 'Analyzing historical performance, capital structure, and project assumptions.',
      },
      {
        phase: 'Financial Modelling & Valuation / Feasibility Drafting',
        duration: '1 – 3 Weeks',
        detail: 'Building integrated 3-statement projections, ratio analysis, and scenario stress-testing.',
      },
      {
        phase: 'Management Review & Final Report Delivery',
        duration: '2 – 4 Business Days',
        detail: 'Refining assumptions with leadership/lenders and issuing the final bound advisory report.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'Bangladesh Bank Guidelines (ICRRS & Foreign Exchange)', role: 'Sets credit risk rating criteria for bank borrowers and valuation rules for non-resident share transfers' },
      { name: 'IFRS / International Valuation Principles', role: 'Provides methodological standards for fair value measurement and financial projections' },
      { name: 'BSEC & RJSC', role: 'Regulates capital raising, share issuance, and corporate restructuring filings' },
    ],
    faqs: [
      {
        question: 'What do Bangladeshi commercial banks look for in a Project Profile or loan application pack?',
        answer:
          'Banks evaluate historical audited statements, ICRRS quantitative ratios (debt-equity, current ratio, interest coverage, DSCR), realistic capacity utilization assumptions, and reconciliation between declared tax/VAT revenue and bank turnover.',
      },
      {
        question: 'When is a CA-certified share valuation required by Bangladesh Bank?',
        answer:
          'When transferring shares of an unlisted Bangladeshi company between a resident and a non-resident (or between non-residents), Bangladesh Bank Foreign Exchange guidelines require an independent valuation supporting the transaction price using prescribed methodologies.',
      },
      {
        question: 'Do you assist startups with investor-ready financial models and due diligence readiness?',
        answer:
          'Yes. We build clean, driver-based 3–5 year financial models in BDT and USD, organize your virtual data room (VDR), and resolve historical RJSC or tax compliance gaps before investor due diligence begins.',
      },
    ],
  },
  {
    slug: 'internal-audit-risk-forensic',
    number: '08',
    title: 'Internal Audit, Risk & Forensic Support',
    titleBn: 'ইন্টারনাল অডিট, ঝুঁকি মূল্যায়ন ও অভ্যন্তরীণ নিয়ন্ত্রণ',
    shortDescription:
      'Risk-based internal audits, Standard Operating Procedure (SOP) design, internal control reviews, inventory/cash verification, and fraud risk checks.',
    icon: 'SearchCheck',
    overview: [
      'As organisations scale across multiple branches, warehouses, or project sites, informal oversight breaks down—leading to procurement leakage, inventory shrinkage, uncollected receivables, and regulatory non-compliance.',
      'M. S. Salekin & Co. acts as your independent internal audit partner. Rather than producing generic checklists, we test real operational workflows—from purchase requisitions and gate passes to bank reconciliations and credit controls—and design practical Standard Operating Procedures (SOPs) with clear Delegation of Authority (DoA) matrices.',
    ],
    whoItIsFor: [
      'Mid-to-large family businesses and Private Limited Companies transitioning to professional management',
      'Manufacturing plants, retail chains, and distributors managing high-volume inventory and multi-location cash',
      'Publicly listed companies, financial institutions, and NGOs requiring independent internal audit reporting to the Audit Committee',
      'Boards or owners investigating suspected procurement irregularities, payroll leakage, or reconciliation discrepancies',
    ],
    deliverables: [
      {
        title: 'Quarterly / Co-Sourced Internal Audit',
        description:
          'Risk-based operational, financial, and compliance audits conducted quarterly or monthly with direct reporting to the Board or Audit Committee.',
      },
      {
        title: 'Standard Operating Procedures (SOP) & DoA Design',
        description:
          'Drafting end-to-end process manuals for Finance, Procurement, Inventory, Sales, and HR, complete with Delegation of Authority (DoA) approval matrices and control forms.',
      },
      {
        title: 'Physical Inventory & Fixed Asset Verification',
        description:
          'Independent wall-to-wall stock counts, fixed asset tagging, reconciliation with book records, and variance investigation.',
      },
      {
        title: 'Special Investigation & Fraud Risk Reviews',
        description:
          'Fact-finding forensic reviews of vendor pricing, ghost employees, cash defalcation, or expense claims, supported by documented evidence trails.',
      },
    ],
    documentsRequired: [
      'Organogram, existing policy manuals, and Delegation of Authority charts (if any)',
      'Access to ERP/accounting ledgers, procurement files, comparative statements (CS), and GRNs',
      'Warehouse stock ledgers, bin cards, and fixed asset registers',
      'Prior internal or external audit Management Letters',
    ],
    typicalTimeline: [
      {
        phase: 'Risk Assessment & Internal Audit Charter/Plan',
        duration: '3 – 5 Business Days',
        detail: 'Mapping high-risk processes and agreeing the quarterly audit scope with management.',
      },
      {
        phase: 'Process Walkthroughs & Transaction Testing',
        duration: '1 – 2 Weeks per cycle',
        detail: 'Testing procurement, inventory, revenue, cash, and statutory compliance controls.',
      },
      {
        phase: 'SOP Manual Design (Project Basis)',
        duration: '3 – 6 Weeks',
        detail: 'As-is process mapping, control design, management workshops, and final SOP rollout.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'BSEC Corporate Governance Code', role: 'Mandates internal audit functions and Audit Committee oversight for listed companies' },
      { name: 'IIA International Professional Practices Framework', role: 'Benchmarks risk-based internal auditing methodology' },
      { name: 'Companies Act 1994 & Tax/VAT Laws', role: 'Forms the statutory compliance baseline tested during internal audits' },
    ],
    faqs: [
      {
        question: 'How does an Internal Audit differ from our annual Statutory Audit?',
        answer:
          'A statutory audit is conducted once a year primarily to express an opinion on whether historical financial statements are free from material misstatement. Internal audit is an ongoing, forward-looking review of operational efficiency, fraud prevention, cost control, and policy adherence throughout the year.',
      },
      {
        question: 'Can we outsource our entire Internal Audit function to your firm?',
        answer:
          'Yes. Many growing companies in Bangladesh find that outsourcing internal audit to an independent CA firm is more cost-effective and objective than maintaining a full-time internal audit department.',
      },
      {
        question: 'Will the SOPs you design be practical for our local team to follow?',
        answer:
          'Absolutely. We avoid overly bureaucratic manuals; every SOP includes simple visual flowcharts, voucher templates, and a one-page Delegation of Authority table tailored to your team size.',
      },
    ],
  },
  {
    slug: 'transfer-pricing-international-tax',
    number: '09',
    title: 'Transfer Pricing & International Tax',
    titleBn: 'ট্রান্সফার প্রাইসিং ও আন্তর্জাতিক কর পরামর্শ',
    shortDescription:
      'Arm’s-length benchmarking, Chartered Accountant Transfer Pricing certificates, Statement of International Transactions, and DTAA advisory.',
    icon: 'Globe',
    overview: [
      'Foreign subsidiaries, joint ventures, and Bangladeshi groups transacting with overseas associated enterprises face strict Transfer Pricing scrutiny from the NBR Transfer Pricing Cell. Where international transactions exceed the statutory threshold (BDT 3 Crore in an income year), taxpayers must maintain contemporaneous Transfer Pricing documentation and submit a Statement of International Transactions alongside a report from a Chartered Accountant.',
      'M. S. Salekin & Co. advises multinational subsidiaries, sourcing offices, and cross-border service providers on Transfer Pricing compliance, Double Taxation Avoidance Agreement (DTAA) benefits, and withholding tax on outward remittances.',
    ],
    whoItIsFor: [
      'Bangladesh subsidiaries and joint ventures transacting with foreign parent or sister companies',
      'Companies paying royalty, technical know-how, management fees, or software license fees abroad',
      'Export/import enterprises buying from or selling to related overseas entities',
      'Foreign contractors, project offices, and expatriate employers navigating Permanent Establishment (PE) and DTAA rules',
    ],
    deliverables: [
      {
        title: 'Transfer Pricing Study & Local File Documentation',
        description:
          'Functional analysis (FAR — Functions, Assets, Risks), selection of the Most Appropriate Method (MAM), and economic benchmarking to substantiate arm’s-length pricing.',
      },
      {
        title: 'Accountant’s Report & Statement of International Transactions',
        description:
          'Verification and issuance of the statutory Chartered Accountant’s certificate and preparation of the Statement of International Transactions for corporate tax return filing.',
      },
      {
        title: 'Outward Remittance & DTAA Withholding Tax Advisory',
        description:
          'Advisory on withholding tax rates under the Income Tax Act 2023 read with applicable Double Taxation Avoidance Agreements (DTAAs), and obtaining NBR tax certificates for bank remittances.',
      },
    ],
    documentsRequired: [
      'Inter-company agreements (supply, service, royalty, management fee, or loan agreements)',
      'Ledger breakdown and invoices of all international transactions with Associated Enterprises during the income year',
      'Group organizational chart showing ownership linkages and associated relationships',
      'Group Master File / global Transfer Pricing policy and segmented financial statements',
      'Tax Residency Certificate (TRC) of the foreign recipient (for DTAA treaty claims)',
    ],
    typicalTimeline: [
      {
        phase: 'Associated Enterprise & Transaction Scoping',
        duration: '3 – 5 Business Days',
        detail: 'Identifying covered international transactions and assessing the BDT 3 Crore statutory threshold.',
      },
      {
        phase: 'FAR Analysis & Benchmarking Study',
        duration: '2 – 3 Weeks',
        detail: 'Conducting functional interviews, selecting the pricing method, and compiling the TP study report.',
      },
      {
        phase: 'TP Certificate Issuance & Return Filing',
        duration: '2 – 4 Business Days',
        detail: 'Issuing the Chartered Accountant certification prior to the corporate tax return deadline.',
      },
    ],
    lawsAndAuthorities: [
      { name: 'Income Tax Act 2023 (Transfer Pricing Chapter)', role: 'Mandates arm’s-length pricing, TP documentation, and Accountant’s Report for international transactions > BDT 3 Crore' },
      { name: 'NBR Transfer Pricing Cell & International Tax Wing', role: 'Conducts Transfer Pricing audits and administers bilateral DTAAs' },
      { name: 'Bangladesh Bank Foreign Exchange Guidelines', role: 'Regulates outward remittances for royalties, technical fees, and dividends' },
    ],
    faqs: [
      {
        question: 'When is Transfer Pricing documentation and a CA Certificate mandatory in Bangladesh?',
        answer:
          'Under the Income Tax Act 2023, every entity entering into international transactions with associated enterprises must submit a Statement of International Transactions with its return, and where the aggregate value of international transactions exceeds BDT 3 Crore (30 million Taka) in an income year, must maintain formal TP documentation and furnish a report signed by a Chartered Accountant.',
      },
      {
        question: 'Can we automatically apply a lower withholding tax rate under a Double Taxation Avoidance Agreement (DTAA)?',
        answer:
          'To avail reduced withholding rates under one of Bangladesh’s DTAAs, the payer generally needs to verify treaty eligibility (including Tax Residency Certificate and beneficial ownership) and obtain appropriate clearance/certification in accordance with NBR procedures before remitting funds.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesList.find((service) => service.slug === slug);
}
