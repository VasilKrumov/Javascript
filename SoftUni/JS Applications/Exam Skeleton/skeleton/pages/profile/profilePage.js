import authService from "../../services/authService.js";
import itemService from "../../services/itemService.js";
import { myFurnitureTemplate } from "./profileTemplate.js";

async function getView(context) {
  let userId = authService.getUserId();
  let myItems = await itemService.getMyFurniture(userId);
  let templateResult = myFurnitureTemplate(myItems);
  context.renderView(templateResult);
}

export default {
  getView,
};
