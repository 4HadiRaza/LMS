import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/AuthContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'TaxMaster Academy — Professional Tax & Accounting Education in Pakistan',
  description:
    'Pakistan\'s premier platform for taxation and accounting education. Master FBR compliance, IFRS standards, income tax filing, and more with expert-led courses and live classes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
