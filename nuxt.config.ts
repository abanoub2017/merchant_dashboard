import {resolve} from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    '@': resolve(__dirname, '/'),
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: [
    '@vee-validate/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
