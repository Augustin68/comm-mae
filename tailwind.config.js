/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aqua': ['Aqua', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'helvetica': ['HelveticaNeue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'coanda': ['Coanda', 'sans-serif'],
        'Preahvihear': ['Preahvihear', 'sans-serif'],
        'Orbitron': ['Orbitron', 'sans-serif'],
        'Aleo': ['Aleo', 'sans-serif'],
        'Cambo': ['Cambo', 'sans-serif'],
        'NATS': ['NATS', 'sans-serif'],
        'Mogra': ['Mogra', 'sans-serif'],
      },
      maxWidth: {
        '1/2': '50%',
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          'base-hover': 'var(--color-text-base-hover)',
          primary: 'var(--color-text-primary)',
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--color-fill-primary)',
          secondary: 'var(--color-fill-secondary)',
          'secondary-hover': 'var(--color-fill-secondary-hover)',
          base: withOpacity('--color-fill-base'),
          muted: 'var(--color-fill-muted)',
        }
      },
      borderColor: {
        skin: {
          primary: 'var(--color-border-primary)',
          'primary-hover': 'var(--color-border-primary-hover)',
          base: 'var(--color-border-base)'
        }
      }
    },
    colors: {
      'custom-orange-400': '#fead65',
      'custom-orange-100': '#e5b8ae',
      'banana-blue-500': '#112A46',
      'banana-blue-400': '#0d2138',
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
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.writing-vertical-rl' : {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        }

      })
    })
  ]
}