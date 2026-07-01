export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-7PP5PD1CZT', async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-7PP5PD1CZT');`,
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
      routes: ['/', '/what-is-my-ip', '/vpn-checker', '/about', '/contact', '/privacy', '/terms'],
      crawlLinks: true,
    },
  },

  site: {
    url: 'https://iplocator.dev',
  },

  runtimeConfig: {
    ipApiKey: '',
    public: {
      gaMeasurementId: 'G-7PP5PD1CZT',
      adsenseId: 'ca-pub-8420827185796423',
      siteUrl: 'https://iplocator.dev',
      // Master switch for ALL monetization (AdSense <ins> slots AND the VPN
      // affiliate grid). Leave OFF until the AdSense account is approved AND
      // real ad-unit slot IDs + real affiliate URLs are wired in. While off,
      // no ad boxes and no affiliate CTAs render — review pages are pure
      // content, which fixes the made-for-ads / thin-affiliate signal.
      // Flip on post-approval via env: NUXT_PUBLIC_ADSENSE_ENABLED=true
      adsenseEnabled: false,
    },
  },

  sitemap: {
    strictNuxtContentPaths: false,
  },
})
