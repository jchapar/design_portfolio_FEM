/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        purple: '#755CDE',
        orange: '#F6A560',
        pink: '#F39E9E',
        salmon: '#EB7565',
        teal: '#61C4B7',
        plum: '#552049',
        dark: '#030303',
        grey: '#7A746E',
        light: '#FFF7F0',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
