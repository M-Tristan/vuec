import { createMemoryHistory, createWebHistory, RouteRecordRaw, createRouter as _createRouter, } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/index",
        component: () => import("./pages/index.vue"),
    },
    {
        path: "/client",
        component: () => import("./pages/client.vue"),
    },
    {
        path: "/server",
        component: () => import("./pages/server.vue"),
    },
];

export function createRouter() {
    return _createRouter({
        // history: import.meta.env.SSR ? createMemoryHistory("/ssr") : createWebHistory("/ssr"),
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes,
    });
}

