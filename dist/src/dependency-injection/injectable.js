"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependency_injector_1 = require("./dependency-injector");
/**
 * Decorator used to register services to the Dependency Injection system
 */
function Injectable() {
    return function (target) {
        // register class in the DI system
        dependency_injector_1.default.resolve(target);
    };
}
exports.default = Injectable;
//# sourceMappingURL=injectable.js.map