/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
   extend :{
    colors: {
      primary: '#59E5C5',
      secondary: '#0A192F',
      success:'#112240'
    },
    fontFamily:{
      fira:'Fira Sans'
    }
   }
  },
};
