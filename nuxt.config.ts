// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@provetcloud/css'],
  plugins: [
    '~/plugins/provetcloud.client.ts'
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('provet-')
    }
  },
})
