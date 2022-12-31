/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./src/assets/image/jpg/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./src/assets/image/jpg/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('./src/assets/image/jpg/yosemite.jpg')",
			  'LA': "url('./src/assets/image/jpg/LA.jpg')",
			  'seattle': "url('./src/assets/image/jpg/seattle.jpg')",
			  'new_york': "url('./src/assets/image/jpg/new_york.jpg')",
			  'norway': "url('./src/assets/image/jpg/norway.jpg')",
			  'sydney': "url('./src/assets/image/jpg/sydney.jpg')",
			  'miami': "url('./src/assets/image/jpg/miami.jpg')",
			  'switzerland': "url('./src/assets/image/jpg/switzerland.jpg')",
			  'bali': "url('./src/assets/image/jpg/bali.jpg')",
			  'norway': "url('./src/assets/image/jpg/norway.jpg')",
			  'chicago': "url('./src/assets/image/jpg/chicago.jpg')",
			  'europe': "url('./src/assets/image/jpg/europe.jpg')",
			  'iceland': "url('./src/assets/image/jpg/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}