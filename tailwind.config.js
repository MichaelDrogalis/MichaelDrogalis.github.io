/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray[800]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
            "--tw-prose-links": theme("colors.gray[900]"),
            "--tw-prose-bold": theme("colors.gray[900]"),
            "--tw-prose-counters": theme("colors.gray[600]"),
            "--tw-prose-bullets": theme("colors.gray[600]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[600]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[200]"),
            "--tw-prose-pre-bg": theme("colors.gray[900]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ]
}
