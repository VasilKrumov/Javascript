import { html } from '../../node_modules/lit-html/lit-html.js';

import * as authService from '../services/authService.js';

const showUserInfo = (email) => html`
    <span>Welcome ${email}</span>
`;

const guestButtons = () => html`
    <a class="nav-link" href="/login">Login</a>
    <a class="nav-link" href="/register">Register</a>
`;

const privateButtons = (onLogout) => html`
    <a class="nav-link" href="/my-movies">My Movies</a>
    <a class="nav-link" href="/movies/add">Add Movie</a>
    <a class="nav-link" @click=${onLogout} href="#">Logout</a>
`;

const navigationTemplate = (isAuthenticated, email, onLogout) => html`
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">MovieDB</a>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/movies">Movies</a>
                        ${isAuthenticated 
                            ? privateButtons(onLogout)
                            : guestButtons()
                        }
                    </div>
                </div>
                ${isAuthenticated && showUserInfo(email)}
            </div>
        </nav>
`;

export function renderNavigation(ctx) {
    const onLogout = (e) => {
        e.preventDefault();
        
        authService.logout()
            .then(() => {
                ctx.page.redirect('/');
            });
    } 

    return navigationTemplate(ctx.isAuthenticated, ctx.email, onLogout);
}