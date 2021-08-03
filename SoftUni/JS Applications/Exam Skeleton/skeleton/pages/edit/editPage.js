import itemService from "../../services/itemService.js";
import { editTemplate } from "./editTemplate.js";

let form = undefined;
async function submitHandler(context, id, e) {
  e.preventDefault();
  let formData = new FormData(e.target);

  let updateResult = await itemService.update(furniture, id);
  context.page.redirect("/dashboard");
}

async function getView(context) {
  let id = context.params.id;
  let item = await itemService.get(id);

  let boundSubmitHandler = submitHandler.bind(null, context, id);
  form = {
    submitHandler: boundSubmitHandler
   
  };
  let templateResult = editTemplate(form);
  context.renderView(templateResult);
}

export default {
  getView,
};
