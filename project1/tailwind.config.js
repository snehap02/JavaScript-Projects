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
      }
    },
  },
  plugins: [],
}
