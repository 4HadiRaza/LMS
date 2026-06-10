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

  const navLinks = [
    { href: '/courses', label: 'Courses', active: true },
    { href: '#', label: 'Resources' },
    { href: '#', label: 'About' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-mint/10'
          : 'bg-primary'
      }`}
    >
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group no-underline">
          <span className="text-lg font-extrabold text-accent tracking-tight">
            TaxMaster
          </span>
          <span className="text-sm font-semibold text-mint tracking-wide hidden sm:inline">
            LMS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors no-underline ${
                link.active
                  ? 'text-accent'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium text-white/80 hover:text-white px-4 py-2 transition-colors">
            Login
          </button>
          <Link href="/courses">
            <button className="bg-accent text-forest text-sm font-bold px-5 py-2 rounded-md hover:bg-accent-hover transition-all duration-200 tracking-wide uppercase">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary border-t border-mint/10 animate-fade-in">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-accent text-sm font-medium py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-mint/10 my-2" />
            <button className="text-left text-white/80 hover:text-white text-sm font-medium py-2.5 px-3">
              Login
            </button>
            <Link href="/courses" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-accent text-forest text-sm font-bold py-2.5 rounded-md mt-1 hover:bg-accent-hover transition-colors uppercase tracking-wide">
                Enroll Now
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
