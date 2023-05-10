import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/draw/home' },
    { path: '/draw/home', name: "draw_home", component: () => import('./components/Draw.vue') },
    { path: '/draw/result', name: "draw_result", component: () => import('./components/DrawResult.vue') },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})