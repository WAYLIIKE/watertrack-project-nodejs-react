import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactIcons from 'vite-plugin-react-icons';

export default defineConfig({
  plugins: [react(), svgr(), reactRefresh(), reactIcons()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  base: '/watertrack-project-nodejs-react',
});
