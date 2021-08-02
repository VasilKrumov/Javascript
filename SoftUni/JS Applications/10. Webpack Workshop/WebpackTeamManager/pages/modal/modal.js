import { modalTemplate } from "./modalTemplate.js";

let _router = undefined;
let _renderHandler = undefined;

function initialize(router, renderHandler) {
    _router = router;
    _renderHandler = renderHandler;
}

async function createModal(message) {
    let model = {
        message,
    }

    let promise = new Promise((resolve, reject) => {
        model.handler = (val) => {
            _renderHandler(null);
            resolve(val);
        }
    });

    let templateResult = modalTemplate(model);
    _renderHandler(templateResult);

    return promise;
}

export default {
    createModal,
    initialize
}