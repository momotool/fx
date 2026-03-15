import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'brokers.js',
        chunkFileNames: 'brokers.js',
        assetFileNames: 'brokers.[ext]',
      },
    },
  },
});
