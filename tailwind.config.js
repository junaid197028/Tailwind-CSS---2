/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      '2xl': {'max': '1321px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'med': {'max': '770px'},
      'sm': {'max': '640px'},
    },
    maxWidth: {
      '1320': '1358px',
    },
    extend: {
      
      fontFamily: {
        'own':'Roboto Condensed',
        
      },
      rotate: {
        '24': '20deg',
      }

    },
  },
  plugins: [],
}
