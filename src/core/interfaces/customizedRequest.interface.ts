import { Request } from 'express';

export interface CustomizedRequestInterface extends Request {
  jwt?: string;
  user?: any;
  payload?: any;
}
