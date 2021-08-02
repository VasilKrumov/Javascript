import page from "./node_modules/page/page.mjs";
import browseTeamsPage from "./pages/browseTeams/browseTeamsPage.js";
import { HomePage } from "./pages/home/homePage.js";
import { HomePage2 } from "./pages/home2/homePage.js";
import loginPage from "./pages/login/loginPage.js";
import modal from "./pages/modal/modal.js";
import nav from "./pages/nav/nav.js";
import registerPage from "./pages/register/registerPage.js";
import teamDetailsPage from "./pages/teamDetails/teamDetailsPage.js";
import { LitRenderer } from "./rendering/litRenderer.js";
import authService from "./services/authService.js";
import membersService from "./services/membersService.js";
import teamsService from "./services/teamsService.js";

import layoutCss from './static/layout.css';
import modalCss from './static/modal.css';
import siteCss from './static/site.css';

let appElement = document.getElementById('app');
let navElement = document.getElementById('titlebar');
let modalElement = document.getElementById('modal');

let litRenderer = new LitRenderer();

let navRenderHandler = litRenderer.createRenderHandler(navElement);
let appRenderHandler = litRenderer.createRenderHandler(appElement);
let modalRenderHandler = litRenderer.createRenderHandler(modalElement);

nav.initialize(page, navRenderHandler, authService);
// homePage.initialize(page, appRenderHandler);
loginPage.initialize(page, appRenderHandler, authService);
registerPage.initialize(page, appRenderHandler, authService);
browseTeamsPage.initialize(page, appRenderHandler, teamsService, membersService);
teamDetailsPage.initialize(page, appRenderHandler, teamsService, membersService);

modal.initialize(page, modalRenderHandler);

let homePage = new HomePage(page, appRenderHandler);
let homePage2 = new HomePage2(page, appRenderHandler);

page(decorateUser);
page(nav.getView);

page('/', '/home');
page('/index.html', '/home');

//routes
// page('/home', homePage.getView);
page('/home', homePage.getView);
page('/home2', homePage2.getView);
page('/login', loginPage.getView);
page('/register', registerPage.getView);
page('/browse-teams', browseTeamsPage.getView);
page('/details/:teamId', teamDetailsPage.getView);

page.start();


function decorateUser(context, next){
    let user = authService.getUser();
    context.user = user;
    next();
}
