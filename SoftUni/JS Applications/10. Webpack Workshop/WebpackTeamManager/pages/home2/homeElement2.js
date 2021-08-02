import teamImage from '/assets/team.png';
import style1 from './layout.partial.css';
import style2 from './site.partial.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
    ${style1}
    ${style2}
</style>

<section id="home">
<article class="hero layout">
    <img src="${teamImage}" class="left-col pad-med">
    <div class="pad-med tm-hero-col btn-container">
        <h2>Welcome to Team Manager!</h2>
        <p>Want to organize your peers? Create and manage a team for free.</p>
        <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
    </div>
</article>
</section>
`;


export default class HomePage2Element extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({
            mode: 'closed'
        });
        this.root.appendChild(template.content.cloneNode(true));
        
    }

    get isLoggedIn() {
        return this.getAttribute('isLoggedIn') === 'true' ? true: false;
    }

    connectedCallback(){
        console.log(this.isLoggedIn)
        let btnContainer =  this.root.querySelector('.btn-container');
        let link = document.createElement('a');
        if(this.isLoggedIn){
            link.href = '/browse-teams';
            link.className = 'action cta';
            link.textContent = 'Browse Teams';
        } else {
            link.href = '/register';
            link.className = 'action cta';
            link.textContent = 'Sign Up Now';
        }

        btnContainer.appendChild(link);
    }

}

customElements.define('home2-page', HomePage2Element);