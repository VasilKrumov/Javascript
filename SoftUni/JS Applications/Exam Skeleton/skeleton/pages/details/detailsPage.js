import authService from "../../services/authService.js";
import itemService from "../../services/itemService.js";
import { detailsTemplate } from "./detailsTemplate.js";

async function deleteHandler(context, id, e) {
  let confirmed = confirm("Are you sure you want to delete this?");
  if (confirmed) {
    let deleteResult = await itemService.deleteItem(id);
    context.page.redirect("/dashboard");
  }
}

async function getView(context) {
  let id = context.params.id;
  let boundDeleteHandler = deleteHandler.bind(null, context, id);
  let item = await itemService.get(id);
  let isOwner = authService.getUserId() === item._ownerId;

  let templateResult = detailsTemplate(furniture, boundDeleteHandler, isOwner);
  context.renderView(templateResult);
}

export default {
  getView,
};
