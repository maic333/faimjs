import { Request } from 'express';
interface ApiRequest extends Request {
    session: any;
}
export default ApiRequest;
