"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var route_property_name_1 = require("./types/route-property-name");
var route_handler_metadata_1 = require("./types/route-handler-metadata");
var enhance_response_1 = require("./middleware/enhance-response");
var enhance_request_1 = require("./middleware/enhance-request");
var dependency_injector_1 = require("../dependency-injection/dependency-injector");
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
        handlers.push(enhance_request_1.default);
        // register guards
        handlers.push.apply(handlers, this.getRouteGuards(handler));
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
            var injectPropsKeys = func[route_handler_metadata_1.default.INJECT_ROUTE_DATA] || [];
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
    /**
     * Create the API request guards list
     */
    /* tslint:disable-next-line no-any */
    ApiRegistry.prototype.getRouteGuards = function (func) {
        // get the route guards that need to be loaded
        var guards = func[route_handler_metadata_1.default.GUARDS] || [];
        return guards
            .map(function (guardClass) {
            // convert guard class to instance
            return dependency_injector_1.default.get(guardClass);
        })
            .map(function (guard) {
            return function (req, res, next) {
                return __awaiter(this, void 0, void 0, function () {
                    var user, e_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, guard.validateRequest(req)];
                            case 1:
                                user = _a.sent();
                                if (!user) {
                                    return [2 /*return*/, res.unauthorized()];
                                }
                                // keep the user object on request session
                                req.session.user = user;
                                return [2 /*return*/, next()];
                            case 2:
                                e_1 = _a.sent();
                                return [2 /*return*/, res.unauthorized()];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            };
        });
    };
    return ApiRegistry;
}());
exports.default = new ApiRegistry();
//# sourceMappingURL=api-registry.js.map