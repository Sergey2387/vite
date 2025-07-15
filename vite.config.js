import { defineConfig } from 'vite';
import htmlPlugin from 'vite-plugin-html';
import imagePlugin from 'vite-plugin-image-presets';

export default defineConfig({
  plugins: [
    htmlPlugin({
      minify: true,
      inject: {
        title: 'Vite + Tailwind',
        description: 'Многостраничный сайт с Vite и TailwindCSS'
      }
    }),
    imagePlugin({
      outputDir: 'dist/assets',
      quality: 80,
      webp: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        home: './src/pages/index.html',
        about: './src/pages/about.html',
        contact: './src/pages/contact.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
