import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      overlay: false,
      typescript: true,
    }),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
