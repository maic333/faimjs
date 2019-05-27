import { Response } from 'express';

interface ApiResponse extends Response {
  // #TODO enhance express response object to support helper methods like .ok(), .created(), .notFound() etc
  todo: boolean;
}

export default ApiResponse;
