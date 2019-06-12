import GuardType from '../types/guard-type';
import ApiRequest from '../../core/http/types/api-request';

export default interface Guard<UserT = {}> {
  type: GuardType;
  validateRequest(req: ApiRequest): UserT | Promise<UserT>;
}
