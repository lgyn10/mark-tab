import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       index: resolve(__dirname, 'index.html'),
  //       popup: resolve(__dirname, 'public/popup.html'),
  //       background: resolve(__dirname, 'public/background.ts'),
  //     },
  //     output: {
  //       entryFileNames: '[name].js',
  //       chunkFileNames: '[name].js',
  //       assetFileNames: '[name].[ext]',
  //     },
  //   },
  // },
});
