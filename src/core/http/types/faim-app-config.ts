interface FaimAppConfig {
  // API endpoints prefix
  apiPrefix?: string;
  // #TODO enable jsonschema validation?
  validation?: boolean;
  // #TODO enable JWT authentication?
  authentication?: boolean;
  // #TODO path to controllers directory
  controllersPath?: string | null;
  // #TODO path to services directory
  servicesPath?: string | null;
}

export default FaimAppConfig;
