import { render } from '../../node_modules/lit-html/lit-html.js';

import { renderNavigation } from '../views/navigationView.js';

let navigationElement = document.querySelector('.navigation');

export function navigationMiddleware(ctx, next) {
    render(renderNavigation(ctx), navigationElement);

    next();
}