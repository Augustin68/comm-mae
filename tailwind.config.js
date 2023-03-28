/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aqua': ['Aqua', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
    colors: {
      'custom-orange-400': '#fead65',
      'custom-orange-100': '#e5b8ae',
      'pale-100': '#f3dbd6',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
      'slate': colors.slate,
    }
  },
  plugins: [],
}
