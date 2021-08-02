import { homeTemplate2 } from "./homeTemplate2.js";

export class HomePage2 {
    constructor(router, renderHandler) {
        this._router = router;
        this._renderHandler = renderHandler;
        this.getView = this._getView.bind(this);
        this.viewModel = {};
    }

    async _getView(context, next) {
        this.viewModel = {
            isLoggedIn: context.user !== undefined,
            router: this._router
        };

        let templateResult = homeTemplate2(this.viewModel);
        this._renderHandler(templateResult);
    }

}