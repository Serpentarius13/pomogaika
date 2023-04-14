/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        black: '#212121',
        gray: '#767676',
        'gray-dark': '#3F4042',

        'opacity-gray': '#76767680',

        'black-half': '#424242',

        'orange-main': '#fc895c',
        'purple-main': '#6d86e9',
        'purple-dark': '#737CD2',
        'purple-light': '#E5DFFB',
      },

      backgroundImage: {
        orange: 'linear-gradient( #FAB570,  #FC8158)',
        violet: 'linear-gradient( #96A5EA,  #7A81D2)',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-alt': ['Montserrat Alternates', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
