/** @type {import('tailwindcss').Config} */
// Colours are NOT defined here. Edit src/theme/theme.ts instead.
import plugin from 'tailwindcss/plugin';
import { palette, tokens, hexToRgbChannels } from './src/theme/theme.ts';

// Theme token → CSS variable name
const cssVarNames = {
  brand: '--primary',
  accent: '--secondary',
  accentHover: '--secondary-hover',
  onAccent: '--on-secondary',
  accentText: '--secondary-text',
  background: '--background',
  foreground: '--foreground',
  cardBg: '--card-bg',
  border: '--border',
  mutedForeground: '--muted-foreground',
};

const toCssVars = (set) =>
  Object.fromEntries(Object.entries(set).map(([key, hex]) => [cssVarNames[key], hexToRgbChannels(hex)]));

const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

// Writes the theme tokens as CSS variables for light mode, dark mode and navy surfaces
const themeVariables = plugin(({ addBase }) => {
  addBase({
    ':root': toCssVars(tokens.light),
    '.dark': { ...toCssVars(tokens.dark), colorScheme: 'dark' },
    '.surface-brand': toCssVars(tokens.onBrand),
  });
});

const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: v('--primary'), // Brand navy
        secondary: {
          DEFAULT: v('--secondary'), // Brand gold (fills, borders, lines)
          hover: v('--secondary-hover'),
        },
        'on-secondary': v('--on-secondary'), // Text on a gold fill
        'text-secondary': palette.neutral[300], // Light text on navy
        'text-tertiary': palette.neutral[400], // Muted text on navy
        navy: palette.navy,
        gold: palette.gold,
        gray: palette.neutral, // Every bg-gray-* / text-gray-* follows the theme
        // Theme-aware tokens (light/dark), generated from src/theme/theme.ts
        background: v('--background'),
        foreground: v('--foreground'),
        'card-bg': v('--card-bg'),
        border: v('--border'),
        'muted-foreground': v('--muted-foreground'),
      },
      // Gold TEXT uses a deeper shade on light backgrounds so it stays readable
      textColor: {
        secondary: v('--secondary-text'),
      },
      stroke: {
        secondary: v('--secondary-text'),
      },
      backgroundImage: {
        // Metallic gold, as in the brand image: shadow → main → highlight → main
        'gold-metallic': `linear-gradient(135deg, ${palette.gold[600]} 0%, ${palette.gold[500]} 35%, ${palette.gold[300]} 60%, ${palette.gold[500]} 100%)`,
        // Navy backdrop: lighter centre fading to darker edges
        'navy-radial': `radial-gradient(ellipse at 30% 35%, ${palette.navy[600]} 0%, ${palette.navy[700]} 30%, ${palette.navy[900]} 75%, ${palette.navy[950]} 100%)`,
      },
      animation: {
        'spin-slower': 'spin 12s linear infinite',
      },
      fontFamily: {
        // Loaded with next/font in app/layout.tsx
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xl': '1.5rem',
        base: '1rem',
      },
    },
  },
  plugins: [themeVariables],
};

export default config;
