import { Response } from 'express';

interface ApiResponse extends Response {
  todo: boolean;
}

export default ApiResponse;
