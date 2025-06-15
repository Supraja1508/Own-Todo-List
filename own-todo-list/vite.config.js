import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 IMPORTANT: Set the base to match your repo name
export default defineConfig({
  base: '/Own-todo-list/',
  plugins: [react()],
})
