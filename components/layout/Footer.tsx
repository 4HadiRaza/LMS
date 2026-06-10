'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-mint/80 border-t border-mint/10">
      {/* Main Footer */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="no-underline">
              <h3 className="text-xl font-extrabold text-accent mb-1 tracking-tight">
                TaxMaster
              </h3>
              <p className="text-sm font-semibold text-mint tracking-wide mb-4">Academy</p>
            </Link>
            <p className="text-sm leading-relaxed text-mint/60 max-w-xs">
              Empowering Pakistan&apos;s financial professionals through world-class
              taxation education and certifications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/courses', label: 'All Courses' },
                { href: '#', label: 'Privacy Policy' },
                { href: '#', label: 'Terms of Service' },
                { href: '#', label: 'Accreditation' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-mint/60 hover:text-accent transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Contact Us' },
                { href: '#', label: 'Careers' },
                { href: '#', label: 'About Us' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-mint/60 hover:text-accent transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-mint/60 mb-4">
              Get the latest on tax law changes and new courses.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 min-w-0 bg-white/5 border border-mint/15 text-white text-sm px-3.5 py-2.5 rounded-l-md placeholder:text-mint/30 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent text-forest text-sm font-bold px-4 py-2.5 rounded-r-md hover:bg-accent-hover transition-colors shrink-0"
              >
                Join
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              {/* Social icons */}
              <a href="#" className="text-mint/40 hover:text-accent transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="text-mint/40 hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-mint/10">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-mint/30">
            &copy; 2024 TaxMaster Academy · Professional Excellence in Taxation
          </p>
          <p className="text-xs text-mint/20">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
