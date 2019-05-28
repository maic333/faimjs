import ApiRequest from '../types/api-request';
import ApiResponse from '../types/api-response';
import { NextFunction } from 'express';

export default function enhanceResponse(req: ApiRequest, res: ApiResponse, next: NextFunction) {
  /* tslint:disable-next-line no-any */
  res.badRequest = function(data: any): void {
    res.send(400, data);
  };

  /* tslint:disable-next-line no-any */
  res.created = function(data?: any): void {
    res.send(201, data);
  };

  /* tslint:disable-next-line no-any */
  res.ok = function(data: any): void {
    res.send(200, data);
  };

  /* tslint:disable-next-line no-any */
  res.unauthorized = function(data: any): void {
    res.send(401, data);
  };

  /* tslint:disable-next-line no-any */
  res.forbidden = function(data: any): void {
    res.send(403, data);
  };

  /* tslint:disable-next-line no-any */
  res.notFound = function(data: any): void {
    res.send(404, data);
  };

  res.noContent = function(): void {
    res.send(204);
  };

  res.deleted = function(): void {
    res.send(204);
  };

  /* tslint:disable-next-line no-any */
  res.serverError = function(data: any): void {
    res.send(500, data);
  };

  /* tslint:disable-next-line no-any */
  res.file = function(data: any): void {
    // #TODO
    res.send(500, data);
  };
}
