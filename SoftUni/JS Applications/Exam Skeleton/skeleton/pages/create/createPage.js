import itemService from "../../services/itemService.js";
import { createTemplate } from "./createTemplate.js";

let form = undefined;
async function submitHandler(context, e) {
  e.preventDefault();
  let formData = new FormData(e.target)

  let createResult = await itemService.create(newFurniture);
  context.page.redirect("/dashboard");
}

async function getView(context) {
  let boundSubmitHandler = submitHandler.bind(null, context);
  form = {
    submitHandler: boundSubmitHandler,
  };
  let templateResult = createTemplate(form);
  context.renderView(templateResult);
}

export default {
  getView,
};
