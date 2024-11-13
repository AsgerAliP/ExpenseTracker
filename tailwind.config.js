/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#a89af1',
        'button' : '#440d60',
        'hover': '#561477',        
        'result' : '#2e3434',
        'list' : '#565858',
      }
    },
  },
  plugins: [],
}

