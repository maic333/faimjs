"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_http_method_1 = require("../types/api-http-method");
var api_registry_1 = require("../helpers/api-registry");
function ApiRoute(route, method, config) {
    if (method === void 0) { method = api_http_method_1.default.GET; }
    if (config === void 0) { config = {}; }
    return function (target, key, descriptor) {
        // register API route
        api_registry_1.default.registerRoute(route, method, config, descriptor.value);
    };
}
exports.default = ApiRoute;
