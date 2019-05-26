"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_property_name_1 = require("../types/route-property-name");
function RouteRequest() {
    /* tslint:disable-next-line no-any */
    return function (target, key, parameterIndex) {
        // get currently injected properties
        var injectProps = target[key]._injectProps || [];
        // inject the Response on current index
        injectProps[parameterIndex] = route_property_name_1.default.REQUEST;
        // update injected properties
        target[key]._injectProps = injectProps;
    };
}
exports.default = RouteRequest;
//# sourceMappingURL=route-request.js.map