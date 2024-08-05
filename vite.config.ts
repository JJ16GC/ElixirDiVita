import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Usa Terser para minificación
    terserOptions: {
      compress: {
        drop_console: true, // Elimina console.log
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Divide el código en chunks
        },
      },
    },
  },
});
