export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
        },
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8420827185796423',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  css: ['leaflet/dist/leaflet.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
  ],

  nitro: {
    prerender: {
      routes: ['/', '/what-is-my-ip', '/vpn-checker'],
      crawlLinks: true,
    },
  },

  site: {
    url: 'https://iplocator.dev',
  },

  runtimeConfig: {
    ipApiKey: '',
    public: {
      gaMeasurementId: 'G-XXXXXXXXXX',
      adsenseId: 'ca-pub-8420827185796423',
      siteUrl: 'https://iplocator.dev',
    },
  },

  sitemap: {
    strictNuxtContentPaths: false,
  },
})
