import ApiHttpMethod from './types/api-http-method';
import ApiRouteConfig from './types/api-route-config';
import ApiRequestHandler from './types/api-request-handler';
import FaimApp from '../faim-app';
import ApiRequest from './types/api-request';
import ApiResponse from './types/api-response';
import { NextFunction } from 'express';
import RoutePropertyName from './types/route-property-name';
import ControllerMetadata from './types/controller-metadata';

/**
 * Service used to register API requests
 */
class ApiRegistry {
  private app: FaimApp;

  /**
   * Initialize service
   */
  init(app: FaimApp) {
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
    // create and sanitize the api route path
    const apiRoute = `/${this.app.config.apiPrefix}/${route}`
      .replace(/(^\/+)/, '/')
      .replace(/(\/+$)/, '');

    // prepare handlers
    const handlers: ApiRequestHandler[] = [];

    // #TODO add other core middleware (request validation, authentication)

    // call the request handler from controller
    handlers.push(this.getRouteHandler(handler));

    // @ts-ignore
    this.app.route(apiRoute)[httpMethod](handlers);
  }

  /**
   * Create the API request handler, injecting the necessary properties
   */
  /* tslint:disable-next-line no-any */
  private getRouteHandler(func: any): ApiRequestHandler {
    return function (req: ApiRequest, res: ApiResponse, next: NextFunction) {
      // get the route data that need to be injected
      const injectPropsKeys: RoutePropertyName[] = func[ControllerMetadata.INJECT_ROUTE_DATA] || [];
      // get the data to be injected
      const injectedProps = injectPropsKeys.map((propKey: RoutePropertyName) => {
        switch (propKey) {
          case RoutePropertyName.REQUEST:
            return req;
          case RoutePropertyName.RESPONSE:
            return res;
          case RoutePropertyName.NEXT:
            return next;
          case RoutePropertyName.HEADERS:
            return req.headers;
        }

        // wrongly injected property
        return;
      });

      // call the request handler with the injected properties
      return func(...injectedProps);
    };
  }
}

export default new ApiRegistry();
