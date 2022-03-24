import path from 'path';

export default class Paths {
    public static readonly resolveWithRoot = (str: string) => path.resolve(Paths.root, str);
    public static readonly resolveWithClient = (str: string) => path.resolve(Paths.client, str);
    public static readonly resolveWithRender = (str: string) => path.resolve(Paths.render, str);
    public static readonly resolveWithConfig = (str: string) => path.resolve(Paths.config, str);
    public static readonly resolveWithOutput = (str: string) => path.resolve(Paths.output, str);

    public static readonly root = process.cwd();
    public static readonly pkg = Paths.resolveWithRoot('./package.json');
    public static readonly docs = Paths.resolveWithRoot('./docs');
    public static readonly public = Paths.resolveWithRoot('./public');
    public static readonly scripts = Paths.resolveWithRoot('./scripts');
    public static readonly render = Paths.resolveWithRoot('./render');
    public static readonly client = Paths.resolveWithRoot('./client');

    public static readonly config = Paths.resolveWithRoot('./config');
    public static readonly viteEnv = Paths.resolveWithConfig('./vite/env');

    public static readonly output = Paths.resolveWithRoot('./dist');

    public static readonly clientOutput = Paths.resolveWithOutput('./client');
    public static readonly renderOutput = Paths.resolveWithOutput('./render');
}
