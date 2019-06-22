import Guard from '../guards/guard';
import RouteHandlerMetadata from '../../core/http/types/route-handler-metadata';
import TypeClass from '../../types/type-class';

/**
 * Decorator used to register a Guard on a request
 */
export default function UseGuard(
  guardClass: TypeClass<Guard>
) {
  /* tslint:disable-next-line no-any */
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const routeHandler = descriptor.value;
    routeHandler[RouteHandlerMetadata.GUARDS] = routeHandler[RouteHandlerMetadata.GUARDS] || [];

    // add guard on route handler
    routeHandler[RouteHandlerMetadata.GUARDS].push(guardClass);
  };
}
