/**
 * Decorator used to inject the Request object in a request handler method
 */
export default function RouteResponse(): (target: any, key: string, parameterIndex: number) => void;
