import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/projeto-integrador-2025.01/',
  plugins: [react()],
})
