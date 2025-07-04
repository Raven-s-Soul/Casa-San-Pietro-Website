import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/Casa-San-Pietro-Website/',
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ]
})
