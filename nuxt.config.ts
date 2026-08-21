import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',

  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1065785669441750",
          async: true,
          crossorigin: 'anonymous',
        },
      ],
      title: 'Gian Mari Ramos | Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio and web resume of Gian Mari Ramos, a web developer with experience in government systems, healthcare applications, and technical solutions.',
        },
      ],
    },
  },
})
