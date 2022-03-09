
import fs from "fs";
import path from "path";
import express from "express";
const resolve = (p: string) => path.resolve(__dirname, p)
const port = 3050
const CWD = process.cwd();
async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === "production") {
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
            server: {
                middlewareMode: true,
                watch: {
                    usePolling: true,
                    interval: 100,
                },
            },
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
                render = require("../dist/server/entry-server.js").render;
            } else {
                // 开发
                template = fs.readFileSync(path.resolve(CWD, "./index.html"), "utf-8");
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
            }

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

// 创建服务
createServer().then(({ app }) => {
    app.listen(port, () => {
        console.log(`[server] http://localhost:${port}`);
    });
});
