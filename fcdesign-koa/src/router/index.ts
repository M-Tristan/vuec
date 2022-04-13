import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
import About from '../page/about.vue'
import Index from '../page/index.vue'
const routes = [
    { path: '/', component: Index },
    { path: '/about', component: About },
]


export function createRouter() {
    return _createRouter({

        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    });
}


export default createRouter