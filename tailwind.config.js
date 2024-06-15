/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f75ff",
      },
      height: {
        "screen-minus-100": "calc(100vh - 100px)",
      },
      screens: {
        "md-1100": "1100px",
        "md-1000": "1000px",
        "md-900": "900px",
        "md-1230": "1230px",
      },
      boxShadow: {
        "custom-blue": "0 0 5px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
