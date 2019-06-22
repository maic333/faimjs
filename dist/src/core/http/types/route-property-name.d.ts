/**
 * Tokens that can be injected in a request handler method using decorators
 */
declare enum RoutePropertyName {
    REQUEST = "REQUEST",
    RESPONSE = "RESPONSE",
    NEXT = "NEXT",
    HEADERS = "HEADERS",
    AUTH_USER = "AUTH_USER"
}
export default RoutePropertyName;
