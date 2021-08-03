import { html } from './../../node_modules/lit-html/lit-html.js';

export let detailsTemplate = (furniture, deleteHandler, isOwner) => html`


   
`;



















// ${isOwner
//     ? html`
//     <div>
//         <a href="/edit/${furniture._id}" class="btn btn-info">Edit</a>
//         <a href="javascript:void(0);" @click=${deleteHandler} class="btn btn-red">Delete</a>
//     </div>`
//     : ''}