import { Response } from 'express';
import ReadableFile from './readable-file';

interface ApiResponse extends Response {
  /* tslint:disable-next-line no-any */
  badRequest: (data: any) => void;
  /* tslint:disable-next-line no-any */
  created: (data?: any) => void;
  /* tslint:disable-next-line no-any */
  ok: (data: any) => void;
  /* tslint:disable-next-line no-any */
  unauthorized: (data?: any) => void;
  /* tslint:disable-next-line no-any */
  forbidden: (data?: any) => void;
  /* tslint:disable-next-line no-any */
  notFound: (data?: any) => void;
  noContent: () => void;
  deleted: () => void;
  /* tslint:disable-next-line no-any */
  serverError: (data: any) => void;
  file: (file: ReadableFile) => void;
}

export default ApiResponse;
