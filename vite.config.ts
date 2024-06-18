import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import IstanbulPlugin from 'vite-plugin-istanbul'

export default defineConfig({
  appType: 'spa',
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    svgr(),
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
