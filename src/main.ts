import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Importa gli stili di Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#FFFFFF', // chiaro per light
          surface: '#F5F5F5',    // chiaro per light
          onPrimary: '#FFFFFF',
          onSecondary: '#000000',
          onBackground: '#000000',
          onSurface: '#000000',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#424242',
          accent: '#FF80AB',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#181818',  // scuro per dark
          surface: '#212121',     // scuro per dark
          onPrimary: '#FFFFFF',
          onSecondary: '#FFFFFF',
          onBackground: '#FFFFFF',
          onSurface: '#FFFFFF',
        },
      },
    },
  },
})



createApp(App).use(vuetify).mount('#app')
