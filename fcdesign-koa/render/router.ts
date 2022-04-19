import Router from 'koa-router';
import fs from "fs";
import path from "path";
import { TDK_DESCRIPTION_FLAG, TDK_KEYWORD_FLAG, TDK_TITLE_FLAG } from './constant';
const stateInit = { "creator": false, "loginUser": true, "customSwitch": true, "modifier": false, "titleText": false, "customText": "保密信息，严禁任何形式对外传播", "siteLogo": false, "pdfExport": false, "fontSize": "20px", "wordExport": true }
const router = new Router();

const controller = async (ctx: any, next: Function) => {
    const { originalUrl: url } = ctx.req;
    const isProd = process.env.NODE_ENV === "production"
    const vite = ctx.vite
    const indexHtml = ctx.indexHtml
    const manifest = ctx.manifest
    try {
        let template, render;
        if (isProd) {
            // 生产
            template = indexHtml;
            render = require("./dist/server/entry-server.js").render;
        } else {
            // 开发
            template = fs.readFileSync(path.resolve(process.cwd(), "./index.html"), "utf-8");
            template = await vite.transformIndexHtml(url, template);
            render = (await vite.ssrLoadModule("/src/entry-server.ts")).render;
        }

        let { html, preloadLinks } = await render(url, manifest);
        // 替换标记
        html = template
            .replace(`<!-- app-preload-links -->`, preloadLinks)
            // 用于客户端标记服务器渲染
            .replace(`<!--app-html-->`, html)
            .replace(TDK_TITLE_FLAG, 'TDK_TITLE_FLAG')
            .replace(TDK_DESCRIPTION_FLAG, 'TDK_DESCRIPTION_FLAG')
            .replace(TDK_KEYWORD_FLAG, 'TDK_KEYWORD_FLAG')
        html += `<script>window.__INITIAL_STATE__=${JSON.stringify(stateInit)}</script></html>`;
        // 响应
        ctx.body = html
    } catch (e: any) {
        isProd || vite.ssrFixStacktrace(e);
        console.error(`[error]`, e.stack);
        next()
    }

}
router.get("/", controller)
router.get("/about", controller)
export {
    router
}
export default router