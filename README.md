# Casa San Pietro Website

**Casa San Pietro Website** è un sito web semplice e accogliente dedicato alla presentazione di una casa vacanze nel cuore di Roma, a pochi passi dalla Basilica di San Pietro. Il sito fornisce informazioni utili per gli ospiti, incluse le regole della casa e suggerimenti sui luoghi da visitare nei dintorni.

## 🏡 Cosa offre il sito

- ✅ Regole della casa chiare e tradotte in varie lingue
- 📍 Elenco dei principali luoghi da visitare a Roma e nei pressi del Vaticano
- 🌐 Design responsive, compatibile con dispositivi mobili e tablet
- 💬 Interfaccia multilingua basata su file JSON

## 🧰 Tecnologie utilizzate

- [Vue 3](https://vuejs.org/) con Composition API
- [Vite](https://vitejs.dev/) per sviluppo e build
- [Vuetify](https://vuetifyjs.com/) per i componenti UI
- `locales.json` per la gestione delle traduzioni

## 🚀 Come avviare il progetto

```bash
npm install
npm run dev
```

Apri il browser su `http://localhost:5173` per visualizzare il sito in locale.

## 📂 Struttura principale

- `public/` — favicon, immagini
- `src/components/` — componenti Vue (`HouseRules.vue`, `Places.vue`, ecc.)
- `src/locales.json` — tutte le traduzioni dei contenuti
- `App.vue` — layout principale
- `vite.config.ts` — configurazione vite

## 🏁 Build per la produzione

```bash
npm run build
```

I file verranno generati nella cartella `dist/`.

## 🌍 Deployment su GitHub Pages

1. Aggiungi il nome del repo nel `vite.config.ts` (es. `base: '/nome/'`)
2. Costruisci il progetto:
   ```bash
   npm run build
   ```
3. Esegui il deploy (es. usando `gh-pages`):
   ```bash
   npm install -D gh-pages
   npx gh-pages -d dist
   ```

## 📃 Licenza

Uso privato. Tutti i diritti riservati.
