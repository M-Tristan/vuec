
import { createApp } from "./main"
import { renderToString } from "@vue/server-renderer"

export async function render(url: string, manifest: any) {
    const { app } = createApp();

    const ctx = {} as any;
    const html = await renderToString(app, ctx);

    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);

    return { html, preloadLinks }
}


function renderPreloadLinks(modules: any, manifest: any) {
    let links = "";
    const seen = new Set();
    modules.forEach((id: any) => {
        const files = manifest[id];
        if (files) {
            files.forEach((file: any) => {
                if (!seen.has(file)) {
                    seen.add(file);
                    links += renderPreloadLink(file);
                }
            });
        }
    });
    return links;
}

function renderPreloadLink(file: any) {
    if (file.endsWith(".js")) {
        return `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith(".css")) {
        return `<link rel="stylesheet" href="${file}">`;
    } else {
        // TODO
        return "";
    }
}
