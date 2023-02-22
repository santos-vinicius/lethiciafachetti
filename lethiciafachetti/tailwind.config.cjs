/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Source Sans Pro', 'sans-serif'],
      title: ['Playfair Display', 'serif'],
    },
    borderRadius: {
      large: '130px',
    },
    extend: {
      colors: {
        'light-cream': '#FFF5E9',
        'main-brown': '#201402',
        'light-green': '#8ACFB2',
        'rose-light': '#FFC0A7',
      },
    },
  },
  plugins: [],
};
