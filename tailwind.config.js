/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#1F1F1F',
        gold: '#9C7A2E',
        cream: '#FAF7F0',
        grey: '#5B5B5B',
        line: '#E7E0D0',
      },
    },
  },
  plugins: [],
}
