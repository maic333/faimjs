"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_property_name_1 = require("../types/route-property-name");
var ApiRegistry = /** @class */ (function () {
    function ApiRegistry() {
    }
    /**
     * Initialize service
     */
    ApiRegistry.prototype.init = function (app) {
        this.app = app;
    };
    /**
     * Register a new route
     */
    ApiRegistry.prototype.registerRoute = function (route, httpMethod, config, handler) {
        // #TODO set api prefix in config
        var apiRoute = "/api/" + route;
        // prepare handlers
        var handlers = [];
        // #TODO add other core handlers (request validation, authentication)
        // call the request handler from controller
        handlers.push(this.getRouteHandler(handler));
        // @ts-ignore
        this.app.route(apiRoute)[httpMethod](handlers);
    };
    /**
     * Create the API request handler, injecting the necessary properties
     */
    // #TODO fix any
    // @ts-ignore
    ApiRegistry.prototype.getRouteHandler = function (func) {
        return function (req, res, next) {
            // get the properties that need to be injected
            var injectPropsNames = func._injectProps || [];
            // get the properties to be injected
            var injectedProps = injectPropsNames.map(function (propName) {
                switch (propName) {
                    case route_property_name_1.default.REQUEST:
                        return req;
                    case route_property_name_1.default.RESPONSE:
                        return res;
                    case route_property_name_1.default.NEXT:
                        return next;
                    case route_property_name_1.default.HEADERS:
                        return req.headers;
                }
                // wrongly injected property
                return;
            });
            // call the request handler with the injected properties
            // #TODO pass controller context instead of null
            return func.apply(void 0, injectedProps);
        };
    };
    return ApiRegistry;
}());
exports.default = new ApiRegistry();
//# sourceMappingURL=api-registry.js.map