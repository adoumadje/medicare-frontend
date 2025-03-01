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
        myBrown: '#89481c',
        myblue: '#0f49e7',
        lightBlue: '#e9f2ff',
        myWhite: '#eeeeee',
        myYellow: '#f7b130',
        lightYellow: '#fff7eb',
        myPurple: '#945ced',
        lightPurple: '#efe6fa',
        myGreen: '#02a6ba',
        lightGreen: '#d3f8fa',
        myBlack: '#525252',
        lightBlack: '#f0f0f0',
        dotRed: '#ee4e58',
        dotOrange: '#fb7f23',
        dotGreen: '#1e9f81',
        inputBg: '#d0d8e6',
        borderLightBlack: '#b2b2b2',
        notClickable: '#d1e5ff'
      },
      width: {
        '50': '14rem',
        '70': '18rem',
        '100': '18rem',
        '102': '20rem',
        '104': '25rem',
        '110': '30rem',
        '140': '40rem',
        '60p': '60%',
        '40p': '40%',
        '30p': '30%',
        '20p': '20%'
      },
      height: {
        '50': '14rem',
        '100': '50rem'
      },
      maxWidth: {
        '30p': '30%',
        '40p': '40%',
        '50p': '50%'
      },
      inset: {
        'rm-right': '200%'
      }
    },
  },
  plugins: [],
}

