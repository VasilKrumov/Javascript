import {
    homeTemplate
} from "./homeTemplate.js";

export class HomePage {
    constructor(router, renderHandler) {
        this._router = router;
        this._renderHandler = renderHandler;
        this.getView = this._getView.bind(this);
        this.getHtml = this._getHtml.bind(this);
        this.viewModel = {};
    }

    async _getView(context, next) {
        this.viewModel = {
            isLoggedIn: context.user !== undefined
        };

        let templateResult = homeTemplate(this.viewModel);
        this._renderHandler(templateResult);
    }

    async _getHtml(context, next) {
        this.viewModel = {
            isLoggedIn: context.user !== undefined
        };

        let templateResult = homeTemplate(this.viewModel);
        return templateResult;
    }
}