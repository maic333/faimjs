"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enhanceRequest(req, res, next) {
    // initialize session
    req.session = {};
    next();
}
exports.default = enhanceRequest;
//# sourceMappingURL=enhance-request.js.map