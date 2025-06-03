import { registerSW } from 'virtual:pwa-register'

registerSW({
  onNeedRefresh() {
    // handle when the service worker needs to be refreshed
    console.log('Service worker needs refresh!')
  },
  onOfflineReady() {
    // handle when the app is ready for offline use
    console.log('App is ready to work offline!')
  },
})
