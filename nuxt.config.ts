// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  appConfig: {

  },
  app: {
    head: {
      title: 'Promo Code 貢獻平台',
      meta: [
        { name: 'description', content: '一個充滿奉獻精神的平台 🫡' },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  experimental: {
    externalVue: true,
  },
  modules: [
    '@nuxt/devtools',
    // '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-windicss',
    '@vueuse/nuxt',
  ],
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
  // supabase: {
  //   url: '',
  //   key: ''
  // },
  css: [
    'assets/var.css',
  ],
  generate: {
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/about',
      ],
    },
  },
  build: {
    // analyze: true
  },
  debug: true,
  vite: {
    esbuild: {

    },
  },
})
