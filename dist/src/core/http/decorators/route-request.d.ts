/**
 * Decorator used to inject the Request object in a request handler method
 */
export default function RouteRequest(): (target: any, key: string, parameterIndex: number) => void;
