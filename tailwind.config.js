/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#C0BDFF",
      },
      height: {
        1092: "1092px",
      },
    },
  },
  plugins: [],
};
