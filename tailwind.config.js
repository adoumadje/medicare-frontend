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
      margin: {
        '20': ''
      },
      colors: {
        myblue: '#0f49e7',
        myYellow: '#f7b130',
        myPurple: '#945ced',
        myGreen: '#02a6ba',
        myBlack: '#434343'
      },
      width: {
        '100': '18rem'
      },
      height: {
        '100': '50rem'
      }
    },
  },
  plugins: [],
}

