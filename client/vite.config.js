
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Capstone-Projectn/',
  plugins: [react()],
  server: { port: 5173 }
});
