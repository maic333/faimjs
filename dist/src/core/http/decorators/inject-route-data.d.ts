import RoutePropertyName from '../types/route-property-name';
/**
 * Decorator used to inject route data in a request handler method
 */
export default function InjectRouteData(token: RoutePropertyName): (target: any, key: string, parameterIndex: number) => void;
