import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
import ApiRegistry from '../api-registry';
import DependencyInjector from '../../../dependency-injection/dependency-injector';
import ControllerMetadata from '../types/controller-metadata';

/**
 * Decorator used to define an API endpoint
 */
export default function ApiRoute(
  route: string,
  method: ApiHttpMethod = ApiHttpMethod.GET,
  config: ApiRouteConfig = {}
) {
  /* tslint:disable-next-line no-any */
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // lazy load the route in ApiController decorator (because we don't have the controller instantiated, yet)
    target.constructor._loadRoutes = target.constructor._loadRoutes || [];
    target.constructor._loadRoutes.push(
      function() {
        // get the controller instance
        const ctrlInstance = DependencyInjector.get(target.constructor);

        // set proper context to route handler method
        const routeHandler = descriptor.value.bind(ctrlInstance);
        // preserve injected properties
        routeHandler[ControllerMetadata.INJECT_ROUTE_DATA] = descriptor.value[ControllerMetadata.INJECT_ROUTE_DATA];

        // register API route
        ApiRegistry.registerRoute(route, method, config, routeHandler);
      }
    );
  };
}
