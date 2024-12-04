import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Optional: customize your build output directory
  },
  // base: '/your-subdirectory/', // Uncomment if using subdirectory deployment
})
