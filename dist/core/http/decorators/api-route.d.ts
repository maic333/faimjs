import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
/**
 * Decorator used to define an API endpoint
 */
export default function ApiRoute(route: string, method?: ApiHttpMethod, config?: ApiRouteConfig): (target: any, key: string, descriptor: PropertyDescriptor) => void;
