/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlack: 'rgba(0, 0, 0, 1)',
        mainGray: 'rgba(151, 151, 151, 1)',
        secondaryGray: 'rgba(157, 157, 157, 1)',
        secondaryWhite: 'rgba(255, 255, 255, 1)',
        bgGray: 'rgba(247, 247, 247, 1)',
      },
      fontSize: {
        fz12: '12px',
        fz14: '14px',
        fz16: '16px',
        fz24: '24px',
      },
      lineHeight: {
        lh14: '14px',
        lh15: '15px',
        lh17: '17px',
        lh20: '20px',
        lh30: '30px',
      },
      fontFamily: {
        abel: ['Abel-Regular', 'sans-serif'],
        sfPro: ['SF-Pro-Display-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
