import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { successBox } from './notification.js';


import { logout as apiLogout } from './api/data.js';



import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/regsiter.js';


page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);


page.start();   

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();





function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.getElementById('welcomeMsg').textContent = `Welcome, ${email}`;
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}


async function logout() {
    await apiLogout();
    await successBox('Successful logout');
    setUserNav();
    page.redirect('/login');
}