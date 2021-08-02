import modal from "../modal/modal.js";
import { teamDetailsTemplate } from "./teamDetailsTemplate.js";

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

async function joinHandler(teamId){

    let membership = {
        teamId
    };

    let result = await _membersService.create(membership);
    _router.redirect(`/details/${teamId}`)
}

async function approveHandler(membershipId, teamId){

    let membership = {
        status:'member'
    };

    let result = await _membersService.update(membership, membershipId);
    _router.redirect(`/details/${teamId}`)
}

async function leaveHandler(membershipId, teamId){
    let modalResult = await modal.createModal('Are you sure you want to leave?');
    console.log(modalResult);

    if(modalResult) {
        let result = await _membersService.deleteItem(membershipId)
        _router.redirect(`/details/${teamId}`)
    }
}

async function getView(context, next) {
    let teamId = context.params.teamId;
    let teamPromise = _teamsService.get(teamId);
    let allMembershipsPromise = _membersService.getMembershipsForTeamWithUser(teamId);

    let [team, allMemberships] = await Promise.all([teamPromise, allMembershipsPromise]);
    console.log(team);
    console.log(allMemberships);

    let status = undefined;
    let user = context.user;
    let membershipId = undefined;
    if(user._id === team._ownerId) {
        status = 'owner';
    } else {
        let userMembership = allMemberships.find(x => x._ownerId === user._id);
        if(userMembership === undefined){
            status = 'nonMember';
        } else if(userMembership.status === 'pending'){
            membershipId = userMembership._id;
            status = 'pending'
        } else if(userMembership.status === 'member'){
            status = 'member';
            membershipId = userMembership._id;
        }
    }


    let members = allMemberships.filter(x => x.status ==='member');
    let pendingMemberships = allMemberships.filter(x => x.status === 'pending');

    team.userStatus = status;
    team.members = members;
    team.pendingMembers = pendingMemberships;
    team.userMembershipId = membershipId;
    team.joinHandler = joinHandler;
    team.approveHandler =approveHandler;
    team.leaveHandler = leaveHandler;

    let templateResult = teamDetailsTemplate(team);
    _renderHandler(templateResult);
}

export default {
    getView,
    initialize
}