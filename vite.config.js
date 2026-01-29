import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User/organization pages live at the root domain.
  // If you ever deploy from a project subpath, update base accordingly.
  base: '/',
})
