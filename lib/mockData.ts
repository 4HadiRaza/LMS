export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  coursesCount: number;
  studentsCount: number;
  rating: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  type: 'video' | 'article' | 'quiz';
  isPreview?: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  instructor: string;
  instructorId: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  modules: Module[];
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  price: number | null;
  originalPrice?: number | null;
  thumbnail: string;
  tags: string[];
  badge?: 'bestseller' | 'new' | 'free';
  lastUpdated: string;
  language: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  courseCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  rating: number;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  title: string;
  rating: number;
  content: string;
  date: string;
}

// ─── Instructors ─────────────────────────────────────────────
export const instructors: Instructor[] = [
  {
    id: 'instr-1',
    name: 'Barrister Ahmed Khan',
    title: 'Senior Tax Consultant & SC Advocate',
    bio: 'With over 20 years of experience in Pakistan corporate law, Barrister Ahmed has successfully represented dozens of Fortune 100 companies in tax litigation before the Appellate Tribunals and High Courts. He is a frequent contributor to leading financial journals and a visiting professor at the National Academy of Taxation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    coursesCount: 4,
    studentsCount: 4200,
    rating: 4.9,
  },
  {
    id: 'instr-2',
    name: 'Fatima Khan, FCA',
    title: 'Bookkeeping & Small Business Expert',
    bio: 'Dedicated to helping small business owners master bookkeeping and tax planning. Published author and frequent conference speaker with expertise in modern accounting software integration.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    coursesCount: 3,
    studentsCount: 6800,
    rating: 4.8,
  },
  {
    id: 'instr-3',
    name: 'Muhammad Saleem, ACCA',
    title: 'Audit & Compliance Professional',
    bio: 'Specialist in internal and external audits with 15 years at Big Four firms. Expert in corporate governance, COSO frameworks, and regulatory compliance across Pakistan and the Middle East.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    coursesCount: 2,
    studentsCount: 2285,
    rating: 4.7,
  },
  {
    id: 'instr-4',
    name: 'Dr. Ayesha Ali, PhD',
    title: 'IFRS & Corporate Accounting Lead',
    bio: 'International accounting standards expert with 12 years in multinational corporations. IFRS-certified trainer who has trained over 5,000 professionals across South Asia.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    coursesCount: 3,
    studentsCount: 3540,
    rating: 4.9,
  },
];

// ─── Categories ──────────────────────────────────────────────
export const categories: Category[] = [
  { id: 'cat-1', name: 'Income Tax', slug: 'income-tax', description: 'Comprehensive analysis of the Income Tax Ordinance 2001, updated for current fiscal year.', courseCount: 3 },
  { id: 'cat-2', name: 'Sales Tax & GST', slug: 'sales-tax', description: 'Master sales tax compliance, registration, and audit preparation.', courseCount: 2 },
  { id: 'cat-3', name: 'Corporate Accounting', slug: 'corporate-accounting', description: 'IFRS standards and corporate financial reporting for modern businesses.', courseCount: 2 },
  { id: 'cat-4', name: 'FBR Compliance', slug: 'fbr-compliance', description: 'Stay compliant with FBR regulations and avoid penalties.', courseCount: 1 },
  { id: 'cat-5', name: 'Bookkeeping', slug: 'bookkeeping', description: 'Essential bookkeeping skills from fundamentals to software mastery.', courseCount: 2 },
  { id: 'cat-6', name: 'Audit & Assurance', slug: 'audit', description: 'Internal controls, audit procedures, and corporate governance.', courseCount: 2 },
];

// ─── Courses ─────────────────────────────────────────────────
export const courses: Course[] = [
  {
    id: 'course-1',
    slug: 'fbr-income-tax-return-filing-2024',
    title: 'Mastering Income Tax Ordinances',
    description: 'Master the complete process of filing income tax returns with FBR. Updated for 2024 regulations and fiscal year requirements.',
    longDescription: 'This comprehensive course covers everything you need to know about filing income tax returns with the Federal Board of Revenue (FBR). Learn the latest 2024 regulations, forms, deadlines, and best practices. Perfect for professionals, self-employed individuals, and tax practitioners looking to master compliance.',
    instructor: 'Barrister Ahmed Khan',
    instructorId: 'instr-1',
    category: 'Income Tax',
    level: 'Intermediate',
    duration: 16,
    modules: [
      {
        id: 'mod-1-1', title: 'The Legal Framework of Taxation',
        lessons: [
          { id: 'l1-1', title: 'Understanding the Constitution & Tax Power', duration: 45, type: 'video', isPreview: true },
          { id: 'l1-2', title: 'Hierarchy of Tax Authorities: FBR to Supreme Court', duration: 60, type: 'video' },
          { id: 'l1-3', title: 'Module Quiz: Legal Principles', duration: 15, type: 'quiz' },
        ],
      },
      {
        id: 'mod-1-2', title: 'Income from Business & Salary',
        lessons: [
          { id: 'l1-4', title: 'Form 1 & Form 2 Explained', duration: 90, type: 'video' },
          { id: 'l1-5', title: 'Deductions & Exemptions', duration: 75, type: 'video' },
        ],
      },
      {
        id: 'mod-1-3', title: 'Tax Credits & Submission',
        lessons: [
          { id: 'l1-6', title: 'Tax Credits and Rebates', duration: 60, type: 'video' },
          { id: 'l1-7', title: 'Submission and Approval Process', duration: 50, type: 'article' },
          { id: 'l1-8', title: 'Final Assessment', duration: 20, type: 'quiz' },
        ],
      },
    ],
    rating: 4.8,
    reviewCount: 342,
    enrollmentCount: 2150,
    price: 15500,
    originalPrice: 25000,
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
    tags: ['FBR', 'Tax', 'Compliance', '2024'],
    badge: 'bestseller',
    lastUpdated: 'November 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-2',
    slug: 'corporate-accounting-with-ifrs',
    title: 'Corporate Accounting with IFRS Standards',
    description: 'Learn international financial reporting standards and corporate accounting principles for multinational practice.',
    longDescription: 'A deep dive into International Financial Reporting Standards (IFRS) and corporate accounting. Designed for finance professionals and accountants working in multinational corporations who need to master global reporting standards.',
    instructor: 'Dr. Ayesha Ali, PhD',
    instructorId: 'instr-4',
    category: 'Corporate Accounting',
    level: 'Advanced',
    duration: 24,
    modules: [
      {
        id: 'mod-2-1', title: 'IFRS Framework & Revenue Recognition',
        lessons: [
          { id: 'l2-1', title: 'IFRS Framework Overview', duration: 60, type: 'video', isPreview: true },
          { id: 'l2-2', title: 'Revenue Recognition (IFRS 15)', duration: 90, type: 'video' },
          { id: 'l2-3', title: 'Practical Exercises', duration: 45, type: 'article' },
        ],
      },
      {
        id: 'mod-2-2', title: 'Lease & Financial Instruments',
        lessons: [
          { id: 'l2-4', title: 'Lease Accounting (IFRS 16)', duration: 75, type: 'video' },
          { id: 'l2-5', title: 'Financial Instruments (IFRS 9)', duration: 85, type: 'video' },
        ],
      },
      {
        id: 'mod-2-3', title: 'Consolidation & Presentation',
        lessons: [
          { id: 'l2-6', title: 'Consolidation & Group Accounting', duration: 100, type: 'video' },
          { id: 'l2-7', title: 'Financial Statement Presentation', duration: 70, type: 'video' },
          { id: 'l2-8', title: 'Case Studies & Application', duration: 95, type: 'article' },
          { id: 'l2-9', title: 'Comprehensive Final Exam', duration: 30, type: 'quiz' },
        ],
      },
    ],
    rating: 4.9,
    reviewCount: 215,
    enrollmentCount: 890,
    price: 22500,
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600',
    tags: ['IFRS', 'Accounting', 'Corporate'],
    lastUpdated: 'October 2024',
    language: 'English',
  },
  {
    id: 'course-3',
    slug: 'sales-tax-practitioner-guide',
    title: 'Advanced Sales Tax & VAT Compliance',
    description: 'Complete guide to sales tax compliance, audit preparation, and VAT implementation across jurisdictions.',
    longDescription: 'Master sales tax regulations, filing requirements, and audit defense strategies. Ideal for practitioners, business owners, and tax consultants working across multiple tax jurisdictions.',
    instructor: 'Fatima Khan, FCA',
    instructorId: 'instr-2',
    category: 'Sales Tax & GST',
    level: 'Intermediate',
    duration: 14,
    modules: [
      {
        id: 'mod-3-1', title: 'Sales Tax Fundamentals',
        lessons: [
          { id: 'l3-1', title: 'Sales Tax Basics & Registration', duration: 50, type: 'video', isPreview: true },
          { id: 'l3-2', title: 'Taxable vs Non-Taxable Items', duration: 65, type: 'video' },
          { id: 'l3-3', title: 'Tax Exemptions & Certificates', duration: 55, type: 'video' },
        ],
      },
      {
        id: 'mod-3-2', title: 'Filing & Audit Defense',
        lessons: [
          { id: 'l3-4', title: 'Return Filing & Payments', duration: 70, type: 'video' },
          { id: 'l3-5', title: 'Audit Preparation Strategies', duration: 75, type: 'video' },
          { id: 'l3-6', title: 'Common Audit Issues & Solutions', duration: 60, type: 'article' },
        ],
      },
    ],
    rating: 4.7,
    reviewCount: 189,
    enrollmentCount: 1420,
    price: 12000,
    originalPrice: 18000,
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
    tags: ['Sales Tax', 'Compliance', 'Audit'],
    badge: 'new',
    lastUpdated: 'December 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-4',
    slug: 'bookkeeping-for-small-businesses',
    title: 'Bookkeeping for Small Businesses',
    description: 'Essential bookkeeping skills for entrepreneurs and small business owners. No accounting background required.',
    longDescription: 'Learn the fundamentals of bookkeeping, from basic journal entries to preparing financial statements. This beginner-friendly course requires no prior accounting knowledge.',
    instructor: 'Fatima Khan, FCA',
    instructorId: 'instr-2',
    category: 'Bookkeeping',
    level: 'Beginner',
    duration: 12,
    modules: [
      {
        id: 'mod-4-1', title: 'Accounting Fundamentals',
        lessons: [
          { id: 'l4-1', title: 'Accounting Basics & Principles', duration: 50, type: 'video', isPreview: true },
          { id: 'l4-2', title: 'Chart of Accounts Setup', duration: 45, type: 'video' },
          { id: 'l4-3', title: 'Journal Entries Practice', duration: 60, type: 'article' },
        ],
      },
      {
        id: 'mod-4-2', title: 'Ledgers & Financial Statements',
        lessons: [
          { id: 'l4-4', title: 'General Ledger & Posting', duration: 55, type: 'video' },
          { id: 'l4-5', title: 'Trial Balance', duration: 40, type: 'video' },
          { id: 'l4-6', title: 'Financial Statements Basics', duration: 50, type: 'video' },
          { id: 'l4-7', title: 'Module Assessment', duration: 15, type: 'quiz' },
        ],
      },
    ],
    rating: 4.6,
    reviewCount: 456,
    enrollmentCount: 3200,
    price: null,
    originalPrice: 5000,
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600',
    tags: ['Bookkeeping', 'Beginner', 'Business'],
    badge: 'free',
    lastUpdated: 'September 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-5',
    slug: 'fbr-compliance-essentials',
    title: 'FBR Compliance Essentials',
    description: 'Stay compliant with Federal Board of Revenue regulations and avoid costly penalties.',
    longDescription: 'A practical guide to understanding FBR requirements, documentation, and compliance strategies for businesses of all sizes operating in Pakistan.',
    instructor: 'Barrister Ahmed Khan',
    instructorId: 'instr-1',
    category: 'FBR Compliance',
    level: 'Beginner',
    duration: 10,
    modules: [
      {
        id: 'mod-5-1', title: 'FBR Structure & Registration',
        lessons: [
          { id: 'l5-1', title: 'FBR Overview & Structure', duration: 40, type: 'video', isPreview: true },
          { id: 'l5-2', title: 'Registration & Documentation', duration: 50, type: 'video' },
        ],
      },
      {
        id: 'mod-5-2', title: 'Compliance & Reporting',
        lessons: [
          { id: 'l5-3', title: 'Record Keeping Requirements', duration: 55, type: 'video' },
          { id: 'l5-4', title: 'Reporting Obligations', duration: 50, type: 'video' },
          { id: 'l5-5', title: 'Penalties & Compliance Issues', duration: 45, type: 'article' },
        ],
      },
    ],
    rating: 4.5,
    reviewCount: 178,
    enrollmentCount: 950,
    price: 8500,
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
    tags: ['FBR', 'Compliance', 'Regulations'],
    lastUpdated: 'August 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-6',
    slug: 'audit-fundamentals',
    title: 'Practical Guide to Tax Audits & Assurance',
    description: 'Introduction to internal and external audit processes, evidence collection, and reporting standards.',
    longDescription: 'Learn the principles of auditing, evidence collection, audit planning, and reporting. Essential for aspiring auditors and accounting professionals.',
    instructor: 'Muhammad Saleem, ACCA',
    instructorId: 'instr-3',
    category: 'Audit & Assurance',
    level: 'Intermediate',
    duration: 18,
    modules: [
      {
        id: 'mod-6-1', title: 'Audit Standards & Planning',
        lessons: [
          { id: 'l6-1', title: 'Audit Objectives & Standards', duration: 60, type: 'video', isPreview: true },
          { id: 'l6-2', title: 'Audit Planning & Strategy', duration: 70, type: 'video' },
          { id: 'l6-3', title: 'Risk Assessment Techniques', duration: 65, type: 'video' },
        ],
      },
      {
        id: 'mod-6-2', title: 'Evidence & Reporting',
        lessons: [
          { id: 'l6-4', title: 'Audit Evidence Collection', duration: 75, type: 'video' },
          { id: 'l6-5', title: 'Audit Procedures in Practice', duration: 80, type: 'video' },
          { id: 'l6-6', title: 'Audit Report Writing', duration: 60, type: 'article' },
          { id: 'l6-7', title: 'Final Assessment', duration: 20, type: 'quiz' },
        ],
      },
    ],
    rating: 4.9,
    reviewCount: 234,
    enrollmentCount: 1560,
    price: 19000,
    originalPrice: 28000,
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    tags: ['Audit', 'Standards', 'Procedures'],
    badge: 'bestseller',
    lastUpdated: 'November 2024',
    language: 'English',
  },
  {
    id: 'course-7',
    slug: 'advanced-tax-planning',
    title: 'Tax Planning Strategies for High-Net-Worth',
    description: 'Advanced tax optimization techniques for high-income earners, businesses, and investment portfolios.',
    longDescription: 'Advanced strategies for minimizing tax liability through legal tax planning methods. Covers corporate structures, investments, and deductions for sophisticated taxpayers.',
    instructor: 'Barrister Ahmed Khan',
    instructorId: 'instr-1',
    category: 'Income Tax',
    level: 'Advanced',
    duration: 20,
    modules: [
      {
        id: 'mod-7-1', title: 'Tax Planning Principles',
        lessons: [
          { id: 'l7-1', title: 'Fundamentals of Tax Planning', duration: 60, type: 'video', isPreview: true },
          { id: 'l7-2', title: 'Business Structure Selection', duration: 75, type: 'video' },
        ],
      },
      {
        id: 'mod-7-2', title: 'Investment & Estate Planning',
        lessons: [
          { id: 'l7-3', title: 'Investment Tax Strategies', duration: 80, type: 'video' },
          { id: 'l7-4', title: 'Retirement & Estate Planning', duration: 70, type: 'video' },
          { id: 'l7-5', title: 'International Taxation', duration: 90, type: 'video' },
          { id: 'l7-6', title: 'Comprehensive Case Study', duration: 65, type: 'article' },
        ],
      },
    ],
    rating: 4.8,
    reviewCount: 198,
    enrollmentCount: 620,
    price: 25000,
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600',
    tags: ['Tax Planning', 'Advanced', 'Strategy'],
    lastUpdated: 'October 2024',
    language: 'English',
  },
  {
    id: 'course-8',
    slug: 'financial-statement-analysis',
    title: 'Forensic Accounting & FBR E-filing',
    description: 'Analyze financial statements like a professional analyst with hands-on FBR e-filing practice.',
    longDescription: 'Learn to read, understand, and analyze financial statements. Covers ratio analysis, trend analysis, financial forecasting, and FBR electronic filing procedures.',
    instructor: 'Dr. Ayesha Ali, PhD',
    instructorId: 'instr-4',
    category: 'Corporate Accounting',
    level: 'Intermediate',
    duration: 15,
    modules: [
      {
        id: 'mod-8-1', title: 'Financial Statement Fundamentals',
        lessons: [
          { id: 'l8-1', title: 'Understanding the Balance Sheet', duration: 50, type: 'video', isPreview: true },
          { id: 'l8-2', title: 'Income Statement Analysis', duration: 55, type: 'video' },
          { id: 'l8-3', title: 'Cash Flow Analysis', duration: 60, type: 'video' },
        ],
      },
      {
        id: 'mod-8-2', title: 'Advanced Analysis & E-filing',
        lessons: [
          { id: 'l8-4', title: 'Ratio Analysis Techniques', duration: 70, type: 'video' },
          { id: 'l8-5', title: 'FBR E-filing Walkthrough', duration: 65, type: 'video' },
          { id: 'l8-6', title: 'Financial Forecasting', duration: 50, type: 'article' },
        ],
      },
    ],
    rating: 4.5,
    reviewCount: 267,
    enrollmentCount: 1850,
    price: 8500,
    originalPrice: 14000,
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600',
    tags: ['Financial Analysis', 'E-filing', 'FBR'],
    lastUpdated: 'September 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-9',
    slug: 'international-taxation-treaties',
    title: 'International Taxation & Treaty Obligations',
    description: 'Complete guide to cross-border taxation, double taxation treaties, and transfer pricing.',
    longDescription: 'Understand international tax regulations, treaty networks, transfer pricing rules, and compliance for businesses operating across borders.',
    instructor: 'Dr. Ayesha Ali, PhD',
    instructorId: 'instr-4',
    category: 'Income Tax',
    level: 'Advanced',
    duration: 13,
    modules: [
      {
        id: 'mod-9-1', title: 'International Tax Framework',
        lessons: [
          { id: 'l9-1', title: 'Cross-Border Tax Principles', duration: 45, type: 'video', isPreview: true },
          { id: 'l9-2', title: 'Double Taxation Treaties', duration: 50, type: 'video' },
          { id: 'l9-3', title: 'Transfer Pricing Rules', duration: 60, type: 'video' },
        ],
      },
      {
        id: 'mod-9-2', title: 'Compliance & Reporting',
        lessons: [
          { id: 'l9-4', title: 'Treaty Benefits & Claims', duration: 55, type: 'video' },
          { id: 'l9-5', title: 'Country-by-Country Reporting', duration: 50, type: 'article' },
        ],
      },
    ],
    rating: 4.8,
    reviewCount: 134,
    enrollmentCount: 580,
    price: 25000,
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
    tags: ['International', 'Treaties', 'Transfer Pricing'],
    lastUpdated: 'November 2024',
    language: 'English',
  },
  {
    id: 'course-10',
    slug: 'internal-controls-and-governance',
    title: 'Internal Controls & Corporate Governance',
    description: 'Build effective internal control systems and governance frameworks for organizational excellence.',
    longDescription: 'Learn to design and implement internal controls, compliance frameworks, and corporate governance best practices aligned with COSO and international standards.',
    instructor: 'Muhammad Saleem, ACCA',
    instructorId: 'instr-3',
    category: 'Audit & Assurance',
    level: 'Advanced',
    duration: 22,
    modules: [
      {
        id: 'mod-10-1', title: 'COSO Framework & Control Environment',
        lessons: [
          { id: 'l10-1', title: 'COSO Framework Overview', duration: 70, type: 'video', isPreview: true },
          { id: 'l10-2', title: 'Control Environment Design', duration: 65, type: 'video' },
          { id: 'l10-3', title: 'Risk Assessment Methodology', duration: 60, type: 'video' },
        ],
      },
      {
        id: 'mod-10-2', title: 'Activities, Monitoring & Governance',
        lessons: [
          { id: 'l10-4', title: 'Control Activities Implementation', duration: 75, type: 'video' },
          { id: 'l10-5', title: 'Monitoring & Reporting', duration: 70, type: 'video' },
          { id: 'l10-6', title: 'Governance Best Practices', duration: 80, type: 'article' },
        ],
      },
    ],
    rating: 4.7,
    reviewCount: 156,
    enrollmentCount: 725,
    price: 14000,
    thumbnail: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600',
    tags: ['Governance', 'Controls', 'COSO'],
    lastUpdated: 'October 2024',
    language: 'English',
  },
  {
    id: 'course-11',
    slug: 'withholding-tax-obligations',
    title: 'Withholding Tax Obligations for Businesses',
    description: 'Master withholding tax documentation requirements and record-keeping best practices for Pakistani businesses.',
    longDescription: 'Learn what documents to maintain, how to organize withholding obligations, and how to prepare for tax audits with proper record keeping under current FBR rules.',
    instructor: 'Barrister Ahmed Khan',
    instructorId: 'instr-1',
    category: 'Sales Tax & GST',
    level: 'Beginner',
    duration: 8,
    modules: [
      {
        id: 'mod-11-1', title: 'Withholding Tax Basics',
        lessons: [
          { id: 'l11-1', title: 'Withholding Tax Overview', duration: 40, type: 'video', isPreview: true },
          { id: 'l11-2', title: 'Applicable Sections & Rates', duration: 45, type: 'video' },
        ],
      },
      {
        id: 'mod-11-2', title: 'Record Keeping & Compliance',
        lessons: [
          { id: 'l11-3', title: 'Digital Record Keeping', duration: 50, type: 'video' },
          { id: 'l11-4', title: 'Audit Preparation Checklist', duration: 45, type: 'article' },
        ],
      },
    ],
    rating: 4.7,
    reviewCount: 89,
    enrollmentCount: 650,
    price: 14000,
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
    tags: ['Withholding', 'Records', 'Compliance'],
    lastUpdated: 'August 2024',
    language: 'English & Urdu',
  },
  {
    id: 'course-12',
    slug: 'filing-personal-income-tax',
    title: 'Filing Personal Income Tax Returns',
    description: 'Hands-on guide to personal income tax filing using modern tools and FBR IRIS portal.',
    longDescription: 'Practical training in using FBR IRIS portal for personal tax return filing, understanding tax slabs, and claiming maximum deductions.',
    instructor: 'Fatima Khan, FCA',
    instructorId: 'instr-2',
    category: 'Bookkeeping',
    level: 'Beginner',
    duration: 16,
    modules: [
      {
        id: 'mod-12-1', title: 'Getting Started with IRIS',
        lessons: [
          { id: 'l12-1', title: 'IRIS Portal Overview & Setup', duration: 60, type: 'video', isPreview: true },
          { id: 'l12-2', title: 'Understanding Tax Slabs', duration: 50, type: 'video' },
          { id: 'l12-3', title: 'Income Sources & Documentation', duration: 65, type: 'video' },
        ],
      },
      {
        id: 'mod-12-2', title: 'Filing & Optimization',
        lessons: [
          { id: 'l12-4', title: 'Step-by-Step Return Filing', duration: 55, type: 'video' },
          { id: 'l12-5', title: 'Deductions & Tax Credits', duration: 60, type: 'video' },
          { id: 'l12-6', title: 'Common Mistakes to Avoid', duration: 50, type: 'article' },
        ],
      },
    ],
    rating: 4.8,
    reviewCount: 312,
    enrollmentCount: 2100,
    price: 9900,
    originalPrice: 15000,
    thumbnail: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600',
    tags: ['Personal Tax', 'IRIS', 'Filing'],
    badge: 'bestseller',
    lastUpdated: 'December 2024',
    language: 'English & Urdu',
  },
];

// ─── Testimonials ────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Saad M., CA Finalist',
    title: 'Tax Consultant',
    content: 'The clarity provided on Section 149 (Minimum Tax) is better than any textbook I\'ve read. Essential for anyone appearing in ICAP exams.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 'test-2',
    name: 'Farhan A., Legal Practitioner',
    title: 'Advocate High Court',
    content: 'Very high quality production. The case study on tax treaty conflicts was particularly eye-opening. Highly recommended for professionals.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 'test-3',
    name: 'Ayesha Malik',
    title: 'Small Business Owner',
    content: 'I had no accounting background, but the Bookkeeping course made everything clear. Now I manage my books confidently without an accountant.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
];

// ─── Reviews ─────────────────────────────────────────────────
export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Saad M., CA Finalist',
    title: 'CA Finalist',
    rating: 5,
    content: 'The clarity provided on Section 149 (Minimum Tax) is better than any textbook I\'ve read. Essential for anyone appearing in ICAP exams.',
    date: '2 weeks ago',
  },
  {
    id: 'rev-2',
    name: 'Farhan A.',
    title: 'Legal Practitioner',
    rating: 5,
    content: 'Very high quality production. The case study on tax treaty conflicts was particularly eye-opening. Highly recommended for professionals.',
    date: '1 month ago',
  },
  {
    id: 'rev-3',
    name: 'Zara Sheikh',
    title: 'Finance Manager',
    rating: 4,
    content: 'Comprehensive content with practical examples. Would have liked more interactive exercises, but overall excellent value.',
    date: '1 month ago',
  },
  {
    id: 'rev-4',
    name: 'Omar Raza',
    title: 'Tax Consultant',
    rating: 5,
    content: 'This course transformed how I approach client tax planning. The instructor\'s real-world experience shines through in every module.',
    date: '3 months ago',
  },
];

// ─── Helpers ─────────────────────────────────────────────────
export function getTotalLessons(course: Course): number {
  return course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
}

export function getTotalDurationMinutes(course: Course): number {
  return course.modules.reduce(
    (acc, mod) => acc + mod.lessons.reduce((a, l) => a + l.duration, 0),
    0
  );
}
