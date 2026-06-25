import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

// Served from https://davidstojanovski.github.io/stojanovski_portfolio/
export default defineConfig({
  base: "/stojanovski_portfolio/",
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
  },
  resolve: {
    alias: {
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      features: fileURLToPath(new URL("./src/features", import.meta.url)),
      entities: fileURLToPath(new URL("./src/entities", import.meta.url)),
      shared: fileURLToPath(new URL("./src/shared", import.meta.url)),
    },
  },
})
