import { browseTeamsTemplate } from "./browseTeamsTemplate.js";


let _router = undefined;
let _renderHandler = undefined;
let _teamsService = undefined;
let _membersService = undefined;

function initialize(router, renderHandler, teamsService, membersService) {
    _router = router;
    _renderHandler = renderHandler;
    _teamsService = teamsService;
    _membersService = membersService;
}

async function searchHandler(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let searchText = formData.get('search');

    _router.redirect(`/browse-teams?search=${searchText}`);
}

async function getView(context, next) {
    let query = context.querystring.split('=');

    console.log(query);
    let teams = [];
    if(query.length > 1) {
        teams = await _teamsService.getLikeName(query[1]);
    } else {
        teams = await _teamsService.getAll();
    }

    
    let allMembers = await _membersService.getMembers();

    teams.forEach(t => t.membersCount = allMembers.filter(m => m.teamId === t._id).length);


    let viewModel = {
        teams,
        searchHandler
    };
    let templateResult = browseTeamsTemplate(viewModel);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}