/**
 * @param {import('vite').InlineConfig} config
 * @returns {import('vite').ViteDevServer}
 */
export default async function createViteServer(config = {}) {
    const vite = await require('vite').createServer({
        root: process.cwd(),
        logLevel: 'info',
        server: {
            middlewareMode: 'ssr',
            watch: {
                // During tests we edit the files too fast and sometimes chokidar
                // misses change events, so enforce polling for consistency
                usePolling: true,
                interval: 100,
            },
            fs: {
                strict: true,
            },
        },
        ...config,
    });
    return vite;
}
