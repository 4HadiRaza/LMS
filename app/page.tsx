'use client';

import Link from 'next/link';
import { courses, testimonials, categories } from '@/lib/mockData';
import CourseCard from '@/components/courses/CourseCard';

export default function Home() {
  const featuredCourses = courses.filter((c) => c.badge === 'bestseller' || c.rating >= 4.8).slice(0, 6);
  const stats = [
    { value: '50K+', label: 'Active Learners' },
    { value: '200+', label: 'Expert Courses' },
    { value: '98%', label: 'Pass Rate' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <main>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary overflow-hidden">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-20">
            {/* Left – Text */}
            <div>
              <p className="section-label mb-5">The Most Trusted Tax Academy</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6">
                Master the Complexities of{' '}
                <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-4">
                  Taxation & Finance
                </span>
              </h1>
              <p className="text-lg text-mint/80 leading-relaxed mb-8 max-w-xl">
                Rigorous, practice-led training for practitioners, CAs, and legal
                professionals. Grow your practice and your professional standing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <button className="btn-primary text-sm uppercase tracking-wider">
                    Explore Courses
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="btn-outline-white text-sm">
                    View Curriculum
                  </button>
                </Link>
              </div>
            </div>

            {/* Right – Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=450&fit=crop"
                  alt="Tax professional working"
                  className="w-full h-[450px] object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg max-w-[200px]">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">A-Level</p>
                  <p className="text-xs font-semibold text-forest">Accreditation</p>
                  <p className="text-[10px] text-sage mt-1">Recognized by Pakistan&apos;s leading regulatory bodies</p>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────── */}
      <section className="bg-cream border-b border-sand">
        <div className="container-main py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="text-3xl md:text-4xl font-extrabold text-accent leading-none mb-2 group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-sage">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Specialized Domains ─────────────────────────────── */}
      <section className="py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-forest">
              Specialized Domains
            </h2>
            <p className="text-sage mt-3 max-w-2xl mx-auto">
              Our courses are specifically curated to address the unique regulatory
              landscape of Pakistan and international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, index) => (
              <Link
                key={cat.id}
                href={`/courses?category=${cat.id}`}
                className="group no-underline"
              >
                <div className={`p-6 rounded-xl border transition-all duration-200 h-full ${
                  index === 0
                    ? 'bg-primary text-white border-primary hover:bg-primary-dark'
                    : 'bg-white border-sand hover:border-primary/30 hover:shadow-card-hover'
                }`}>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-accent/20' : 'bg-cream'
                  }`}>
                    <svg className={`w-5 h-5 ${index === 0 ? 'text-accent' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${index === 0 ? 'text-white' : 'text-forest'}`}>
                    {cat.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${index === 0 ? 'text-mint/70' : 'text-sage'}`}>
                    {cat.description}
                  </p>
                  <span className={`text-xs font-semibold inline-flex items-center gap-1 ${
                    index === 0 ? 'text-accent' : 'text-primary group-hover:text-accent'
                  } transition-colors`}>
                    Explore Topic
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Courses ─────────────────────────────────── */}
      <section className="py-20 bg-cream border-y border-sand">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="section-label mb-3">Advance Your Career</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-forest">
                Featured Certifications
              </h2>
            </div>
            <Link
              href="/courses"
              className="text-sm font-semibold text-primary hover:text-accent transition-colors no-underline flex items-center gap-1.5 shrink-0"
            >
              View All Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left – Quotes */}
            <div>
              <p className="section-label mb-3">Student Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
                Trusted by Pakistan&apos;s Leading Practitioners
              </h2>

              <div className="space-y-6">
                {testimonials.slice(0, 2).map((t) => (
                  <div key={t.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <p className="text-mint/80 text-sm leading-relaxed mb-4 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <p className="text-white text-sm font-semibold">{t.name}</p>
                        <p className="text-accent text-xs">{t.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=500&fit=crop"
                  alt="Students in a professional setting"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <p className="text-center text-mint/40 text-xs mt-4">
                Empowering the next generation of financial leaders across Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-main">
          <div className="bg-primary-dark rounded-2xl px-8 md:px-16 py-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Advance Your Professional Standing?
              </h2>
              <p className="text-mint/70 max-w-2xl mx-auto mb-8">
                Join thousands of practitioners mastering the art of taxation and accounting through
                our expert-led, practice-focused curriculum.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/courses">
                  <button className="btn-primary text-sm uppercase tracking-wider">
                    Start Your Certification
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="btn-outline-white text-sm">
                    Explore Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
