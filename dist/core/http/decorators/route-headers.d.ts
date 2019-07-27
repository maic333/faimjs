/**
 * Decorator used to inject the request HTTP Headers in a request handler method
 */
export default function RouteHeaders(): (target: any, key: string, parameterIndex: number) => void;
