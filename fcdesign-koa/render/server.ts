import fs from "fs";
import path from "path";
import Koa from 'koa';
import Connect from 'koa-connect';
import bodyParser from 'koa-bodyparser';
import router from './router'
import createViteServer from './vite-server'

require('dotenv-safe').config({
    example: path.resolve(process.cwd(), '.env')
});

const resolve = (p: string) => path.resolve(__dirname, p);
async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === "production") {
    const app = new Koa();
    app.use(bodyParser());
    let vite;
    if (isProd) {
        // 生产环境
        app.use(require("compression")());
        app.use(
            require("serve-static")(resolve("dist/client"), {
                index: false,
            })
        );
    } else {
        // 开发
        let { createServer: _createServer } = require("vite");
        vite = await createViteServer()
        app.context.vite = vite;
        app.use(Connect(vite.middlewares));
    }

    // 模版
    const indexHtml = isProd ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8") : "";
    // 映射文件
    const manifest = isProd ? require("./dist/client/ssr-manifest.json") : {};
    app.context.indexHtml = indexHtml;
    app.context.manifest = manifest;

    app.use(router.routes());

    return { app };
}

// 创建服务
createServer().then(({ app }) => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("[server] http://localhost:" + process.env.SERVER_PORT);
    });
});

