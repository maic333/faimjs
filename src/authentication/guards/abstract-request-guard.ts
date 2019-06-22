import { ApiRequest } from '../../core';
import GuardType from '../types/guard-type';
import Guard from './guard';

// tslint:disable-next-line no-any
export default abstract class AbstractRequestGuard<UserT = any> implements Guard<UserT> {
  public type = GuardType.REQUEST;

  abstract validate(req: ApiRequest): UserT | Promise<UserT>;

  validateRequest(req: ApiRequest): UserT | Promise<UserT> {
    return this.validate(req);
  }
}
