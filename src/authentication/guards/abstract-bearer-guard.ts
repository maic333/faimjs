import GuardType from '../types/guard-type';
import Guard from './guard';
import { ApiRequest } from '../../core';

// tslint:disable-next-line no-any
export default abstract class AbstractBearerGuard<UserT = any> implements Guard<UserT> {
  public type = GuardType.BEARER;

  abstract validate(token: string): UserT | Promise<UserT>;

  validateRequest(req: ApiRequest): UserT | Promise<UserT> {
    // get token from headers
    const authorizationHeader = req.header('Authorization') || '';
    const token = authorizationHeader.split('Bearer ')[1];

    if (!token) {
      throw new Error('Authorization token is missing');
    }

    return this.validate(token);
  }
}
