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
  plugins: [
    react(),
    svgr(),
    // TODO: include the IstanbulPlugin in the plugins array
    // to instrument the bundled code
    IstanbulPlugin({
      include: 'src/*',
      exclude: ['node_modules', 'cypress/', '*.cy.js'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
})
