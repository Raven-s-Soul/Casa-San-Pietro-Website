<script setup lang="ts">
import { computed } from 'vue'
import rawTranslations from '../locales.json'

type LangCode = 'it' | 'en' | 'fr' | 'es'
type TranslationKey = 'welcome' | 'about' | 'descrizione'
interface TranslationEntry {
  welcome: string
  about: string
  descrizione: string
  lista: string[]
}
type TranslationMap = Record<LangCode, TranslationEntry>

const translations = rawTranslations as TranslationMap

const props = defineProps<{ lang: LangCode }>()

const t = (key: TranslationKey) => translations[props.lang][key] ?? `[${key}]`

const welcomeText = computed(() => t('welcome'))
const aboutText = computed(() => t('about'))
const descrizioneText = computed(() => t('descrizione'))
const lista = computed(() => translations[props.lang].lista || [])
</script>

<template>
  <v-card outlined class="pa-5">
    <v-card-text>
      <h1>{{ welcomeText }}</h1>
      <em>{{ descrizioneText }}</em><br>
      <u>{{ aboutText }}</u>
      <ol class="mt-4">
        <li v-for="(rule, i) in lista" :key="i">{{ rule }}</li>
      </ol>
    </v-card-text>
  </v-card>
</template>