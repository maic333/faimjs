"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_property_name_1 = require("../types/route-property-name");
var inject_route_data_1 = require("./inject-route-data");
/**
 * Decorator used to inject the request HTTP Headers in a request handler method
 */
function RouteHeaders() {
    return inject_route_data_1.default(route_property_name_1.default.HEADERS);
}
exports.default = RouteHeaders;
//# sourceMappingURL=route-headers.js.map