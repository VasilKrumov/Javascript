// import { html } from "./../../node_modules/lit-html/lit-html.js";
import { html } from "lit-html";

const images = {};

function importAll(r) {
    return r.keys().forEach((key) => {
        console.log(key)
        let imageName = key.substring(key.lastIndexOf('/'));
        images[imageName] = r(key);
    }); 
  }
  
importAll(require.context('/assets/', false, /\.(png|jpe?g|svg)$/));

export let browseTeamsTemplate = (model) => html`
<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>

    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>

    <form @submit=${model.searchHandler}>
        <input style="padding:10px; margin-left:60px; border: 2px solid black;" name="search">
        <button style="padding:10px; border: 1px solid black;">Search</button>
    </form>
    ${model.teams.map(t => teamTemplate(t))}
</section>`;

let teamTemplate = (team) => {
    console.log(team.logoUrl);
    let imageName = team.logoUrl.substring(team.logoUrl.lastIndexOf('/'));
    let image = images[imageName];
    return html`
<article class="layout">
    <img src="${image}" class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.membersCount} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`
};