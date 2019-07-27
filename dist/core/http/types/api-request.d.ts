import { Request } from 'express';
interface ApiRequest extends Request {
    session: {
        user?: any;
    };
}
export default ApiRequest;
