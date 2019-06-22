import RoutePropertyName from '../types/route-property-name';
import InjectRouteData from './inject-route-data';

/**
 * Decorator used to inject the authenticated user object in a request handler method
 */
export default function AuthenticatedUser() {
  return InjectRouteData(RoutePropertyName.AUTH_USER);
}
