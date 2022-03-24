import path from 'path';

export class SSR {
    private isDevelopment = false;
    private vite: any;
    public manifest: any;
    constructor(isDevelopment: boolean, vite: any) {
        this.isDevelopment = isDevelopment;
        this.vite = vite;
        this.manifest = isDevelopment
            ? {}
            : require(path.resolve(process.cwd(), './dist/client/ssr-manifest.json'));
    }

    async creatRender() {
        let ssrRender: any;
        if (this.isDevelopment) {
            let { render } = await this.vite.ssrLoadModule(
                path.resolve(process.cwd(), './client/entrys/server.entry.ts'),
            );
            ssrRender = render;
            render = '';
        } else {
            ssrRender = require(path.resolve(
                process.cwd(),
                './dist/server/server.entry.js',
            )).render;
        }
        return ssrRender;
    }
}
