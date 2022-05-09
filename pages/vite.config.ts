import vue from '@vitejs/plugin-vue'
import { defineConfig, UserConfigExport } from 'vite'

const publicConfig: UserConfigExport = defineConfig({
    plugins: [
        vue({ reactivityTransform: true })
    ]
})

export default publicConfig