import { HTML_FALG, PRELOAD_LINKS_FLAG, TDK_DESCRIPTION_FLAG, TDK_KEYWORD_FLAG, TDK_TITLE_FLAG } from "../config/constant";
import { SSR } from "../ssr";

export default class CommonController {
    private ssrRender: any;
    private manifest: any;
    /**
     * robots
     */
    test = async (ctx: { status: number; body: string }) => {
        ctx.status = 200;
        ctx.body = 'test';
    };

    isHome(path: string): boolean {
        if (path === '/') return true;
        return false
    }
    render = async (
        ctx: {
            status: number;
            req: { url: any };
            path: string;
            body: any;
            template: string;
            isDevelopment: boolean;
            vite: any;
            query: { __ssr: string };
        },
        next: () => void,
    ) => {
        let html = ctx.template;
        let tdk: { title: string; description: string; keywords: string } = {
            title: 'title',
            description: 'description',
            keywords: 'keywords',
        };
        try {

            if (!this.ssrRender) {
                const ssr = new SSR(ctx.isDevelopment, ctx.vite);
                this.manifest = ssr.manifest;
                this.ssrRender = await ssr.creatRender();
            }
            let template = '';
            if (ctx.isDevelopment) {
                template = await ctx.vite.transformIndexHtml(ctx.req.url, ctx.template);
            } else {
                template = ctx.template;
            }

            const { appHtml, preloadLinks } = await this.ssrRender(
                ctx.req.url,

                this.manifest,
            );

            html = template
                .replace(HTML_FALG, appHtml)
                .replace(PRELOAD_LINKS_FLAG, preloadLinks)
                .replace(TDK_TITLE_FLAG, `<title>${tdk.title}</title>`)
                .replace(
                    TDK_DESCRIPTION_FLAG,
                    `<meta name="description" content="${tdk.description}" >`,
                )
                .replace(TDK_KEYWORD_FLAG, `<meta name="keywords" content="${tdk.keywords}" >`);
            ctx.status = 200;
            ctx.body = html;

        } catch (error: any) {
            console.error('render.common.error', ctx, { stack: error.stack || 'stack' });
            console.log(error);
            next();
        }
    };

}
