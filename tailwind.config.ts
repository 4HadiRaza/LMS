import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4a3a',
          dark: '#0f2d24',
        },
        accent: {
          DEFAULT: '#c9a84c',
          hover: '#b8963e',
        },
        mint: '#9fd3b8',
        cream: '#f5f5f0',
        forest: '#1a2e1a',
        sage: '#6b7c6b',
        sand: '#e0e0da',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(26,74,58,0.06), 0 1px 2px rgba(26,74,58,0.04)',
        'card-hover': '0 12px 32px rgba(26,74,58,0.12), 0 4px 8px rgba(26,74,58,0.06)',
        'sidebar': '0 4px 24px rgba(26,74,58,0.08)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
