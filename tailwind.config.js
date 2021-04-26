const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["index.html", "./src/**/*.{vue, js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#FFF1EB',
          100: "#FADDCE",
          200: "#F5B59F",
          300: "#E17F6B",
          400: "#C34E43",
          500: "#9B1414",
          600: "#850E18",
          700: "#6F0A1B",
          800: "#59061C",
          900: "#4A031C",
        },
        green: {
          100: "#E8FAD1",
          200: "#CDF5A5",
          300: "#A3E174",
          400: "#78C44D",
          500: "#449E1E",
          600: "#308715",
          700: "#1F710F",
          800: "#115B09",
          900: "#074B05",
        },
        blue: {
          100: "#C8F7FA",
          200: "#93E9F5",
          300: "#5AC9E3",
          400: "#31A1C7",
          500: "#006FA3",
          600: "#00568C",
          700: "#004075",
          800: "#002D5E",
          900: "#00204E",
        },
        orange: {
          100: "#F9E9CA",
          200: "#F4CE97",
          300: "#E0A45F",
          400: "#C17837",
          500: "#994407",
          600: "#833205",
          700: "#6E2303",
          800: "#581702",
          900: "#490E01",
        },
        red: {
          100: "#FBD3D1",
          200: "#F7A5A9",
          300: "#E97586",
          400: "#D34F70",
          500: "#B71F54",
          600: "#9D1652",
          700: "#830F4F",
          800: "#6A0947",
          900: "#570542",
        },
        black: "#292929"
      },
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans
        ],
        display : 'Lato',
        header: 'Montserrat'
      },
      zIndex: {
        '-10': -10
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
