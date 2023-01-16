/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        brown: '#301911',
        lightbrown: '#4a3612',
        brownyellow: '#e6b35a',
        maddyBrown: '#574525',
        newyellow: '#B27231'
      },
      backgroundImage:{
        'image': 'url(/images/back.jpg)'
      },
      fontFamily:{
        onlyFont: 'Playfair Display'
      }
    },
  },
  plugins: [],
}
