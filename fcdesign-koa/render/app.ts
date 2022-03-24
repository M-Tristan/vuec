import Koa from 'koa';
import path from 'path';
import staticPath from 'koa-static';
import { ViteDevServer } from 'vite';
import fs from 'fs';
import createViteServer from './vite-server';
import { router } from './router';

async function createServer() {
    const CWD = process.cwd();
    const app = new Koa();
    app.context.isDevelopment = !!process.env.IS_DEVELOPMENT;

    if (process.env.PREVIEW) {

        app.use(staticPath(path.resolve(CWD, './dist/client'), { index: false }));
    } else {
        app.use(staticPath(path.resolve(CWD, './public'), { index: false }));
    }

    if (app.context.isDevelopment) {
        app.context.template = fs.readFileSync(
            path.resolve(process.cwd(), './index.html'),
            'utf-8',
        );
        const vite: ViteDevServer = await createViteServer({
            root: path.resolve(CWD, './'),
            configFile: path.resolve(CWD, './config/vite/vite.server.conf.ts'),
        });

        app.context.vite = vite;
    } else {
        app.context.template = fs.readFileSync(
            path.resolve(process.cwd(), './dist/client/index.html'),
            'utf-8',
        );
    }
    app.use(router.routes());

    return { app };
}

createServer().then(({ app }) => {
    app.listen(process.env.SERVER_PORT, () => {
        if (process.send) process.send('ready');
        const message = `Server Start! host: http://localhost:${process.env.SERVER_PORT}`;
        console.log(`\x1B[36m${message}\x1B[0m`);
    });
});
