<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer app padless color="primary" dark>
    <v-col class="text-center white--text py-4">
      © {{ currentYear }} - Tutti i diritti riservati
    </v-col>
  </v-footer>
</template>
