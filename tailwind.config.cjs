/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#212121',
        gray: '#767676',

        'opacity-gray': '#76767680',

        'black-half': '#424242',
        'orange-main': '#fc895c',
        'purple-main': '#6d86e9',
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
