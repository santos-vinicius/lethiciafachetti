/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Source Sans Pro', 'sans-serif'],
      title: ['Playfair Display', 'serif'],
    },
    colors: {
      cream: {
        light: '#FFF5E9',
        medium: '#F0CCA0',
      },
      brown: {
        default: '#201402',
      },
      green: {
        light: '#8ACFB2',
        dark: '#243F33',
      },
      rose: {
        light: '#FFC0A7',
      },
    },
    screens: {
      sm: '534px',
      md: '960px',
      lg: '1300px',
    },
    extend: {},
  },
  plugins: [],
};
