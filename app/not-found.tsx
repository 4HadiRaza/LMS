'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-surface)] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">
          404
        </h1>
        <p className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">
          Page Not Found
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The course or page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/">
          <button className="bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--color-accent-hover)] transition-colors">
            Go Back Home
          </button>
        </Link>
      </div>
    </main>
  );
}
