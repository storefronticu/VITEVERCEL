/** @type {import('vite').UserConfig} */

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4242,
    proxy: {
      // string shorthand
      // with options
      '/api': {
        target: 'http://localhost:5252',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx'
    }),
    VitePluginFonts({
      // Custom fonts
      custom: {
        families: [
          {
            name: 'CascadiaCodePL',
            src: './src/assets/fonts/*.woff2'
          }
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend'
      }
    })
  ],
  css: {
    postcss
  },
  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/Assets', replacement: '/src/assets' },
      { find: '@/Components', replacement: '/src/components' }
    ]
  }
})
