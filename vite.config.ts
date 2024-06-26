import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  appType: 'spa',
  build: {
    sourcemap: true,
  },
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
})
