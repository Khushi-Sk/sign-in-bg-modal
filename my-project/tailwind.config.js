/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "searchbar-fill": "#212327",
        "twitter-blue": "#1d9bf0",
      }
    },
  },
  plugins: [],
}

