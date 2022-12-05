/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray": {
        100: "hsl(210,30%,98%)",
        200: "hsl(210,29%,95%)",
        300: "hsl(210,27%,80%)",
        400: "hsl(210,25%,65%)",
        500: "hsl(210,21%,50%)",
        600: "hsl(210,18%,40%)",
        700: "hsl(210,15%,30%)",
        800: "hsl(210,12%,23%)",
        900: "hsl(210,10%,20%)"
      }
    },
    fontFamily: {
      "body": ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: []
}
