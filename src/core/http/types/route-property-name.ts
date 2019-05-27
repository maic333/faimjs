/**
 * Tokens that can be injected in a request handler method using decorators
 */
enum RoutePropertyName {
  REQUEST = 'request',
  RESPONSE = 'response',
  NEXT = 'next',
  HEADERS = 'headers'
}

export default RoutePropertyName;
