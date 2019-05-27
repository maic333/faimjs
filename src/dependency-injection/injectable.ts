import TypeClass from '../types/type-class';
import DependencyInjector from './dependency-injector';

/**
 * Decorator used to register services to the Dependency Injection system
 */
function Injectable() {
  return function(target: TypeClass) {
    // register class in the DI system
    DependencyInjector.resolve(target);
  };
}

export default Injectable;
