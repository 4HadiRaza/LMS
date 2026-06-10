'use client';

import { useState, useMemo } from 'react';
import { courses } from '@/lib/mockData';
import Filters, { FilterState } from '@/components/courses/Filters';
import CourseGrid from '@/components/courses/CourseGrid';

export default function CoursesPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    level: null,
    priceRange: 'all',
    minRating: 0,
    searchQuery: '',
    sortBy: 'popular',
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q)
      );
    }

    // Category
    if (filters.category) {
      // filters.category is the ID (e.g., 'cat-1')
      // but course.category is the string name (e.g., 'Income Tax')
      // Let's just map the IDs to names or use the string directly.
      // Wait, mockData course.category is the name string. Let's filter by matching name if possible, or mapping.
      // Actually, my updated mockData category has name. Let's do a simple map.
      const categoryMap: Record<string, string> = {
        'cat-1': 'Income Tax',
        'cat-2': 'Sales Tax & GST',
        'cat-3': 'Corporate Accounting',
        'cat-4': 'FBR Compliance',
        'cat-5': 'Bookkeeping',
        'cat-6': 'Audit & Assurance',
      };
      const catName = categoryMap[filters.category];
      if (catName) {
        result = result.filter((c) => c.category === catName);
      }
    }

    // Level
    if (filters.level) {
      result = result.filter((c) => c.level === filters.level);
    }

    // Rating
    if (filters.minRating > 0) {
      result = result.filter((c) => c.rating >= filters.minRating);
    }

    // Price
    if (filters.priceRange !== 'all') {
      result = result.filter((c) => {
        const p = c.price;
        switch (filters.priceRange) {
          case 'free':
            return p === null;
          case 'under-10000':
            return p !== null && p < 10000;
          case '10000-20000':
            return p !== null && p >= 10000 && p <= 20000;
          case 'above-20000':
            return p !== null && p > 20000;
          default:
            return true;
        }
      });
    }

    // Sort
    switch (filters.sortBy) {
      case 'newest':
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.enrollmentCount - a.enrollmentCount);
    }

    return result;
  }, [filters]);

  return (
    <main className="bg-cream min-h-screen pb-20">
      {/* ─── Header ───────────────────────────────────────────── */}
      <section className="bg-primary-dark pt-12 pb-6 border-b border-mint/10">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                Course Catalog
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Explore Certifications
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-mint/60">
              <span className="text-white font-semibold">{filteredCourses.length}</span> results found
              {filters.searchQuery && <span>for &ldquo;{filters.searchQuery}&rdquo;</span>}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─────────────────────────────────────── */}
      <section className="container-main mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden w-full bg-white border border-sand px-4 py-3 rounded-xl font-bold text-forest mb-4 shadow-sm flex items-center justify-between"
            >
              <span>{mobileFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
              <svg className={`w-5 h-5 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={mobileFilterOpen ? 'block' : 'hidden lg:block'}>
              <Filters filters={filters} onFilterChange={setFilters} />
            </div>
          </div>

          {/* Grid Area */}
          <div className="flex-1 min-w-0">
            {/* Top Bar (Sort) */}
            <div className="flex justify-end mb-6">
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-sage">Sort by:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  className="bg-transparent border-none text-forest font-bold text-sm focus:ring-0 cursor-pointer outline-none"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest Additions</option>
                </select>
              </div>
            </div>

            <CourseGrid courses={filteredCourses} />

            {/* Pagination Placeholder */}
            {filteredCourses.length > 0 && (
              <div className="mt-12 flex justify-center gap-2">
                <button className="w-10 h-10 rounded border border-sand bg-white text-sage flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-50" disabled>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="w-10 h-10 rounded bg-primary text-white font-bold flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded border border-sand bg-white text-forest font-semibold flex items-center justify-center hover:border-primary transition-colors">2</button>
                <button className="w-10 h-10 rounded border border-sand bg-white text-forest font-semibold flex items-center justify-center hover:border-primary transition-colors">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-sage">...</span>
                <button className="w-10 h-10 rounded border border-sand bg-white text-forest font-semibold flex items-center justify-center hover:border-primary transition-colors">12</button>
                <button className="w-10 h-10 rounded border border-sand bg-white text-sage flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
