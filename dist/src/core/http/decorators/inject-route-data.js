"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_metadata_1 = require("../types/controller-metadata");
/**
 * Decorator used to inject route data in a request handler method
 */
function InjectRouteData(token) {
    /* tslint:disable-next-line no-any */
    return function (target, key, parameterIndex) {
        // get currently injected properties
        var injectProps = target[key][controller_metadata_1.default.INJECT_ROUTE_DATA] || [];
        // inject the Headers on current index
        injectProps[parameterIndex] = token;
        // update injected properties
        target[key][controller_metadata_1.default.INJECT_ROUTE_DATA] = injectProps;
    };
}
exports.default = InjectRouteData;
//# sourceMappingURL=inject-route-data.js.map