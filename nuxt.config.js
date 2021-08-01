import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  srcDir: 'src/',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - はあちゃまコール',
    title: 'はあちゃまコール',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'はあちゃま,赤井はあと,はあちゃまホラー,アプリ',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'はあちゃまからの着信を体験しよう',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@destino591211' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'はあちゃまコール',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://haachama-call.web.app',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'はあちゃまコール！ はあちゃまからの着信を体験しよう',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://haachama-call.web.app/ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' }, // twitterの画像サイズ
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'はあちゃまコール！',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-gtag',
    [
      '@nuxtjs/google-gtag',
      {
        id: 'G-LG8DV60Q1G',
        debug: false,
      },
    ],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
  },

  manifest: {
    name: 'はあちゃまコール',
    short_name: 'はあちゃまコール',
    title: 'はあちゃまコール',
    'og:title': 'はあちゃまコール',
    description: 'はあちゃまからの着信を体験しよう',
    'og:description': 'はあちゃまからの着信を体験しよう',
    lang: 'ja',
    theme_color: '#000000',
    background_color: '#000000',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader',
        exclude: /(node_modules)/,
      })
    },
  },
}
