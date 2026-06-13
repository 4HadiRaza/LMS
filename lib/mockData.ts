// ─── Interfaces ──────────────────────────────────────────────

export interface LiveClass {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  instructor: string;
  thumbnail: string;
}

export interface MysirgCourse {
  id: string;
  title: string;
  thumbnail: string;
  lessonCount: number;
  trialCount?: number;
  price: number | null;       // null = FREE
  originalPrice?: number;
  discountPercent?: number;
}

export interface Batch {
  id: string;
  title: string;
  thumbnail: string;
}

// ─── Live Classes ────────────────────────────────────────────

export const liveClasses: LiveClass[] = [
  {
    id: 'live-1',
    category: 'Tax Filing LIVE',
    title: 'LIVE Doubt Session | Income Tax Return Filing 2025',
    date: 'Jun 15, 2026',
    time: '08:00 PM',
    instructor: 'Barrister Ahmed Khan',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop',
  },
  {
    id: 'live-2',
    category: 'FBR Compliance LIVE',
    title: 'FBR IRIS Portal | E-Filing Walkthrough',
    date: 'Jun 16, 2026',
    time: '07:00 PM',
    instructor: 'Fatima Khan, FCA',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=450&fit=crop',
  },
  {
    id: 'live-3',
    category: 'Sales Tax LIVE',
    title: 'Sales Tax & GST | Provincial Compliance',
    date: 'Jun 17, 2026',
    time: '09:00 PM',
    instructor: 'Dr. Ayesha Ali, PhD',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=450&fit=crop',
  },
  {
    id: 'live-4',
    category: 'Bookkeeping LIVE',
    title: 'QuickBooks for Pakistani Businesses | Session 8',
    date: 'Jun 18, 2026',
    time: '06:00 PM',
    instructor: 'Muhammad Saleem, ACCA',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=450&fit=crop',
  },
];

// ─── Courses ─────────────────────────────────────────────────

export const courses: MysirgCourse[] = [
  {
    id: 'course-1',
    title: 'Mastering Income Tax Ordinances 2001',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=340&fit=crop',
    lessonCount: 150,
    trialCount: 1,
    price: 15500,
    originalPrice: 25000,
    discountPercent: 38,
  },
  {
    id: 'course-2',
    title: 'Corporate Accounting with IFRS Standards',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=340&fit=crop',
    lessonCount: 120,
    trialCount: 1,
    price: 22500,
    originalPrice: 35000,
    discountPercent: 36,
  },
  {
    id: 'course-3',
    title: 'Advanced Sales Tax & VAT Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=340&fit=crop',
    lessonCount: 95,
    price: 12000,
    originalPrice: 18000,
    discountPercent: 33,
  },
  {
    id: 'course-4',
    title: 'Bookkeeping for Small Businesses',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=340&fit=crop',
    lessonCount: 60,
    price: null,
  },
  {
    id: 'course-5',
    title: 'FBR Compliance Essentials for Businesses',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=340&fit=crop',
    lessonCount: 85,
    trialCount: 1,
    price: 8500,
    originalPrice: 14000,
    discountPercent: 39,
  },
  {
    id: 'course-6',
    title: 'Practical Guide to Tax Audits & Assurance',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=340&fit=crop',
    lessonCount: 110,
    price: 19000,
    originalPrice: 28000,
    discountPercent: 32,
  },
  {
    id: 'course-7',
    title: 'Introduction to Pakistani Tax Law',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=340&fit=crop',
    lessonCount: 45,
    price: null,
  },
  {
    id: 'course-8',
    title: 'Forensic Accounting & FBR E-Filing',
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=340&fit=crop',
    lessonCount: 90,
    price: 8500,
    originalPrice: 14000,
    discountPercent: 39,
  },
  {
    id: 'course-9',
    title: 'International Taxation & Treaty Obligations',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=340&fit=crop',
    lessonCount: 75,
    trialCount: 1,
    price: 25000,
    originalPrice: 40000,
    discountPercent: 38,
  },
  {
    id: 'course-10',
    title: 'Withholding Tax Obligations for Businesses',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=340&fit=crop',
    lessonCount: 50,
    price: null,
  },
  {
    id: 'course-11',
    title: 'Tax Planning for High-Net-Worth Individuals',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=340&fit=crop',
    lessonCount: 130,
    price: 25000,
    originalPrice: 38000,
    discountPercent: 34,
  },
  {
    id: 'course-12',
    title: 'Filing Personal Income Tax Returns (IRIS)',
    thumbnail: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=340&fit=crop',
    lessonCount: 100,
    price: 9900,
    originalPrice: 15000,
    discountPercent: 34,
  },
  {
    id: 'course-13',
    title: 'Internal Controls & Corporate Governance',
    thumbnail: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=340&fit=crop',
    lessonCount: 70,
    price: null,
  },
  {
    id: 'course-14',
    title: 'Record-Keeping & Audit Preparation',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=340&fit=crop',
    lessonCount: 40,
    price: 5500,
    originalPrice: 9000,
    discountPercent: 39,
  },
  {
    id: 'course-15',
    title: 'CA Exam Preparation — Tax Module',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=340&fit=crop',
    lessonCount: 200,
    trialCount: 1,
    price: 35000,
    originalPrice: 55000,
    discountPercent: 36,
  },
  {
    id: 'course-16',
    title: 'Payroll Management & EOBI Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop',
    lessonCount: 55,
    price: 7500,
    originalPrice: 12000,
    discountPercent: 38,
  },
];

// ─── Batches ─────────────────────────────────────────────────

export const batches: Batch[] = [
  {
    id: 'batch-1',
    title: 'Income Tax Filing Masterclass — Jan 2026',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-2',
    title: 'Sales Tax & GST Compliance — Feb 2026',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-3',
    title: 'IFRS & Corporate Accounting — Mar 2026',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-4',
    title: 'FBR Compliance & E-Filing — Apr 2026',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-5',
    title: 'Audit & Assurance Professional — May 2026',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-6',
    title: 'Tax Planning Strategies — Jun 2026',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-7',
    title: 'CA Exam Intensive Prep — Jul 2026',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-8',
    title: 'International Taxation — Aug 2026',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=400&fit=crop',
  },
  {
    id: 'batch-9',
    title: 'Forensic Accounting & Fraud — Sep 2026',
    thumbnail: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&h=400&fit=crop',
  },
];
