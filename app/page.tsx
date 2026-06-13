'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { liveClasses, courses, batches } from '@/lib/mockData';
import CourseCard from '@/components/courses/CourseCard';
export default function Home() {
  const batchScrollRef = useRef<HTMLDivElement>(null);

  const scrollBatches = (direction: 'left' | 'right') => {
    if (!batchScrollRef.current) return;
    const amount = 320;
    batchScrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      {/* ════════════════════════════════════════════════════════
          HERO BANNER
         ════════════════════════════════════════════════════════ */}
      <section
        id="hero-banner"
        className="w-full"
        style={{
          background: 'linear-gradient(135deg, #1a4a3a 0%, #1a4a3a 30%, #2a6a52 55%, #c9a84c 100%)',
        }}
      >
        <div className="container-main py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Welcome to TaxMaster Academy
          </h1>
          <p className="text-white/70 mt-3 text-base md:text-lg max-w-xl">
            Pakistan&apos;s Premier Tax &amp; Accounting Education Platform
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          UPCOMING LIVE CLASSES
         ════════════════════════════════════════════════════════ */}
      <section id="live-classes-section" className="py-10 md:py-14">
        <div className="container-main">
          <h2 className="section-title mb-6">Upcoming Live Classes</h2>

          <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4">
            {liveClasses.map((lc, index) => (
              <div
                key={lc.id}
                className="card-live shrink-0 w-[280px] sm:w-[300px] aspect-[4/3] relative group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Background image */}
                <Image
                  src={lc.thumbnail}
                  alt={lc.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* LIVE Badge */}
                <div className="absolute top-3 left-3">
                  <span className="live-badge">LIVE</span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white/70 text-[11px] font-medium uppercase tracking-wider mb-1">
                    {lc.category}
                  </p>
                  <h3 className="text-white text-sm font-bold leading-snug mb-2 line-clamp-2 group-hover:text-amber-300 transition-colors">
                    {lc.title}
                  </h3>
                  <p className="text-white/60 text-[11px]">
                    {lc.date} • {lc.time} • {lc.instructor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          COURSES
         ════════════════════════════════════════════════════════ */}
      <section id="courses-section" className="py-10 md:py-14 bg-white">
        <div className="container-main">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="section-title">Courses</h2>
              <span className="count-badge">{courses.length}</span>
            </div>
            <Link href="/courses" className="text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-1 no-underline">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BATCHES
         ════════════════════════════════════════════════════════ */}
      <section id="batches-section" className="py-10 md:py-14 bg-bg-light">
        <div className="container-main">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="section-title">Batches</h2>
              <span className="count-badge">{batches.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/courses" className="text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors flex items-center gap-1 no-underline">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Carousel Arrows */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  id="batch-scroll-left"
                  onClick={() => scrollBatches('left')}
                  className="w-8 h-8 rounded-full border border-border-light bg-white flex items-center justify-center
                             hover:border-brand-green hover:text-brand-green transition-all duration-200
                             active:scale-95"
                  aria-label="Scroll batches left"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  id="batch-scroll-right"
                  onClick={() => scrollBatches('right')}
                  className="w-8 h-8 rounded-full border border-border-light bg-white flex items-center justify-center
                             hover:border-brand-green hover:text-brand-green transition-all duration-200
                             active:scale-95"
                  aria-label="Scroll batches right"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Batch Carousel */}
          <div
            ref={batchScrollRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 scroll-smooth"
          >
            {batches.map((batch, index) => (
              <div
                key={batch.id}
                className="card-batch shrink-0 w-[300px] sm:w-[320px] group"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* Banner thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={batch.thumbnail}
                    alt={batch.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                </div>

                {/* Title */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-text-primary leading-snug line-clamp-2 group-hover:text-brand-green transition-colors">
                    {batch.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
