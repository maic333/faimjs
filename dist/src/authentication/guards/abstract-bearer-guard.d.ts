import GuardType from '../types/guard-type';
import Guard from './guard';
import { ApiRequest } from '../../core';
export default abstract class AbstractBearerGuard<UserT> implements Guard<UserT> {
    type: GuardType;
    abstract validate(token: string): UserT | Promise<UserT>;
    validateRequest(req: ApiRequest): UserT | Promise<UserT>;
}
