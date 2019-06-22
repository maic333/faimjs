"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guard_type_1 = require("../types/guard-type");
// tslint:disable-next-line no-any
var AbstractBearerGuard = /** @class */ (function () {
    function AbstractBearerGuard() {
        this.type = guard_type_1.default.BEARER;
    }
    AbstractBearerGuard.prototype.validateRequest = function (req) {
        // get token from headers
        var authorizationHeader = req.header('Authorization') || '';
        var token = authorizationHeader.split('Bearer ')[1];
        if (!token) {
            throw new Error('Authorization token is missing');
        }
        return this.validate(token);
    };
    return AbstractBearerGuard;
}());
exports.default = AbstractBearerGuard;
//# sourceMappingURL=abstract-bearer-guard.js.map