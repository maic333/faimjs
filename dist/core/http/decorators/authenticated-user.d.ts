/**
 * Decorator used to inject the authenticated user object in a request handler method
 */
export default function AuthenticatedUser(): (target: any, key: string, parameterIndex: number) => void;
