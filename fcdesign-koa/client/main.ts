import { createSSRApp } from 'vue';
import App from './app.vue';

const createVueApp = ({ } = {}) => {
    const app = createSSRApp(App);

    return {
        app,
    };
};

export default createVueApp;
