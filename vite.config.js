import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://theredhorsellc.github.io/MockApp/",
  server:{
    port: 6969,
  },
  build:{
    outDir: "dist",
  }
})
