import { furnitureTemplate } from '../shared/templates.js';
import { html } from './../../node_modules/lit-html/lit-html.js';



export let dashboardTemplate = (allItems) => html`

    ${allItems.map(f => furnitureTemplate(f))}
</div>`;