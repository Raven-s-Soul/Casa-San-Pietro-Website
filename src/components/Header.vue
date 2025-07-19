<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const languages = [
  { code: 'it', name: 'Italiano' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
]

const props = defineProps({
  modelValueLang: { type: String, required: true }
})
const emit = defineEmits(['update:modelValueLang'])

const theme = useTheme()

const lang = computed<string>({
  get: () => props.modelValueLang,
  set: (val: string) => emit('update:modelValueLang', val)
})

const currentTheme = computed<string>({
  get: () => theme.global.name.value,
  set: (val: string) => {
    theme.global.name.value = val
  }
})
</script>

<template>
  <v-app-bar app color="primary" :dark="currentTheme === 'dark'" :light="currentTheme === 'light'">
    <v-toolbar-title class="text-subtitle-1 font-weight-medium text-truncate">Doom's Key</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-select
      :items="languages"
      item-value="code"
      item-title="name"
      dense
      outlined
      hide-details
      style="max-width: 140px; font-size: 0.4rem;"
      v-model="lang"
    />

    <v-btn-toggle
      v-model="currentTheme"
      mandatory
      class="ml-4"
      rounded
      dense
      color="secondary"
    >
      <v-btn value="dark" icon><v-icon size="8">mdi-moon-waxing-crescent</v-icon></v-btn>
      <v-btn value="light" icon><v-icon size="8">mdi-white-balance-sunny</v-icon></v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>
