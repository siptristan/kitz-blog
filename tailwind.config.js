/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        'dashboard': '#F3F2F3'
      },
      backgroundImage: {
        'bg-anak': "url('/assets/images/anak.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin.js')
  ],
}
