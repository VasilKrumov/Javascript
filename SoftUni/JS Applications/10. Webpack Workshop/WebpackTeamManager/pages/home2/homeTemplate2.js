// import { createTemplate } from "../../templateLogic/templateHelper.js";
import { html } from "lit-html";
import HomePage2Element from "./homeElement2.js";
import HomePageElement3 from "./homeElement3.js";

import teamPng from './../../assets/team.png';


export let homeTemplate2 = (model) => html`
<home2-page isLoggedIn=${model.isLoggedIn}></home2-page>
<home2-page isLoggedIn=${model.isLoggedIn}></home2-page>
<home-page3 .isLoggedIn=${model.isLoggedIn} @increment=${(e) => console.log('incremented')} .router=${model.router}></home-page3>
<home-page3 .isLoggedIn=${model.isLoggedIn} @increment=${(e) => console.log('incremented')} .router=${model.router}></home-page3>`;