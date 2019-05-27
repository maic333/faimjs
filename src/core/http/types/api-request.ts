import { Request } from 'express';

interface ApiRequest extends Request {
  // #TODO revisit when adding authentication support
  /* tslint:disable-next-line no-any */
  session: any;
}

export default ApiRequest;
