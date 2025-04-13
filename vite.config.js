import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/bg-gone/", // 👈 this must match the repo name
  plugins: [react()],
})
