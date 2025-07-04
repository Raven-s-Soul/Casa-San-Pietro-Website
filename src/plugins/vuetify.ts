import "vuetify/styles/main.css"                 // Importa gli stili base di Vuetify
import { createVuetify } from 'vuetify'  // Funzione per creare Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi'  // Icone Material Design
import { md3 } from 'vuetify/blueprints' // Blueprint Material Design 3 (opzionale)

export const vuetify = createVuetify({
  blueprint: md3,  // usa Material Design 3, puoi rimuoverlo se vuoi il tema base
  icons: {
    defaultSet: 'mdi',  // set di icone predefinito
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark', // Tema di default: light o dark
  },
})