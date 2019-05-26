import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
import ApiRequestHandler from '../types/api-request-handler';
import MaicApp from '../core/maic-app';
declare class ApiRegistry {
    private app;
    /**
     * Initialize service
     */
    init(app: MaicApp): void;
    /**
     * Register a new route
     */
    registerRoute(route: string, httpMethod: ApiHttpMethod, config: ApiRouteConfig, handler: ApiRequestHandler): void;
    /**
     * Create the API request handler, injecting the necessary properties
     */
    private getRouteHandler;
}
declare const _default: ApiRegistry;
export default _default;
