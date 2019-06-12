"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create and store instances of classes and also retrieve an instance of an Injectable class
 */
var DependencyInjector = /** @class */ (function () {
    function DependencyInjector() {
        // registered injectable classes
        this.recordsMap = new WeakMap();
        // cache already instantiated classes
        this.instancesMap = new WeakMap();
    }
    /**
     * Register a class in the DI and get its dependencies
     */
    DependencyInjector.prototype.resolve = function (token) {
        // register the class
        this.recordsMap.set(token, 
        // get class' dependencies using the reflection capabilities of Reflect metadata
        Reflect.getOwnMetadata('design:paramtypes', token) || []);
        return this;
    };
    /**
     * Get the instance of an injectable class
     */
    DependencyInjector.prototype.get = function (token) {
        var _this = this;
        // get instance from cache
        var cachedInstance = this.instancesMap.get(token);
        if (cachedInstance) {
            // return cached instance
            return cachedInstance;
        }
        // get class' dependencies
        var dependencies = this.recordsMap.get(token);
        if (!dependencies) {
            throw new Error("Class _ is not defined with the @Injectable() decorator");
        }
        // resolve dependencies into instances
        var depsInstances = dependencies.map(function (dep) {
            return _this.get(dep);
        });
        // create the instance of the class with the resolved dependencies
        return new (token.bind.apply(token, [void 0].concat(depsInstances)))();
    };
    return DependencyInjector;
}());
// create and export a single instance of the injector
var injector = new DependencyInjector();
exports.default = injector;
//# sourceMappingURL=dependency-injector.js.map