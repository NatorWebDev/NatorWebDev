/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        bgColor: '#222222',
        primary: '#017AD5',
        secondary:'#FB2576',
      },
      spacing:{
        '4':'4px',
        '8':'8px',
        '12':'12px',
        '16':'16px',
        '24':'24px',
        '32':'32px',
        '48':'48px',
        '64':'64px',
        '96':'96px',
        '128':'128px',
        '192':'192px',
        '256':'256px',
        '384':'384px',
        '512':'512px',
        '640':'640px',
        '768':'768px'
      },
      keyframes:{
        'slide' : {
          '0%' : {transform: 'translateX(0)'},
          '100%' : {transform: 'translateX(-150vw)'}
        }
      }
    },
    screens: {
      //DEFAULT desktop first

      'lap': {'max' : '1024px'},
      // => @media (min-width: 1025px) { ... }

      'tab': {'max' : '768px'},
      // => @media (max-width: 768px) { ... }

      'phone':{'max' : '425px'},
      //=>@media(max-width: 425px)
    }
  },
  plugins: [],
}

