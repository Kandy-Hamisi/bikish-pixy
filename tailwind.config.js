/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        darkBlue: "#242C3B",
        normalBlue: "#4B4CED",
        lightBlue: "#37B6E9",
        primaryGray: "#353F54",
        navyDark: "#222834",
      },
    },
  },
  plugins: [],
};
