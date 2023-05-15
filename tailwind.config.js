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
    },
    screens: {
      //DEFAULT 1024px first

      'xl': {'min' : '1025px'},
      // => @media (min-width: 1025px) { ... }

      'tab': {'max' : '768px'},
      // => @media (max-width: 768px) { ... }

      'phone':{'max' : '425px'},
      //=>@media(max-width: 425px)
    }
  },
  plugins: [],
}

