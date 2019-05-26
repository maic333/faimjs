import RoutePropertyName from '../types/route-property-name';

export default function RouteResponse() {
  /* tslint:disable-next-line no-any */
  return function (target: any, key: string, parameterIndex: number) {
    // get currently injected properties
    const injectProps: RoutePropertyName[] = target[key]._injectProps || [];

    // inject the Response on current index
    injectProps[parameterIndex] = RoutePropertyName.RESPONSE;

    // update injected properties
    target[key]._injectProps = injectProps;
  };
}
