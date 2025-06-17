import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/counter/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Vite PWA Counter',
        short_name: 'Counter',
        start_url: 'https://ahmadsulha.github.io/counter/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            "src": "screenshot-desktop.jpg",
            "sizes": "1280x584",
            "type": "image/jpg",
            "form_factor": "wide"
          },
          {
            "src": "screenshot-mobile.jpg",
            "sizes": "320x320",
            "type": "image/jpg",
            "form_factor": "narrow"
          }
        ]
      }
    })
  ],
})
