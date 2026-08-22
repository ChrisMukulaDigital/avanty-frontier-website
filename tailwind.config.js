/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Avanty Frontier brand system
        primary: '#003F7D', // Deep Avanty Blue — nav, footer, headings-on-light in Services, primary surfaces
        accent: '#FF6503', // Avanty Orange — CTAs, links, stats, icons, hover/highlight
        bg: '#F7F9FC', // page background (off-white/blue-gray)
        navy: '#012348', // main text — headings/body default
        slate: '#5B6777', // secondary text — descriptions, supporting info
        // Derived neutrals (not brand colors — tints/utility shades only)
        line: '#E1E7EF', // dividers/borders
        mist: '#EAF0F8', // "Why Choose Us" section tint, distinct from bg
      },
    },
  },
  plugins: [],
}
