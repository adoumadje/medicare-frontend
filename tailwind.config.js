/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      padding: {
        '13': '13rem'
      },
      colors: {
        myblue: '#0f49e7'
      }
    },
  },
  plugins: [],
}

