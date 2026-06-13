'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-header' : ''
      } border-b border-border-light`}
    >
      <div className="container-main flex items-center justify-between h-16 gap-3">
        {/* ── Logo ─────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2 shrink-0 no-underline group">
          <div className="w-9 h-9 rounded-full bg-brand-green flex items-center justify-center group-hover:bg-brand-green-dark transition-colors">
            <span className="text-accent-gold text-sm font-extrabold leading-none">TM</span>
          </div>
          <span className="text-sm font-bold text-brand-green hidden sm:inline tracking-tight">
            TaxMaster
          </span>
        </Link>

        {/* ── Search Bar (desktop) ─────────────── */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="search-input"
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border border-border-light rounded-full
                         bg-white text-text-primary placeholder:text-gray-400
                         focus:border-brand-green focus:ring-1 focus:ring-brand-green/20 transition-all"
            />
          </div>
        </div>

        {/* ── Right Actions (desktop) ──────────── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            id="dark-mode-toggle"
            className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3.5 py-1.5
                       text-sm text-text-secondary hover:border-gray-400 hover:text-text-primary
                       transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <span className="font-medium text-xs tracking-wide">DARK</span>
          </button>

          {/* Get App */}
          <Link
            href="#"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors no-underline whitespace-nowrap"
          >
            Get App
          </Link>

          {/* Sign In */}
          <button id="btn-signin" className="btn-signin whitespace-nowrap">
            SIGN IN
          </button>

          {/* Sign Up */}
          <button id="btn-signup" className="btn-signup whitespace-nowrap">
            SIGN UP
          </button>
        </div>

        {/* ── Mobile Toggle ────────────────────── */}
        <button
          className="md:hidden text-text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ──────────────────────── */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-border-light animate-fade-in">
          <div className="container-main py-4 flex flex-col gap-2">
            {/* Mobile Search */}
            <div className="relative mb-2">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-border-light rounded-full
                           bg-white text-text-primary placeholder:text-gray-400"
              />
            </div>

            <button
              className="flex items-center gap-1.5 border border-gray-300 rounded-full px-3.5 py-2
                         text-sm text-text-secondary self-start"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <span className="font-medium text-xs tracking-wide">DARK</span>
            </button>

            <Link
              href="#"
              className="text-sm font-medium text-text-secondary py-2 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Get App
            </Link>

            <hr className="border-border-light my-1" />

            <button className="btn-signin w-full" onClick={() => setMenuOpen(false)}>
              SIGN IN
            </button>
            <button className="btn-signup w-full" onClick={() => setMenuOpen(false)}>
              SIGN UP
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
