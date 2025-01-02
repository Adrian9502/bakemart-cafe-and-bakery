import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   build: {
    outDir: 'dist', // Ensure Vite is building to a separate directory
    rollupOptions: {
      input: 'src/main.tsx' // Specify the entry point
    }
  },
  plugins: [react()],
})
