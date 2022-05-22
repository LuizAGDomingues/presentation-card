module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'gray': '#e0e0e5',
        'react': '#61dafb',
        'vite': '#646cff',
        'Rocketseat': "#8257e5",
        'Tailwindcss': '#38BDF8'
      },
      backgroundImage: {
        'card': "url('./images/background.svg')",
      },
    },
  },
  plugins: [],
}