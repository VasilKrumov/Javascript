import { html } from "./../node_modules/lit-html/lit-html.js";

export function createTemplate(templateString) {
    return (viewModel) => html`${templateString}`;
}