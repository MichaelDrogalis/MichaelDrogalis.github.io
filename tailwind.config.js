/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gray-100": "#fcfcfc",
      "gray-200": "#fdfdfd",
      "gray-300": "#cad0d2",
      "gray-400": "#b4bcc1",
      "gray-500": "#a4afb3",
      "gray-600": "#92999c",
      "gray-700": "#232b2e",
      "gray-800": "#181d1f"
    },
    fontFamily: {
      "body": ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: []
}
