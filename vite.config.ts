import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Change from '/' to './'
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-hot-toast'],
          icons: ['lucide-react'],
          about: ['./src/components/About'],
          skills: ['./src/components/Skills'],
          projects: ['./src/components/Projects'],
          testimonials: ['./src/components/Testimonials'],
          education: ['./src/components/Education'],
          forms: ['./src/components/ContactForm'],
          modals: ['./src/components/LegalModals']
        },
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', 'react-hot-toast']
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
});
