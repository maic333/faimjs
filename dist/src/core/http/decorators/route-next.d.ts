/**
 * Decorator used to inject the Next handler in a request handler method
 */
export default function RouteNext(): (target: any, key: string, parameterIndex: number) => void;
