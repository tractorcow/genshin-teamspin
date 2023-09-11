/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rarity-five-star": {
          300: "#de9552",
          500: "#9a6d43",
        },
        "rarity-four-star": {
          300: "#917ab1",
          500: "#6c6192",
        },
        "rarity-three-star": {
          300: "#e22f3b",
          500: "#be4f56"
        }
      }
    },
  },
  plugins: [],
}
