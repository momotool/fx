/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffd6e0',
          peach: '#ffecd2',
          mint: '#c8f0e0',
          lavender: '#e8e0f0',
          blue: '#d4e8ff',
          orange: '#ffecd2',
        },
        cta: {
          DEFAULT: '#f59e0b',
          hover: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
