import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser", // Usa Terser para minificación
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true, // Elimina debuggers
        ecma: 2015, // Optimiza para versiones modernas de ECMAScript
        passes: 3, // Aumenta el número de pases de compresión
      },
      output: {
        comments: false, // Elimina comentarios
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            "react",
            "react-dom",
            "react-bootstrap",
            "@fortawesome/react-fontawesome",
          ], // Divide el código en chunks
        },
      },
    },
  },
});
