import { furnitureTemplate } from '../shared/templates.js';
import { html } from 'lit-html';


export let myFurnitureTemplate = (allItems) => html`
   
        ${allItems.map(f => furnitureTemplate(f))}
    </div>`;