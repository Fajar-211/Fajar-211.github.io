/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'gowun-batang': ['"Gowun Batang"', 'serif'],
        'noto-sans': ['"Noto Sans Warang Citi"'],
        'Bebas-Neue': ['"Bebas Neue"'],
        'roboto': ['"Roboto"']
      }
    },
  },
  plugins: [],
}

