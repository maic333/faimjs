import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
import ApiRequestHandler from '../types/api-request-handler';
import MaicApp from '../core/maic-app';

class ApiRegistry {
  private app: MaicApp;

  /**
   * Initialize service
   */
  init(app: MaicApp) {
    this.app = app;
  }

  /**
   * Register a new route
   */
  registerRoute(
    route: string,
    httpMethod: ApiHttpMethod,
    config: ApiRouteConfig,
    handler: ApiRequestHandler
  ) {
    // #TODO set api prefix in config
    const apiRoute = `/api/${route}`;

    // prepare handlers
    const handlers: ApiRequestHandler[] = [];

    // #TODO add other core handlers (request validation, authentication)

    // call the request handler from controller
    handlers.push(handler);

    // @ts-ignore
    this.app.route(apiRoute)[httpMethod](handlers);
  }
}

export default new ApiRegistry();
