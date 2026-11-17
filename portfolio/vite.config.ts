import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import reactCompilerPreset from 'babel-plugin-react-compiler';

export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'cloudflare'
    ? '/'
    : '/alonso-space/',

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
});
