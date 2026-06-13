'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: string[]; // course slugs
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USER: User = {
  name: 'Ahmed Raza',
  email: 'ahmed@example.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  enrolledCourses: [
    'mastering-income-tax-ordinances-2001',
    'fbr-compliance-essentials-for-businesses',
    'bookkeeping-for-small-businesses',
  ],
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('taxmaster_user');
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));
    const loggedInUser = { ...MOCK_USER, email };
    setUser(loggedInUser);
    localStorage.setItem('taxmaster_user', JSON.stringify(loggedInUser));
    return true;
  };

  const signup = async (name: string, email: string, _password: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 800));
    const newUser: User = { ...MOCK_USER, name, email, enrolledCourses: [] };
    setUser(newUser);
    localStorage.setItem('taxmaster_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('taxmaster_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
