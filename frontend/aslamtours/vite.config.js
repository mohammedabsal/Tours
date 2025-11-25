import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/Tours/',
  plugins: [react(), tailwindcss()],
  build: {
  emptyOutDir: true
}

})
