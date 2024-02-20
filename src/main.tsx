import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { registerSW } from 'virtual:pwa-register'

void registerSW({
  onNeedRefresh() {
    console.log('🚀 > onNeedRefresh > onNeedRefresh')
  },
  onOfflineReady() {
    console.log('🚀 > onOfflineReady > onOfflineReady')
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
