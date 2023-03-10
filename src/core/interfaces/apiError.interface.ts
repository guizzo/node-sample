import { ValidationError } from 'class-validator';
import { InternalErrorCodeEnum } from './enums/internalErrorCode.enum';

export interface IApiError {
  stack?: any;
  code: InternalErrorCodeEnum;
  message: string | ValidationError[];
}
