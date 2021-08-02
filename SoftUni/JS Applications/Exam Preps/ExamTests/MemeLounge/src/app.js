import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';



import { logout as apiLogout } from './api/data.js'
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();


page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/details/:id', decorateContext, detailsPage);
page('/create', decorateContext, createPage);
page('/edit/:id', decorateContext, editPage);
page('/myProfile', decorateContext, profilePage);

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.querySelector('div.profile > span').textContent = `Welcome, ${email}`;
        document.querySelector('.user').style.display = "";
        document.querySelector('.guest').style.display = "none";
    } else {
        document.querySelector('.user').style.display = "none";
        document.querySelector('.guest').style.display = "";
    }
}


async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}