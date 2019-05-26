"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency_injector_1 = require("../dependency-injection/dependency-injector");
function ApiController() {
    return function (target) {
        // register class in the DI system
        dependency_injector_1.default.resolve(target);
        // load API endpoints registered by the method decorators
        /* tslint:disable-next-line no-any */
        (target._loadRoutes || []).forEach(function (loadRouteFunc) {
            loadRouteFunc();
        });
    };
}
exports.default = ApiController;
//# sourceMappingURL=api-controller.js.map