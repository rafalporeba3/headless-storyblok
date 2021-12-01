export default {
  target: 'static',

  head: {
    title: 'headless-storyblok',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  css: ['~/theme/tailwind.scss'],

  plugins: [
    '~/plugins/components'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@router/custom-router',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.API_KEY,
        cacheProvider: 'memory'
      }
    ]
  ],

  axios: {},

  build: {}
}
