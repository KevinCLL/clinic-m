import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    base: '/',
    plugins: [vueDevTools(), tailwindcss(), vue()],
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
