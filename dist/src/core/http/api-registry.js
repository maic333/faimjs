"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_property_name_1 = require("./types/route-property-name");
var controller_metadata_1 = require("./types/controller-metadata");
var enhance_response_1 = require("./middleware/enhance-response");
/**
 * Service used to register API requests
 */
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
        // create and sanitize the api route path
        var apiRoute = ("/" + this.app.config.apiPrefix + "/" + route)
            .replace(/(^\/+)/, '/')
            .replace(/(\/+$)/, '');
        // prepare handlers
        var handlers = [];
        // register middleware
        handlers.push(enhance_response_1.default);
        // #TODO add other core middleware (request validation, authentication)
        // call the request handler from controller
        handlers.push(this.getRouteHandler(handler));
        // @ts-ignore
        this.app.route(apiRoute)[httpMethod](handlers);
    };
    /**
     * Create the API request handler, injecting the necessary properties
     */
    /* tslint:disable-next-line no-any */
    ApiRegistry.prototype.getRouteHandler = function (func) {
        return function (req, res, next) {
            // get the route data that need to be injected
            var injectPropsKeys = func[controller_metadata_1.default.INJECT_ROUTE_DATA] || [];
            // get the data to be injected
            var injectedProps = injectPropsKeys.map(function (propKey) {
                switch (propKey) {
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
            return func.apply(void 0, injectedProps);
        };
    };
    return ApiRegistry;
}());
exports.default = new ApiRegistry();
//# sourceMappingURL=api-registry.js.map