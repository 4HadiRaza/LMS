'use client';

import { useState } from 'react';
import Image from 'next/image';
import { courses, instructors, reviews, getTotalDurationMinutes } from '@/lib/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

function Stars({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      <span className="font-bold text-forest text-sm">{rating.toFixed(1)}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-accent' : 'text-sand'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {count !== undefined && <span className="text-sage text-sm ml-1">({count.toLocaleString()} ratings)</span>}
    </div>
  );
}

export default function CourseDetail({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  const [expandedModules, setExpandedModules] = useState<string[]>(
    course ? [course.modules[0]?.id] : []
  );
  const [imageError, setImageError] = useState(false);

  if (!course) notFound();

  const instructor = instructors.find((i) => i.id === course.instructorId);
  const isFree = course.price === null;
  const priceDisplay = isFree ? 'Free' : `PKR ${course.price!.toLocaleString()}`;
  const totalDurationHrs = Math.floor(getTotalDurationMinutes(course) / 60);

  const toggleModule = (id: string) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <main className="bg-cream min-h-screen pb-24">
      {/* ─── Breadcrumb ───────────────────────────────────────── */}
      <div className="bg-primary border-b border-mint/10 py-3">
        <div className="container-main flex items-center gap-2 text-xs text-mint/60">
          <Link href="/courses" className="hover:text-accent transition-colors">Courses</Link>
          <span>›</span>
          <span className="text-white font-semibold">{course.category}</span>
        </div>
      </div>

      <div className="container-main mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ─── Left Column (Content) ─────────────────────────── */}
          <div className="lg:col-span-2">
            
            {/* Header Info */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-forest leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-sage mb-6 leading-relaxed">
              {course.description}
            </p>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-sage mb-8">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Last updated: {course.lastUpdated}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                {course.language}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="font-bold text-primary bg-mint/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">
                  FBR Compliant
                </span>
              </div>
            </div>

            {/* Video Player Placeholder */}
            <div className="relative rounded-2xl overflow-hidden shadow-card mb-12 group bg-forest cursor-pointer min-h-[400px]">
              {imageError ? (
                <div className="absolute inset-0 bg-[#1a4a3a] flex items-center justify-center p-4 opacity-80 group-hover:opacity-60 transition-opacity">
                  <span className="text-[#c9a84c] font-bold text-2xl text-center">{course.category}</span>
                </div>
              ) : (
                <Image
                  src={course.thumbnail}
                  alt="Course preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                  onError={() => setImageError(true)}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-accent rounded flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-forest ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>

            {/* Curriculum Accordion */}
            <h2 className="text-2xl font-extrabold mb-6">Course Curriculum</h2>
            <div className="space-y-3 mb-12">
              {course.modules.map((module, i) => {
                const isExpanded = expandedModules.includes(module.id);
                return (
                  <div key={module.id} className="border border-sand rounded-xl overflow-hidden bg-white">
                    <button
                      className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${
                        isExpanded ? 'bg-mint/10' : 'hover:bg-cream'
                      }`}
                      onClick={() => toggleModule(module.id)}
                    >
                      <div>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                          Module {String(i + 1).padStart(2, '0')}
                        </p>
                        <h3 className="font-bold text-forest">{module.title}</h3>
                      </div>
                      <svg className={`w-5 h-5 text-sage transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className="px-6 py-2 border-t border-sand/50">
                        {module.lessons.map((lesson) => (
                          <div key={lesson.id} className="py-3 flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                              <svg className="w-4 h-4 text-sage group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {lesson.type === 'video' ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                              </svg>
                              <span className="text-sm font-medium text-sage group-hover:text-forest transition-colors">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="text-xs text-sage font-medium">{lesson.duration}:00</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Instructor */}
            {instructor && (
              <div className="mb-12">
                <h2 className="text-2xl font-extrabold mb-6">Your Instructor</h2>
                <div className="bg-white border border-sand rounded-xl p-6 flex flex-col sm:flex-row gap-6">
                  <Image src={instructor.image} alt={instructor.name} width={96} height={96} className="w-24 h-24 rounded-xl object-cover shrink-0 shadow-sm" />
                  <div>
                    <h3 className="font-bold text-lg text-forest mb-1">{instructor.name}</h3>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                      {instructor.title}
                    </p>
                    <p className="text-sm text-sage leading-relaxed mb-4">
                      {instructor.bio}
                    </p>
                    <div className="flex items-center gap-6 text-xs font-bold text-forest">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        {instructor.rating} Instructor Rating
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        {instructor.studentsCount.toLocaleString()} Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div>
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-2xl font-extrabold">Student Reviews</h2>
                <Stars rating={course.rating} count={course.reviewCount} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="bg-white border border-sand rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-sm text-forest">{review.name}</h4>
                        <p className="text-xs text-sage font-medium">{review.title}</p>
                      </div>
                      <Stars rating={review.rating} />
                    </div>
                    <p className="text-sm text-sage italic leading-relaxed">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ─── Right Column (Sidebar) ───────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-sand rounded-2xl p-6 shadow-sidebar">
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-forest">{priceDisplay}</span>
                  {course.originalPrice && !isFree && (
                    <span className="text-sm font-semibold text-sage line-through">
                      PKR {course.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {course.originalPrice && !isFree && (
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">
                    {Math.round((1 - course.price! / course.originalPrice) * 100)}% OFF · LIMITED TIME OFFER
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-accent text-forest font-bold py-3.5 rounded-lg hover:bg-accent-hover transition-colors shadow-sm uppercase tracking-wider text-sm">
                  Enroll Now
                </button>
                <button className="w-full border-2 border-forest text-forest font-bold py-3 rounded-lg hover:bg-forest hover:text-white transition-colors uppercase tracking-wider text-sm">
                  Add to Cart
                </button>
              </div>

              {/* Includes */}
              <div className="mb-6">
                <h4 className="font-bold text-forest mb-4">Course Includes:</h4>
                <ul className="space-y-3 text-sm font-medium text-sage">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    {totalDurationHrs} Hours of HD On-Demand Video
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    {course.modules.length * 3} Downloadable Legal Templates
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    Lifetime Access to Materials
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    Professional Certificate of Completion
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    Access on Mobile and TV
                  </li>
                </ul>
              </div>

              {/* Share links */}
              <div className="pt-4 border-t border-sand flex items-center justify-between text-xs font-bold uppercase tracking-wider text-forest">
                <button className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                  Share
                </button>
                <button className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  Gift this course
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
