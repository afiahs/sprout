/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sprout-bg': '#FAF9F6',
        'sprout-primary': '#C1D7AE',
        'sprout-text': '#475569',
        'sprout-peach': '#FCDDB0',
      }
    },
  },
  plugins: [],
}