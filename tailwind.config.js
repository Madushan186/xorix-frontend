/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondaryBrown: "#8A8475",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // 👈 Add this
      },
    },
  },
  plugins: [require("@tailwindcss/forms")], // 👈 fix this to require instead of string
};
