// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@primevue/nuxt-module', '@pinia/nuxt'],
  app:{
    head:{
      title: 'Nuxt Products',
      meta: [{
        name: 'description', content: 'Nuxtttttt'
      },],
      link: [{
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }]
    }
  },
  runtimeConfig: {
    public: {
      msg: ''
    },
    apiSecret: '',
  },
  css: ["@/assets/styles/tailwind.css"],
  primevue: {
      options: {
          theme: 'none'
      }
  },
  postcss: {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
    },
  },
})  