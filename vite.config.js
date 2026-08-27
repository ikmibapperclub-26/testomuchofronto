import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // Tidak perlu proxy lagi — backend sekarang di Render (URL absolut lewat
  // VITE_API_BASE_URL, lihat src/utils/api.js dan .env.example).
});

