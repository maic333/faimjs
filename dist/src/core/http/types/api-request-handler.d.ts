import ApiRequest from './api-request';
import ApiResponse from './api-response';
import { NextFunction } from 'express';
declare type ApiRequestHandler = (req: ApiRequest, res: ApiResponse, next: NextFunction) => void;
export default ApiRequestHandler;
