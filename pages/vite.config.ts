import vue from '@vitejs/plugin-vue'
import { defineConfig, UserConfigExport } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const publicConfig: UserConfigExport = defineConfig({
    plugins: [
        vue({ reactivityTransform: true }),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ]
})

export default publicConfig
