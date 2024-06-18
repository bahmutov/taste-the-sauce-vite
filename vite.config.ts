import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// https://github.com/iFaxity/vite-plugin-istanbul
import IstanbulPlugin from 'vite-plugin-istanbul'

export default defineConfig({
  appType: 'spa',
  build: {
    sourcemap: true,
  },
  // TODO: include the IstanbulPlugin in the plugins array
  // to instrument the bundled code
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
})
