import ApiRequest from '../types/api-request';
import ApiResponse from '../types/api-response';
import { NextFunction } from 'express';
export default function enhanceRequest(req: ApiRequest, res: ApiResponse, next: NextFunction): void;
