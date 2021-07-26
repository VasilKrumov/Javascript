import { html, render } from '../node_modules/lit-html/lit-html.js'

const lisTemplate = (data) =>
    html`<ul>
        ${data.map((t) => html`<li>${t}</li>`)}
    </ul>`
document.getElementById('btnLoadTowns').addEventListener('click', updateList)
function updateList(event) {
    event.preventDefault()
    const root = document.getElementById('root')
    const townsAsString = document.getElementById('towns').value
    const towns = townsAsString.split(', ').map((x) => x.trim())
    const result = lisTemplate(towns)
    render(result, root)
}
