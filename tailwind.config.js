/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {fontSize:{
      sm:'0.8rem',
      subtitle:'1rem',
      title:'1.25rem',
      maintext:'50px',
      secondarytext:'30px'
  },

  fontFamily:{
      title:"Poppins",
      subtitle:"Libre Franklin"
  },
    extend: {
      colors:{
        'other':'hsl(268 70% 52%)',
        'primary' :'hsl(263, 64, 52)',
        'secondary' :'hsl(268, 33, 20)',
        'inline':'bg-pink-300',
        'gray':'hsl(0, 0, 46)',
        'light-gray':'hsl(0, 0, 78)',
        'accent':'hsl(302, 71, 34)'
    },
    },
  },
  plugins: [],
}

