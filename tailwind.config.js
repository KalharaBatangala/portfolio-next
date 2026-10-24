/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#231F20', // Black
        secondary: '#FF7300', // Orange
        'text-secondary': '#D1D5DB', // Light gray
        'text-tertiary': '#9CA3AF', // Muted gray
        // Theme-aware tokens, defined as CSS variables in globals.css
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        'card-bg': 'rgb(var(--card-bg) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
      },
      animation: {
        'spin-slower': 'spin 12s linear infinite',
      },
      fontFamily: {
        // Loaded with next/font in app/layout.tsx
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.5rem',
        base: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
