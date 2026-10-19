/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { navy: "#12151C", blue: "#0077F5", pale: "#EEF6FF" }
      }
    },
  },
  plugins: [],
};
