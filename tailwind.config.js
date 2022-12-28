/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Kufi Arabic", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "extra-spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
