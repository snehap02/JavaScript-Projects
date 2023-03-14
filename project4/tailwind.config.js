/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        bg: 'url("./images/background.png")'
      },
      colors:{
        button: '#E50914'
      },
      fontFamily:{
        roboto: 'Roboto',
        poppins: 'Poppins'
      },
      screens:{
        'b-sm': '600px',
        'b-lg': '960px',
        'b-lg1': '964px',
        'sm-small': '408px',
        'sm-big': '594px'
      }
    },
  },
  plugins: [],
}
