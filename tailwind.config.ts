import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: 'var(--indigo-50)',
          500: 'var(--indigo-500)',
          600: 'var(--indigo-600)',
          800: 'var(--indigo-800)',
          950: 'var(--indigo-950)',
        },
        violet: {
          100: 'var(--violet-100)',
          500: 'var(--violet-500)',
          600: 'var(--violet-600)',
        },
        ink: {
          900: 'var(--ink-900)',
          600: 'var(--ink-600)',
          400: 'var(--ink-400)',
        },
        surface: 'var(--surface)',
        canvas: 'var(--bg)',
        borderline: 'var(--border)',
        success: '#16A34A',
        error: '#DC2626',
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'var(--font-bengali)', 'sans-serif'],
        sans: ['var(--font-inter)', 'var(--font-bengali)', 'sans-serif'],
        bengali: ['var(--font-bengali)', 'sans-serif'],
      },
      boxShadow: {
        indigo: '0 10px 30px rgba(79, 70, 229, 0.08)',
        'indigo-lg': '0 20px 40px rgba(79, 70, 229, 0.12)',
        header: '0 4px 20px rgba(30, 27, 75, 0.06)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
