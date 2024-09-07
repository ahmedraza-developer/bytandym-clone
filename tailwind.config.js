/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "xs": { "max": "576px" },
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        sans: ['Merriweather', ...fontFamily.sans]
      },
      colors: {
        'primary': '#136d58',
      },
      backgroundImage: {
        'hero-linear-gradient': 'linear-gradient(131deg, #cfebe7, #ffcba5 52%, #ffb8a9)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
}