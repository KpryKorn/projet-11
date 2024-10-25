/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-kasa": "#FF6060",
        "gray-kasa": "#f6f6f6",
      },
    },
  },
  plugins: [],
};
