/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#23272A',
        light: '#ffffff',
        primary: '#404EED',
        grey: '#F6F6F6',
        black:'#23272A',
        bleck:'#3E4652',
        boton:'#6D78F4'
      },

      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1080px',
        'xl': '1920'
      },

      backgroundImage: {
        'hmBG': 'url("./dc-img/hm-bg.svg")',
        'star': 'url("./dc-img/star.svg")',
      },
    },
  },
  plugins: [],
}

