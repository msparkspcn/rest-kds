// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import path from 'path';
//
// export default defineConfig({
//   resolve: {
//     alias: { find: "@", replacement: path.resolve(__dirname, "src/renderer") },
//   },
//   plugins: [
//     react(), tailwindcss(),
//     tsconfigPaths({
//       projects: ['./tsconfig.renderer.json']
//     })
//   ],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'https://s9rest.ngrok.io',
//         changeOrigin: true,
//         secure: false
//       }
//     }
// ,  },
//   build: {
//     outDir: "dist",
//   },
// });
//
