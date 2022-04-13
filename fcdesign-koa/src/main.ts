import { createSSRApp } from "vue";
import App from "./App.vue";
import createRouter from "./router";

export function createApp() {
    const router = createRouter();

    const app = createSSRApp(App);
    app.use(router);
    return {
        app, router
    };
}

