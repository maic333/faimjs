interface FaimAppConfig<UserModel> {
  // API endpoints prefix
  apiPrefix?: string;
  // path to controllers directory
  controllersPath?: string | null;
  // path to services directory
  servicesPath?: string | null;
  // JWT authentication
  authentication?: {
    enable: boolean,
    jwt: {
      key: string
    },
    // tslint:disable-next-line no-any
    onAuth: (loginData: any) => Promise<UserModel>,
    checkAuth: (userData: UserModel) => Promise<boolean>
  };
  // #TODO enable jsonschema validation?
  validation?: boolean;
}

export default FaimAppConfig;
