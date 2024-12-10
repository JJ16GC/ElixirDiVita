import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2015,
        passes: 3,
      },
      output: {
        comments: false,
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
          ],
          // Añade chunks adicionales según sea necesario
          pages: ["src/pages/Home.tsx", "src/pages/Product.tsx","src/pages/About.tsx","src/pages/AboutMe.tsx"],
        },
      },
    },
    chunkSizeWarningLimit: 600, // Ajusta el límite de tamaño de chunk para evitar advertencias
  },
});
