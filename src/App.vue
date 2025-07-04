<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import TranslatedText from './components/TranslatedText.vue'

type LangCode = 'it' | 'en' | 'fr' | 'es'
type Theme = 'light' | 'dark'

// Stato lingua e tema
const selectedLang = ref<LangCode>('it')
const theme = ref<Theme>('dark')

const vuetifyTheme = useTheme()

watch(theme, (val) => {
  vuetifyTheme.global.name.value = val
})
</script>

<template>
  <v-app>
    <Header
      :model-value-lang="selectedLang"
      @update:modelValueLang="val => selectedLang = val"
      :model-value-theme="theme"
      @update:modelValueTheme=" (val: string) => theme = val as Theme"
    />
    <v-main>
      <v-container class="pa-4" style="max-width: 600px;">
        <TranslatedText :lang="selectedLang" />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
