"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokens that can be injected in a request handler method using decorators
 */
var RoutePropertyName;
(function (RoutePropertyName) {
    RoutePropertyName["REQUEST"] = "REQUEST";
    RoutePropertyName["RESPONSE"] = "RESPONSE";
    RoutePropertyName["NEXT"] = "NEXT";
    RoutePropertyName["HEADERS"] = "HEADERS";
    RoutePropertyName["AUTH_USER"] = "AUTH_USER";
})(RoutePropertyName || (RoutePropertyName = {}));
exports.default = RoutePropertyName;
//# sourceMappingURL=route-property-name.js.map