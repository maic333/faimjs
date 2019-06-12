"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_http_method_1 = require("../types/api-http-method");
var api_registry_1 = require("../api-registry");
var dependency_injector_1 = require("../../dependency-injection/dependency-injector");
var route_handler_metadata_1 = require("../types/route-handler-metadata");
/**
 * Decorator used to define an API endpoint
 */
function ApiRoute(route, method, config) {
    if (method === void 0) { method = api_http_method_1.default.GET; }
    if (config === void 0) { config = {}; }
    /* tslint:disable-next-line no-any */
    return function (target, key, descriptor) {
        // lazy load the route in ApiController decorator (because we don't have the controller instantiated, yet)
        target.constructor._loadRoutes = target.constructor._loadRoutes || [];
        target.constructor._loadRoutes.push(function () {
            // get the controller instance
            var ctrlInstance = dependency_injector_1.default.get(target.constructor);
            // set proper context to route handler method
            var routeHandler = descriptor.value.bind(ctrlInstance);
            // preserve injected properties
            routeHandler[route_handler_metadata_1.default.INJECT_ROUTE_DATA] = descriptor.value[route_handler_metadata_1.default.INJECT_ROUTE_DATA];
            // register API route
            api_registry_1.default.registerRoute(route, method, config, routeHandler);
        });
    };
}
exports.default = ApiRoute;
//# sourceMappingURL=api-route.js.map