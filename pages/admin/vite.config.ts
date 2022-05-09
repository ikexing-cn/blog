import { resolve } from 'path'
import { defineConfig } from 'vite'
import publicConfig from '../vite.config'

export default defineConfig({
    ...publicConfig,
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
})
