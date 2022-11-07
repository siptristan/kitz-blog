export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kitz-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { href: "https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap", rel: "stylesheet" }, 
      { href: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css", rel: "stylesheet" }, 
    ],
    script: [
      { src: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js', ssr: false}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src : '@/plugins/vue-apexchart.js', mode: 'client' },
    { src: '~/plugins/vuex-persist.js', ssr: false },
    { src: '~/plugins/ckeditor.js', mode: 'client', ssr: false },
    { src: '~/plugins/flowbite.js', mode: 'client', ssr: false },
    // { src: '~/plugins/sweetalert.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-sweetalert2/nuxt',
    '@nuxtjs/axios'
  ],

  loading: {
    color: 'blue',
    height: '5px'
  },

  axios: {
    // proxy: true
    baseURL: "https://localhost:5002/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
