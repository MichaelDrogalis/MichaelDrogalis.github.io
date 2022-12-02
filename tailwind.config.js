/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-100": "#f9f9f9",
      "gray-200": "#f2f2f2",
      "gray-300": "#dadada",
      "gray-400": "#d4d4d4",
      "gray-500": "#b8b8b8",
      "gray-600": "#989898",
      "gray-700": "#787878",
      "gray-800": "#323232",
      "gray-900": "#232323"
    },
    fontFamily: {
      "body": ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: []
}
