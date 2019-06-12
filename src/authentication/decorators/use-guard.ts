import Guard from '../guards/guard';
import RouteHandlerMetadata from '../../core/http/types/route-handler-metadata';

/**
 * Decorator used to register a Guard on a request
 */
export default function UseGuard(
  guard: Guard
) {
  /* tslint:disable-next-line no-any */
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const routeHandler = descriptor.value;
    routeHandler[RouteHandlerMetadata.GUARDS] = routeHandler[RouteHandlerMetadata.GUARDS] || [];

    // add guard on route handler
    routeHandler[RouteHandlerMetadata.GUARDS].push(guard);
  };
}
