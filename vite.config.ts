import { defineConfig } from "vite";

import VueMacros from "unplugin-vue-macros/vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({

  // Убрать vue macros когда выйдет vue 3.3 и заработает импорт типов в компоненты
  plugins: [VueMacros({ plugins: { vue: vue() } })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
  },
});
