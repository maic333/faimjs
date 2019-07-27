import { ApiRequest } from '../../core';
import GuardType from '../types/guard-type';
import Guard from './guard';
export default abstract class AbstractRequestGuard<UserT = any> implements Guard<UserT> {
    type: GuardType;
    abstract validate(req: ApiRequest): UserT | Promise<UserT>;
    validateRequest(req: ApiRequest): UserT | Promise<UserT>;
}
