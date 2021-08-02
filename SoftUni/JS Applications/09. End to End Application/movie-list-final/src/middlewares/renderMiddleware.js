import { render } from '../../node_modules/lit-html/lit-html.js';

let rootElement = document.querySelector('.root');

const contextRender = templateResult => {
    render(templateResult, rootElement);
};

export function renderMiddleware(ctx, next) {
    ctx.render = contextRender;

    next();
}