import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: funciona en GitHub Pages sin importar el nombre del repo
  base: "./",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
