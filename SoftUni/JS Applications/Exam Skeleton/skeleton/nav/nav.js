import authService from "../services/authService.js"
import { navTemplate } from "./navTemplate.js"


function getView(context, next){
   
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
      
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}