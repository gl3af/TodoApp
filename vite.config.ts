/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from "path"
import react from "@vitejs/plugin-react-swc"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  test: {
    environment: 'jsdom',
    setupFiles: "src/tests/setupTests.ts",
    globals: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})