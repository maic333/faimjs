import TypeClass from '../../../types/type-class';
import DependencyInjector from '../../dependency-injection/dependency-injector';

/**
 * Decorator used to define an API Controller
 */
export default function ApiController() {
  return function (target: TypeClass) {
    // register class in the DI system
    DependencyInjector.resolve(target);

    // load API endpoints registered by the method decorators
    /* tslint:disable-next-line no-any */
    ((target as any)._loadRoutes || []).forEach((loadRouteFunc: () => void) => {
      loadRouteFunc();
    });
  };
}
