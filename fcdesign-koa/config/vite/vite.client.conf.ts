import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Path from './path-variable';

export default ({ mode }) => {
    const viteEnv = loadEnv(mode, Path.viteEnv);
    return defineConfig({
        optimizeDeps: {
            exclude: ['vue-demi'],
        },
        plugins: [
            vue(),
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
                lodash: 'lodash-es',
            },
        },
        envDir: Path.viteEnv,
        server: {
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
            outDir: Path.clientOutput,
            ssrManifest: true,
        },
    });
};
