import vitePluginImp from 'vite-plugin-imp';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#EAA516", //全局样式
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: './src',
      },
    ],
  },
  server: {
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
});
