import GuardType from '../types/guard-type';
import ApiRequest from '../../core/http/types/api-request';

// tslint:disable-next-line no-any
export default interface Guard<UserT = any> {
  type: GuardType;
  validateRequest(req: ApiRequest): UserT | Promise<UserT>;
}
