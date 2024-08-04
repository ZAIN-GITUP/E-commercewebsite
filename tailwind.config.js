/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
            primary :'popins',
    },
    container :{
      padding:{
        default: '30px',
        lg:'0',
        },
      },
      screens :{
        custom: {'min': '120px', 'max': '720px'},
        sm: '640px',
        md:'768px',
        lg:'1024px',
        xl:'1440',
      },
 extend:{
  colors:{
    primary:'#222222',
    secondary:'#F5E6E0' ,
  },
backgroundImage: {
  hero :"url'()./assets/bg_hero.svg')",
},

 },

    },
  plugins: [],
};

