import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions:{
        input:{
            main: resolve(__dirname, 'index.html'),
            favorito: resolve(__dirname, 'favorito.html'),
            contacto: resolve(__dirname, 'contacto.html'),
            tarjeta: resolve(__dirname, 'tarjeta.html')
        }
    }
  }
})