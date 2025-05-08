import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint' // Sintaxe pré-v2.0

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // Ordem de resolução
    alias: {
      '@assets': path.resolve(__dirname, './src/assets') // __dirname já é suportado
    }
  }
})
