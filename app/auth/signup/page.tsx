'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

function getStrength(pw: string): { label: string; color: string; width: string } {
  if (pw.length < 6) return { label: 'Weak', color: 'bg-red-400', width: 'w-1/4' };
  if (pw.length < 8) return { label: 'Fair', color: 'bg-amber-400', width: 'w-1/2' };
  if (/[A-Z]/.test(pw) && /[0-9]/.test(pw) && pw.length >= 10)
    return { label: 'Strong', color: 'bg-green-500', width: 'w-full' };
  return { label: 'Medium', color: 'bg-amber-400', width: 'w-3/4' };
}

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const set = (field: string, val: string) => {
    setForm((p) => ({ ...p, [field]: val }));
    setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Minimum 8 characters';
    if (!form.confirm) e.confirm = 'Please confirm your password';
    else if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await signup(form.name, form.email, form.password);
      router.push('/auth/login');
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  };

  const strength = getStrength(form.password);

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 text-sm border rounded-lg bg-white text-text-primary
     placeholder:text-gray-400 transition-all focus:ring-2 focus:ring-brand-green/20
     ${errors[field] ? 'border-red-400 focus:border-red-400' : 'border-border-light focus:border-brand-green'}`;

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(135deg, #1a4a3a 0%, #0f2d24 50%, #1a4a3a 100%)' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mb-3">
            <span className="text-accent-gold text-xl font-extrabold">TM</span>
          </div>
          <h1 className="text-xl font-bold text-text-primary">Create Account</h1>
          <p className="text-sm text-text-secondary mt-1">Join TaxMaster Academy</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Full Name */}
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
            <input id="signup-name" type="text" value={form.name} onChange={(e) => set('name', e.target.value)}
              placeholder="Ahmed Raza" className={inputClass('name')} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-text-primary mb-1.5">Email Address</label>
            <input id="signup-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
              placeholder="you@example.com" className={inputClass('email')} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="signup-phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone Number</label>
            <input id="signup-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
              placeholder="+92 300 1234567" className={inputClass('phone')} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="signup-password" className="block text-sm font-medium text-text-primary mb-1.5">Password</label>
            <div className="relative">
              <input id="signup-password" type={showPw ? 'text' : 'password'} value={form.password}
                onChange={(e) => set('password', e.target.value)} placeholder="••••••••"
                className={`${inputClass('password')} pr-11`} />
              <button type="button" onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label={showPw ? 'Hide password' : 'Show password'}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d={showPw
                      ? 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18'
                      : 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'} />
                </svg>
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            {/* Strength bar */}
            {form.password && (
              <div className="mt-2">
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                </div>
                <p className={`text-[10px] font-medium mt-1 ${
                  strength.label === 'Strong' ? 'text-green-600' : strength.label === 'Weak' ? 'text-red-500' : 'text-amber-600'
                }`}>{strength.label}</p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="signup-confirm" className="block text-sm font-medium text-text-primary mb-1.5">Confirm Password</label>
            <input id="signup-confirm" type="password" value={form.confirm} onChange={(e) => set('confirm', e.target.value)}
              placeholder="••••••••" className={inputClass('confirm')} />
            {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>}
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading}
            className="w-full btn-signup py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed">
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                Creating account…
              </span>
            ) : 'Sign Up'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border-light" />
          <span className="text-xs text-text-secondary">or</span>
          <div className="flex-1 h-px bg-border-light" />
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-semibold text-brand-green hover:text-brand-green-dark transition-colors no-underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
