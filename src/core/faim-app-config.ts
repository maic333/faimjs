interface FaimAppConfig {
  // API endpoints prefix
  apiPrefix?: string;
  // path to controllers directory
  controllersPath?: string | null;
  // path to services directory
  servicesPath?: string | null;
  // #TODO enable jsonschema validation?
  validation?: boolean;
}

export default FaimAppConfig;
