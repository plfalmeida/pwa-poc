import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  define: {
    'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date().toISOString())
  },
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
      }
    }),
  ],
})
