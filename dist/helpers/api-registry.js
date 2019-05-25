"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        handlers.push(handler);
        // @ts-ignore
        this.app.route(apiRoute)[httpMethod](handlers);
    };
    return ApiRegistry;
}());
exports.default = new ApiRegistry();
