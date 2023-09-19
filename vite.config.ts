import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
      dts: 'typings/vue-component.d.ts'
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-import.d.ts',
      eslintrc: {
        enabled: false // <-- this
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
