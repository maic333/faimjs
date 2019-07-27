import TypeClass from '../../types/type-class';
/**
 * Decorator used to register services to the Dependency Injection system
 */
declare function Injectable(): (target: TypeClass<{}>) => void;
export default Injectable;
