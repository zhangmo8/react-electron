import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: "./",
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
    }
  },
  server: {
    port: 5066,
  },
  build: {
    outDir: path.join(__dirname, 'build-view')
  }
})
