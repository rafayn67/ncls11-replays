/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NCLPurple: "#7F3FBF",
        NCLIndigo: "#5C6AC4",
      },
    },
  },
  plugins: [],
}