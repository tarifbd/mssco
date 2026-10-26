export interface FaqItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  category: string;
}

export const homeFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Practice & Governance',
    question: 'What types of clients does M. S. Salekin & Co. serve in Bangladesh?',
    questionBn: 'M. S. Salekin & Co. বাংলাদেশে কোন ধরনের ক্লায়েন্টদের সেবা প্রদান করে?',
    answer:
      'We serve Private and Public Limited Companies, SMEs, family-owned businesses, RMG and industrial manufacturers, commercial importers/exporters, IT/ITES firms, freelancers, local and international NGOs, foreign-invested subsidiaries/branch offices, and individual taxpayers across Bangladesh.',
  },
  {
    id: 'faq-2',
    category: 'Audit & Assurance',
    question: 'When is a Statutory Audit legally mandatory in Bangladesh?',
    questionBn: 'বাংলাদেশে স্ট্যাট্যুটরি অডিট (Statutory Audit) কখন আইনত বাধ্যতামূলক?',
    answer:
      'Under the Companies Act 1994, every Private and Public Limited Company registered with RJSC must have its annual financial statements audited by a Chartered Accountant firm in practice. Additionally, the Income Tax Act 2023, NGO Affairs Bureau (NGOAB), FRC, and commercial banks mandate audited financial statements for specified entities and turnover thresholds.',
  },
  {
    id: 'faq-3',
    category: 'Income Tax (NBR)',
    question: 'What documents are required to file an Individual Income Tax Return in Bangladesh?',
    questionBn: 'ব্যক্তি করদাতার আয়কর রিটার্ন দাখিলের জন্য কী কী কাগজপত্র প্রয়োজন?',
    answer:
      'Generally, you will need your 12-digit e-TIN Certificate, prior year tax return and PSR, full July–June bank statements for all accounts, employer salary and TDS certificates (if salaried), Sanchayapatra/FDR certificates, BO account statements, proof of eligible tax-rebate investments (such as DPS or Treasury Bonds), and documentation for any property or vehicle purchases/sales.',
  },
  {
    id: 'faq-4',
    category: 'VAT & Customs',
    question: 'What is the monthly VAT return (Mushak 9.1) deadline, and what if we had no sales?',
    questionBn: 'মাসিক ভ্যাট রিটার্ন (মূসক ৯.১) দাখিলের শেষ তারিখ কবে এবং কোনো বিক্রি না থাকলে কী করণীয়?',
    answer:
      'Under the Value Added Tax and Supplementary Duty Act 2012, every VAT-registered entity must submit its monthly Mushak 9.1 return on or before the 15th day of the following month. Even if a business has zero sales or purchases during a month, a “Nil” Mushak 9.1 return must still be filed on time to avoid statutory non-filing penalties.',
  },
  {
    id: 'faq-5',
    category: 'Company Formation',
    question: 'How long does it take to incorporate a Private Limited Company with RJSC?',
    questionBn: 'আরজেএসসি (RJSC)-তে প্রাইভেট লিমিটেড কোম্পানি নিবন্ধন করতে কত দিন সময় লাগে?',
    answer:
      'Once Name Clearance is obtained and all subscriber NIDs, e-TINs, and signed Memorandum & Articles of Association (MoA/AoA) are ready (along with an AD Bank Encashment Certificate if there are foreign shareholders), RJSC incorporation typically takes 3 to 7 business days, followed by 5 to 10 business days for post-incorporation e-TIN, Trade License, and e-BIN setup.',
  },
  {
    id: 'faq-6',
    category: 'Foreign Investment',
    question: 'Can foreign investors set up a 100% foreign-owned company or Branch/Liaison Office in Bangladesh?',
    questionBn: 'বিদেশি বিনিয়োগকারীরা কি বাংলাদেশে ১০০% বিদেশি মালিকানাধীন কোম্পানি বা ব্রাঞ্চ/লিয়াজোঁ অফিস স্থাপন করতে পারেন?',
    answer:
      'Yes. Foreign investors can incorporate a 100% foreign-owned Private Limited Subsidiary or a Joint Venture at RJSC (in most sectors) by remitting paid-up capital through an Authorized Dealer bank. Alternatively, foreign parent companies can establish a Liaison Office or Branch Office with permission from the Bangladesh Investment Development Authority (BIDA) and reporting to Bangladesh Bank.',
  },
  {
    id: 'faq-7',
    category: 'Fees & Engagement',
    question: 'How are professional fees structured at your firm?',
    questionBn: 'আপনাদের ফার্মে পেশাগত ফি কীভাবে নির্ধারণ করা হয়?',
    answer:
      'We follow a transparent, written fee structure in BDT (৳) aligned with the scope, complexity, transaction volume, and professional time required, in keeping with ICAB guidelines. Before starting any work, we issue a formal Engagement Letter detailing the scope of services, deliverables, statutory government fees (if any), and professional fee milestones.',
  },
  {
    id: 'faq-8',
    category: 'Confidentiality',
    question: 'How do you protect the confidentiality of our financial and tax records?',
    questionBn: 'আমাদের আর্থিক ও কর সংক্রান্ত তথ্যের গোপনীয়তা কীভাবে রক্ষা করা হয়?',
    answer:
      'Client confidentiality is a binding obligation under the ICAB Code of Ethics. All documents shared with M. S. Salekin & Co. are restricted strictly to the principal CA and assigned engagement personnel, never disclosed to third parties without your explicit written authorization or legal compulsion, and may be covered by a formal Non-Disclosure Agreement (NDA) upon request.',
  },
];
