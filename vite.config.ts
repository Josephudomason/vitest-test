import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //   test: {
  //     globals: true,                // Allows you to use 'describe', 'it', 'expect' without explicit imports
  //     environment: 'jsdom',        // Simulates the browser
  //     setupFiles: './src/setupTests.js', // Runs setup code before tests run
  // }
})
