import itemService from "../../services/itemService.js";
import { dashboardTemplate } from "./dashboardTemplates.js";

async function getView(context) {
  let allFurniture = await itemService.getAll();
  let templateResult = dashboardTemplate(allFurniture);
  context.renderView(templateResult);
}

export default {
  getView,
};
