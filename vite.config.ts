import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: 'test-task-DotSales',
  server: {
    proxy: {
      '/api': {
        target: 'https://mig26.amocrm.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v4')
      }
    }
  }
});
