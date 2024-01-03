import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  preview:{
    host: true,
    port:3002
  },
  // define: {
  //   "process.env": process.env,
  // },
  base: "/portifolio-admin-front/",
  css: {},
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
