import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
import ApiRequestHandler from '../types/api-request-handler';
import MaicApp from '../core/maic-app';
import ApiRequest from '../types/api-request';
import ApiResponse from '../types/api-response';
import { NextFunction } from 'express';
import RoutePropertyName from '../types/route-property-name';

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
    handlers.push(this.getRouteHandler(handler));

    // @ts-ignore
    this.app.route(apiRoute)[httpMethod](handlers);
  }

  /**
   * Create the API request handler, injecting the necessary properties
   */
  // #TODO fix any
  // @ts-ignore
  private getRouteHandler(func: any): ApiRequestHandler {
    return function (req: ApiRequest, res: ApiResponse, next: NextFunction) {
      // get the properties that need to be injected
      const injectPropsNames: RoutePropertyName[] = func._injectProps || [];
      // get the properties to be injected
      const injectedProps = injectPropsNames.map((propName: RoutePropertyName) => {
        switch (propName) {
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
      // #TODO pass controller context instead of null
      return func(...injectedProps);
    };
  }
}

export default new ApiRegistry();
