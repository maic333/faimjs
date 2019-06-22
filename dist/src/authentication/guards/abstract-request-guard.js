"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guard_type_1 = require("../types/guard-type");
// tslint:disable-next-line no-any
var AbstractRequestGuard = /** @class */ (function () {
    function AbstractRequestGuard() {
        this.type = guard_type_1.default.REQUEST;
    }
    AbstractRequestGuard.prototype.validateRequest = function (req) {
        return this.validate(req);
    };
    return AbstractRequestGuard;
}());
exports.default = AbstractRequestGuard;
//# sourceMappingURL=abstract-request-guard.js.map