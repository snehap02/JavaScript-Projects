/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'bgImg': "url('/images/background.jpg')"
      },
      fontFamily:{
        poppins: 'Poppins',
        ubuntu: 'Ubuntu',
        laila: 'Laila'
      },
      boxShadow: {
        shadoww: '-3px -3px 4px rgba(225, 225, 225,0.40),10px 5px 10px rgba(0,0,0,0.25)'
      },
      transitionDuration:{
        delay: '0.07s'
      }
    },
  },
  plugins: [],
}
