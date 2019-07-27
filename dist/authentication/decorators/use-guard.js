"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_handler_metadata_1 = require("../../core/http/types/route-handler-metadata");
/**
 * Decorator used to register a Guard on a request
 */
function UseGuard(guardClass) {
    /* tslint:disable-next-line no-any */
    return function (target, key, descriptor) {
        var routeHandler = descriptor.value;
        routeHandler[route_handler_metadata_1.default.GUARDS] = routeHandler[route_handler_metadata_1.default.GUARDS] || [];
        // add guard on route handler
        routeHandler[route_handler_metadata_1.default.GUARDS].push(guardClass);
    };
}
exports.default = UseGuard;
//# sourceMappingURL=use-guard.js.map