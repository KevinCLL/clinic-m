import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    base: "/",
    plugins: [
      vueDevTools(), 
      tailwindcss(), 
      vue(),
      // Plugin de optimización de imágenes - solo en build
      !isDev && viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
          progressive: true,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
        webp: {
          quality: 80,
        }
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: isDev
      ? {
          port: 7777,
          watch: {
            usePolling: true,
          },
          hmr: {
            protocol: 'wss',
          },
        }
      : undefined,
  }
})
