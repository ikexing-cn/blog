import vue from '@vitejs/plugin-vue'
import { defineConfig, UserConfigExport } from 'vite'

const publicConfig: UserConfigExport = defineConfig({
    plugins: [
        vue()
    ],
    server: {
        port: 4000,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})

export default publicConfig