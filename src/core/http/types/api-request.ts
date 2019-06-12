import { Request } from 'express';

interface ApiRequest extends Request {
  session: {
    /* tslint:disable-next-line no-any */
    user: any
  };
}

export default ApiRequest;
