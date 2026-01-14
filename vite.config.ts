import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
          },
        },
        // Code splitting configuration
        rollupOptions: {
          output: {
            manualChunks: {
              // Separate vendor chunks
              'react-vendor': ['react', 'react-dom'],
              'icons': ['lucide-react', 'react-icons'],
              'animation': ['motion'],
              'graphics': ['ogl'],
            },
          },
        },
        // Chunk size warning limit
        chunkSizeWarningLimit: 1000,
        // Enable source maps for debugging (can disable in production)
        sourcemap: false,
      },
      // Optimize dependencies
      optimizeDeps: {
        include: ['react', 'react-dom', 'lucide-react'],
      },
    };
});