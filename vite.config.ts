import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist', // Ensures output is saved in ./dist
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
 
})
