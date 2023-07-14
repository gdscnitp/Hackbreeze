/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "1/15": "6.6%",
      },
      colors: {
        primary: "#FFEDED",
        secondary: "#7B2869",
        tertiary: "#C85C83",
      },
    },
  },
  plugins: [],
};
