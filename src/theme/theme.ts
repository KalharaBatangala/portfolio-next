// src/theme/theme.ts
// ─────────────────────────────────────────────────────────────────────────────
//  THE ONE PLACE TO CHANGE THE SITE'S COLOURS
//
//  Every colour on the site comes from this file:
//    • Tailwind classes (bg-primary, text-secondary, bg-gray-900, gold-300 …)
//      read it through tailwind.config.js
//    • The CSS variables in :root / .dark are generated from `tokens` below
//    • SVG art, the GitHub chart, the dark-mode toggle, alert buttons and the
//      404 animation import the hex values directly
//
//  To re-theme the whole site, change `palette` (and, if needed, `tokens`),
//  then restart `npm run dev`. Components never need to be touched.
//
//  Current theme: Navy & Gold, sampled from the brand image
//    navy 700  #16225C  centre of the image
//    navy 900  #0A0F3D  edges of the image
//    gold 500  #CB9A2F  main metallic gold
//    gold 300  #F2D468  highlight      gold 600  #AC7515  shadow
// ─────────────────────────────────────────────────────────────────────────────

export const palette = {
  navy: {
    50: '#EEF0F8',
    100: '#D9DDEE',
    200: '#B3BADD',
    300: '#8791C4',
    400: '#5866A6',
    500: '#34438A',
    600: '#1F2E73',
    700: '#16225C', // brand navy
    800: '#101747',
    900: '#0A0F3D',
    950: '#060929',
  },
  gold: {
    50: '#FDF8E9',
    100: '#FAF0CC',
    200: '#F5E19A',
    300: '#F2D468', // highlight
    400: '#E0B84A',
    500: '#CB9A2F', // brand gold
    600: '#AC7515', // shadow
    700: '#8C6212', // readable gold text on light backgrounds
    800: '#6B470E',
    900: '#4F340B',
  },
  // Neutral greys, tinted towards the brand colour. This scale replaces
  // Tailwind's `gray`, so every existing bg-gray-* / text-gray-* class
  // follows the theme (dark mode surfaces become deep navy, not blue-grey).
  neutral: {
    50: '#F8F9FC',
    100: '#F1F3F8',
    200: '#E5E8F0',
    300: '#CED3E2',
    400: '#9AA1BA',
    500: '#6B7393',
    600: '#4B5274',
    700: '#2D3561',
    800: '#18204D',
    900: '#0D1336',
    950: '#070A24',
  },
  white: '#FFFFFF',
} as const;

// Status colours (form alerts)
export const feedback = {
  success: '#2E7D32',
  error: '#C62828',
} as const;

// ─────────────────────────────────────────────────────────────────────────────
//  Semantic tokens: what each colour is FOR. These become CSS variables, so
//  they can differ between light mode, dark mode and navy "brand" surfaces.
//
//    brand        navy surfaces: navbar, footer, home hero    → bg-primary
//    accent       gold fills, borders, lines, buttons         → bg-/border-secondary
//    accentHover  gold button hover                           → bg-secondary-hover
//    onAccent     text placed on a gold fill                  → text-on-secondary
//    accentText   gold TEXT. Bright gold is unreadable on light backgrounds,
//                 so light mode uses a deeper antique gold    → text-secondary
// ─────────────────────────────────────────────────────────────────────────────

const { navy, gold, neutral, white } = palette;

export const tokens = {
  light: {
    brand: navy[700],
    accent: gold[500],
    accentHover: gold[400],
    onAccent: navy[900],
    accentText: gold[700],
    background: neutral[200],
    foreground: neutral[900],
    cardBg: white,
    border: neutral[300],
    mutedForeground: neutral[600],
  },
  dark: {
    brand: navy[700],
    accent: gold[500],
    accentHover: gold[400],
    onAccent: navy[900],
    accentText: gold[500],
    background: neutral[900],
    foreground: neutral[100],
    cardBg: neutral[800],
    border: neutral[700],
    mutedForeground: neutral[400],
  },
  // Overrides for anything inside an element with class="surface-brand"
  // (always-navy areas such as the navbar, footer and hero), in both modes.
  onBrand: {
    accentText: gold[500],
  },
} as const;

export type TokenName = keyof typeof tokens.light;

// Convenience exports for code that needs a raw colour (SVG, canvas, URLs)
export const brandColors = {
  primary: navy[700],
  secondary: gold[500],
  secondaryLight: gold[300],
  secondaryDark: gold[600],
} as const;

/** '#CB9A2F' → '203 154 47' (the format the CSS variables use) */
export const hexToRgbChannels = (hex: string) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.replace(/./g, (c) => c + c) : h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

/** '#CB9A2F' → [0.796, 0.604, 0.184] (the format Lottie animations use) */
export const hexToUnitRgb = (hex: string): [number, number, number] =>
  hexToRgbChannels(hex)
    .split(' ')
    .map((v) => Number(v) / 255) as [number, number, number];
