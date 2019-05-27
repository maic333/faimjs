import RoutePropertyName from '../types/route-property-name';
import InjectRouteData from './inject-route-data';

/**
 * Decorator used to inject the Request object in a request handler method
 */
export default function RouteRequest() {
  return InjectRouteData(RoutePropertyName.REQUEST);
}
