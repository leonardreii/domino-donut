"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const token_service_1 = require("./services/token.service");
const city_controller_1 = require("./controller/other/city.controller");
function Routing(router) {
    const tokenService = new token_service_1.Token();
    const otherCtrl = new city_controller_1.OtherController();
    router.get('/other/citylist', otherCtrl.getCityList);
}
exports.Routing = Routing;
//# sourceMappingURL=route.js.map