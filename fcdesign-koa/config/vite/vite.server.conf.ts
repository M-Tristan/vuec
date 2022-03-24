import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Path from './path-variable';

export default ({ mode }) => {
    const viteEnv = loadEnv(mode, Path.viteEnv);
    return defineConfig({
        plugins: [
            vue()
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: {
                '@': Path.root,
                '@client': Path.client,
            },
        },
        envDir: Path.viteEnv,
        server: {
            middlewareMode: true,
            proxy: {
                '/api': {
                    target: viteEnv.VITE_API_URL,
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        base: mode === 'development' ? '/' : 'https://cdn.dancf.com/focodesign-web/',
        build: {
            sourcemap: true,
            outDir: Path.resolveWithOutput('./server'),
        },
    });
};
