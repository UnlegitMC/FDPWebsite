module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'minecraft-1': "url('/images/minecraft-1.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
