import { renderToString } from '@vue/server-renderer';
import createVueApp from '../main';

export const render = async () => {

    const { app } = createVueApp({});
    const context = {};
    const appHtml = await renderToString(app, context);

    return { appHtml };
};
