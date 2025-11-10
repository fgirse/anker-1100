

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        bowlby: ["variable(--font-bowlby)"],
        architects: ["variable(--font-architects)"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
