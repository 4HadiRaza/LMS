'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { courses } from '@/lib/mockData';

const sidebarItems = [
  { id: 'courses', label: 'My Courses', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { id: 'profile', label: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { id: 'settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];

const enrolledMock = [
  { slug: 'mastering-income-tax-ordinances-2001', progress: 65 },
  { slug: 'fbr-compliance-essentials-for-businesses', progress: 30 },
  { slug: 'bookkeeping-for-small-businesses', progress: 100 },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');

  useEffect(() => {
    if (!user) router.push('/auth/login');
  }, [user, router]);

  if (!user) return null;

  const enrolledCourses = enrolledMock
    .map((e) => {
      const c = courses.find((x) => x.slug === e.slug);
      return c ? { ...c, progress: e.progress } : null;
    })
    .filter(Boolean) as (typeof courses[0] & { progress: number })[];

  return (
    <main className="min-h-screen bg-bg-light">
      <div className="container-main py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-56 shrink-0">
            {/* User card */}
            <div className="bg-white border border-border-light rounded-xl p-5 mb-4 text-center">
              <Image src={user.avatar} alt={user.name} width={64} height={64}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-accent-gold" />
              <h2 className="text-sm font-bold text-text-primary">{user.name}</h2>
              <p className="text-xs text-text-secondary mt-0.5">{user.email}</p>
            </div>

            {/* Nav */}
            <nav className="bg-white border border-border-light rounded-xl overflow-hidden">
              {sidebarItems.map((item) => (
                <button key={item.id} onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-b border-border-light last:border-b-0 ${
                    activeTab === item.id
                      ? 'text-brand-green bg-brand-green/5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                  }`}>
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </button>
              ))}
              <button onClick={() => { logout(); router.push('/'); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </nav>
          </aside>

          {/* Main */}
          <div className="flex-1">
            {activeTab === 'courses' && (
              <div>
                <h1 className="text-xl font-bold text-text-primary mb-6">My Courses</h1>
                {enrolledCourses.length === 0 ? (
                  <div className="bg-white border border-border-light rounded-xl p-12 text-center">
                    <p className="text-text-secondary mb-4">You haven&apos;t enrolled in any courses yet.</p>
                    <Link href="/courses" className="btn-signup inline-block no-underline">Browse Courses</Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {enrolledCourses.map((c) => (
                      <Link key={c.id} href={`/courses/${c.slug}`} className="no-underline group">
                        <div className="bg-white border border-border-light rounded-xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all">
                          <div className="relative w-full aspect-[16/9] overflow-hidden">
                            <Image src={c.thumbnail} alt={c.title} fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="300px" />
                            {c.progress === 100 && (
                              <div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                Completed
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h3 className="text-sm font-bold text-text-primary line-clamp-2 mb-3 group-hover:text-brand-green transition-colors">
                              {c.title}
                            </h3>
                            {/* Progress bar */}
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full transition-all duration-500 ${
                                  c.progress === 100 ? 'bg-green-500' : 'bg-accent-gold'
                                }`} style={{ width: `${c.progress}%` }} />
                              </div>
                              <span className="text-xs font-semibold text-text-secondary shrink-0">{c.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white border border-border-light rounded-xl p-6">
                <h1 className="text-xl font-bold text-text-primary mb-6">Profile</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
                    <input type="text" defaultValue={user.name} className="w-full px-4 py-2.5 text-sm border border-border-light rounded-lg bg-gray-50 text-text-primary" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                    <input type="email" defaultValue={user.email} className="w-full px-4 py-2.5 text-sm border border-border-light rounded-lg bg-gray-50 text-text-primary" readOnly />
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-4">Profile editing coming soon.</p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white border border-border-light rounded-xl p-6">
                <h1 className="text-xl font-bold text-text-primary mb-6">Settings</h1>
                <p className="text-sm text-text-secondary">Settings page coming soon. You&apos;ll be able to manage notifications, password, and preferences here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
