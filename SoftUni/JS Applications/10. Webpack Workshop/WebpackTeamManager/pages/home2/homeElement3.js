import {
    LitElement,
    html
} from "lit-element";
import teamImage from '/assets/team.png';
import style1 from './layout.partial.css';
import style2 from './site.partial.css';



export default class HomePageElement3 extends LitElement {
    static get properties() {
        return {
            isLoggedIn: {
                type: Boolean
            },
            router: {
                type: Object
            }
        }
    }

    constructor() {
        super();
        // console.log(style1);
        this.clickedTimes = 0;

    }

    _onClick(){
        this.clickedTimes++;
        console.log(this.router);
        console.log('called click');
        this.dispatchEvent(new CustomEvent('increment'));
        this.router.redirect('/browse-teams')
    }

    render() {
        return html `
        <style>
            ${style1}
            ${style2}
        </style>

        <section>
            <article class="hero layout">
                <img src="${teamImage}" class="left-col pad-med">
                <div class="pad-med tm-hero-col">
                    <h2>Welcome to Team Manager!</h2>
                    <p>Want to organize your peers? Create and manage a team for free.</p>
                    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                    ${this.isLoggedIn
                        ? html`<a href="/browse-teams" class="action cta">Browse Teams</a>`
                        : html`<a href="/register" class="action cta">Sign Up Now</a>`}
                    <p @click=${this._onClick}>${this.isLoggedIn}</p>
                </div>
            </article>
        </section>
        `;
    }

}

customElements.define('home-page3', HomePageElement3);