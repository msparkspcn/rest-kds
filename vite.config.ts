import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: { find: "@", replacement: resolve(__dirname, "src") },
  },
  plugins: [
    react(), tailwindcss(),tsconfigPaths(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://s9rest.ngrok.io',
        changeOrigin: true,
        secure: false
      }
    }
,  },
  build: {
    outDir: "dist",
  },
});

