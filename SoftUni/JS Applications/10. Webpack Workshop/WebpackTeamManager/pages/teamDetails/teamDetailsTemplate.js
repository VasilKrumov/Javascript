import { html } from "./../../node_modules/lit-html/lit-html.js";

const images = {};

function importAll(r) {
    return r.keys().forEach((key) => {
        console.log(key)
        let imageName = key.substring(key.lastIndexOf('/'));
        images[imageName] = r(key);
    }); 
  }
  
importAll(require.context('/assets/', false, /\.(png|jpe?g|svg)$/));


export let teamDetailsTemplate = (team) => {
    console.log(team.logoUrl);
    let imageName = team.logoUrl.substring(team.logoUrl.lastIndexOf('/'));
    let image = images[imageName];
    return html`
<section id="team-home">
    <article class="layout">
        <img src="${image}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members.length} Members</span>
            <div>
                ${team.userStatus === 'owner' ? html`<a href="/edit/${team._id}" class="action">Edit team</a>` : ''}
                ${team.userStatus === 'nonMember' ? html`<a href="javascript:void(0)" @click=${(e) => team.joinHandler(team._id, e)} class="action">Join team</a>` :
                ''}
                ${team.userStatus === 'member' ? html`<a href="javascript:void(0)" @click=${(e) => team.leaveHandler(team.userMembershipId, team._id, e)} class="action invert">Leave
                    team</a>` : ''}
                ${team.userStatus === 'pending' ? html`Membership pending. <a @click=${(e) => team.leaveHandler(team.userMembershipId, team._id, e)} href="javascript:void(0)">Cancel
                    request</a>` : ''}
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${team.members.map(m => memberTemplate(m, team.userStatus, team.leaveHandler, team))}
            </ul>
        </div>
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${team.pendingMembers.map(p => pendingMembers(p, team.userStatus, team.approveHandler, team.leaveHandler, team))}
            </ul>
        </div>
    </article>
</section>`
};

let memberTemplate = (member, status, leaveHandler, team) => html`
<li>
    ${member.user.username}
    ${status === 'owner' ? html`<a href="javascript:void(0)" @click=${(e) => leaveHandler(member._id, team._id, e)} class="tm-control action">Remove from team</a>` : ''}
</li>`

let pendingMembers = (pending, status, approveHandler, leaveHandler, team) => html`
<li>
    ${pending.user.username}
    ${status === 'owner' ? html`<a href="javascript:void(0)" @click=${(e) => approveHandler(pending._id, team._id, e)}  class="tm-control action">Approve</a>` : ''}
    ${status === 'owner' ? html`<a href="javascript:void(0)" @click=${(e) => leaveHandler(pending._id, team._id, e)} class="tm-control action">Decline</a>` : ''}
</li>`