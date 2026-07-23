import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function devEntryPlugin(): Plugin {
  return {
    name: 'dev-entry',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/' || url === '/index.html') {
          req.url = '/index.dev.html';
        }
        next();
      });
    },
  };
}

export default defineConfig(({ command }) => ({
  // Local dev uses `/`. GitHub Actions sets VITE_BASE for project Pages.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), ...(command === 'serve' ? [devEntryPlugin()] : [])],
  server: {
    open: '/index.dev.html',
    watch: {
      ignored: ['**/glid-b2b-kit/**', '**/showroom-kit/**'],
    },
  },
}));
