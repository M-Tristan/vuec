
import fs from "fs";
import path from "path";
import express from "express";


const resolve = (p: string) => path.resolve(__dirname, p)
const port = 3050
const CWD = process.cwd();
require('dotenv-safe').config({
    allowEmptyValues: true,
    example: path.resolve(CWD, './.env')
});

async function createServer(root = CWD, isProd = process.env.NODE_ENV === "production") {
    const app = express();
    let vite: any;
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
        vite = await _createServer({
            root,
            configFile: path.resolve(CWD, './config/vite.server.config.ts'),
        });
        app.use(vite.middlewares);
    }

    // 模版
    const indexHtml = isProd ? fs.readFileSync(resolve("dist/client/index.html"), "utf-8") : "";
    // 映射文件
    const manifest = isProd ? require("../dist/client/ssr-manifest.json") : {};

    app.use("*", async (req, res) => {
        const { originalUrl: url } = req;
        console.log(`[server] ${new Date()} - ${url}`);
        try {
            let template, render;
            if (isProd) {
                // 生产
                template = indexHtml;
            } else {
                // 开发
                template = fs.readFileSync(path.resolve(CWD, "./index.html"), "utf-8");
                template = await vite.transformIndexHtml(url, template);
            }
            render = await createRender(vite)
            let { html, preloadLinks } = await render(url, manifest);
            // 替换标记
            html = template
                .replace(`<!-- app-preload-links -->`, preloadLinks)
                // 用于客户端标记服务器渲染
                .replace(`<!--app-html-->`, html);
            // 响应
            res.status(200).set({ "Content-Type": "text/html" }).end(html);
        } catch (e: any) {
            isProd || vite.ssrFixStacktrace(e);
            console.error(`[error]`, e.stack);
            res.status(500).end(e.stack);
        }
    });

    return { app };
}
const createRender = async (vite: any) => {
    const isProd = process.env.NODE_ENV
    let render: any
    if (isProd) {
        render = require("../dist/server/entry-server.js").render;
    } else {
        render = (await vite.ssrLoadModule(path.resolve(CWD, "/src/entrys/entry-server.ts"))).render;
    }
    return render
}
// 创建服务
createServer().then(({ app }) => {
    console.log(process.env)
    app.listen(port, () => {
        console.log(`[server] http://localhost:${port}`);
    });
});

