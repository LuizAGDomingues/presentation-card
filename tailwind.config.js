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
      keyframes: {
        fade: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        move: {
          'from': { transform: 'translateY(-100vh)' },
          'to': { transform: 'translateY(0)' },
        },
        side: {
          'from': { opacity: '0', transform: 'translateX(-35%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fade: 'fade 2s ease-in-out',
        move1: 'move 1s ease-in-out backwards',
        move2: 'move 2s ease-in-out backwards',
        move3: 'move 3s ease-in-out backwards',
        side1: 'side 1s ease-in-out backwards',
        side2: 'side 2s ease-in-out backwards',
        side3: 'side 3s ease-in-out backwards',
      }
    },
  },
  plugins: [],
}