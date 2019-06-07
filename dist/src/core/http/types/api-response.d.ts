import { Response } from 'express';
import ReadableFile from './readable-file';
interface ApiResponse extends Response {
    badRequest: (data: any) => void;
    created: (data?: any) => void;
    ok: (data: any) => void;
    unauthorized: (data?: any) => void;
    forbidden: (data?: any) => void;
    notFound: (data?: any) => void;
    noContent: () => void;
    deleted: () => void;
    serverError: (data: any) => void;
    file: (file: ReadableFile) => void;
}
export default ApiResponse;
