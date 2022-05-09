module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'gray': '#e0e0e5',
      },
      backgroundImage: {
        'card': "url('./images/background.svg')",
      },
    },
  },
  plugins: [],
}