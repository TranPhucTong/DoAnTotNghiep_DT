/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "rgb(34, 197, 94)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
