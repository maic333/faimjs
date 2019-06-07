"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokens that can be injected in a request handler method using decorators
 */
var RoutePropertyName;
(function (RoutePropertyName) {
    RoutePropertyName["REQUEST"] = "request";
    RoutePropertyName["RESPONSE"] = "response";
    RoutePropertyName["NEXT"] = "next";
    RoutePropertyName["HEADERS"] = "headers";
})(RoutePropertyName || (RoutePropertyName = {}));
exports.default = RoutePropertyName;
//# sourceMappingURL=route-property-name.js.map