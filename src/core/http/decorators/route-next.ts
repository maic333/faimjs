import RoutePropertyName from '../types/route-property-name';
import InjectRouteData from './inject-route-data';

/**
 * Decorator used to inject the Next handler in a request handler method
 */
export default function RouteNext() {
  return InjectRouteData(RoutePropertyName.NEXT);
}
