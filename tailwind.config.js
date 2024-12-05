/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    darkTheme: "dark",
  },
}
