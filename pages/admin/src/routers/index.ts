import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/Login/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
