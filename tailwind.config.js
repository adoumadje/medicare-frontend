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
        myBlack: '#525252',
        dotRed: '#ee4e58',
        dotOrange: '#fb7f23',
        dotGreen: '#1e9f81'
      },
      width: {
        '100': '18rem',
        '102': '20rem',
        '140': '40rem'
      },
      maxWidth: {
        '30p': '30%',
        '40p': '40%',
        '50p': '50%'
      },
      height: {
        '100': '50rem'
      }
    },
  },
  plugins: [],
}

