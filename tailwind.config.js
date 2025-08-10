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
      },
      animation: {
        'spin-slower': 'spin 12s linear infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
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
