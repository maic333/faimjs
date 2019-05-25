import ApiHttpMethod from '../types/api-http-method';
import ApiRouteConfig from '../types/api-route-config';
import ApiRegistry from '../helpers/api-registry';

export default function ApiRoute(
  route: string,
  method: ApiHttpMethod = ApiHttpMethod.GET,
  config: ApiRouteConfig = {}
) {
  // #TODO fix any?
  // @ts-ignore
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    // register API route
    ApiRegistry.registerRoute(route, method, config, descriptor.value);
  };
}
