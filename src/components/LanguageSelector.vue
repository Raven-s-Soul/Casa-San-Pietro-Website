<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type LangCode = 'it' | 'en' | 'fr' | 'es'
const languages = [
  { code: 'it', name: 'Italiano' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' }
]

const props = defineProps<{ modelValue: LangCode }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: LangCode): void }>()

function updateLang(value: LangCode) {
  emit('update:modelValue', value)
}
</script>

<template>
  <v-select
    :items="languages"
    item-value="code"
    item-title="name"
    label="Seleziona lingua"
    dense
    outlined
    :model-value="props.modelValue"
    @update:model-value="updateLang"
  />
</template>
