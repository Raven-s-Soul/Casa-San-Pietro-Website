<script setup lang="ts">
import { computed } from 'vue'
import rawTranslations from '../locales.json'

type LangCode = 'it' | 'en' | 'fr' | 'es'
type TranslationKey = 'welcome' | 'descrizione' | 'about' | 'rules' | 'manual' | 'manuallist'| 'titleExp' | 'preexp' | 'experiences' | 'prespecialexp' | 'specialexp' | 'prenearexp' | 'nearexp' | 'service' | 'services' | 'suggestion' | 'suggestions'
interface TranslationEntry {
  welcome: string
  descrizione: string
  about: string
  rules: string[]
  manual: string
  manuallist: string[]
  titleExp: string
  preexp: string
  experiences: string[]
  prespecialexp: string
  specialexp: string[]
  prenearexp: string
  nearexp: string[]
  service: string
  services: string[]
  suggestion: string
  suggestions: string[]
}
type TranslationMap = Record<LangCode, TranslationEntry>

const translations = rawTranslations as TranslationMap

const props = defineProps<{ lang: LangCode }>()

const t = (key: TranslationKey) => translations[props.lang][key] ?? `[${key}]`

const welcomeText = computed(() => t('welcome'))
const descrizioneText = computed(() => t('descrizione'))
const aboutText = computed(() => t('about'))
const rulesList = computed(() => t('rules'))

const manualtext = computed(() => t('manual'))
const manuallist = computed(() => t('manuallist'))

const titleExpText = computed(() => t('titleExp'))
const preexpText = computed(() => t('preexp'))
const experiencesList = computed(() => t('experiences'))

const prespecialexpText = computed(() => t('prespecialexp'))
const specialexpList = computed(() => t('specialexp'))

const prenearexpText = computed(() => t('prenearexp'))
const nearexpList = computed(() => t('nearexp'))

const serviceText = computed(() => t('service'))
const servicesList = computed(() => t('services'))

const suggestionText = computed(() => t('suggestion'))
const suggestionsList = computed(() => t('suggestions'))

</script>

<template>


  <v-card outlined class="pa-5" >
    <v-card-text>
      <h1>{{ welcomeText }}</h1>
      <em>{{ descrizioneText }}</em><br>
      <u>{{ aboutText }}</u>
      <ol class="mt-4">
        <li v-for="(rule, i) in rulesList" :key="i">{{ rule }}</li>
      </ol>
    </v-card-text>
  </v-card>

  <br>

  <v-card outlined class="pa-5" >
    <v-card-text>
      <h1>{{ manualtext }}</h1>
      <ol class="mt-4">
        <li v-for="(manu, i) in manuallist" :key="i">{{ manu }}</li>
      </ol>
    </v-card-text>
  </v-card>

  <br>

  <v-card outlined class="pa-5" style="min-width: 100%;">
    <v-card-text>
      <h1>{{ titleExpText }}</h1><br>
      <h3>{{ preexpText }}</h3>
      <ol class="mt-1">
        <li v-for="(exp, i) in experiencesList" :key="i">{{ exp }}</li>
      </ol><br>

      <h3>{{ prespecialexpText }}</h3>
      <ol class="mt-1">
        <li v-for="(exp, i) in specialexpList" :key="i">{{ exp }}</li>
      </ol><br>

      <h3>{{ prenearexpText }}</h3>
      <ol class="mt-1">
        <li v-for="(exp, i) in nearexpList" :key="i">{{ exp }}</li>
      </ol><br>

    </v-card-text>
  </v-card>

  <br>

  <v-card outlined class="pa-5">
    <v-card-text>
      <h1>{{ serviceText }}</h1>
        <ol class="mt-1">
          <li v-for="(serv, i) in servicesList" :key="i">{{ serv }}</li>
      </ol>
    </v-card-text>
  </v-card>

  <br>

  <v-card outlined class="pa-5">
    <v-card-text>
      <h1>{{ suggestionText }}</h1>
        <ol class="mt-1">
          <li v-for="(sug, i) in suggestionsList" :key="i">{{ sug }}</li>
      </ol>
    </v-card-text>
  </v-card>

</template>