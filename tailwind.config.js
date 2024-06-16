/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, hsla(0, 0%, 100%, 1) 0%, hsla(285, 53%, 94%, 1) 54%)',
      },
    },
  },
  plugins: [],
}