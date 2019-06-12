import TypeClass from '../../types/type-class';
/**
 * Create and store instances of classes and also retrieve an instance of an Injectable class
 */
declare class DependencyInjector {
    private recordsMap;
    private instancesMap;
    /**
     * Register a class in the DI and get its dependencies
     */
    resolve(token: TypeClass): this;
    /**
     * Get the instance of an injectable class
     */
    get<T extends object = object>(token: TypeClass<T>): T;
}
declare const injector: DependencyInjector;
export default injector;
