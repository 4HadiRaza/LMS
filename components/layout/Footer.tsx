'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border-light">
      <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center">
            <span className="text-accent-gold text-[8px] font-extrabold leading-none">TM</span>
          </div>
          <span className="text-sm text-text-secondary">
            &copy; 2026 TaxMaster Academy — All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/about" className="text-xs text-text-secondary hover:text-text-primary transition-colors no-underline">
            About Us
          </a>
          <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors no-underline">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors no-underline">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-text-secondary hover:text-text-primary transition-colors no-underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
