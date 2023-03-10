import { IApiResponseData } from './apiResponseData.interface';
import { IApiError } from './apiError.interface';

export interface IApiResponsePayload {
  success: boolean;
  data: IApiResponseData | null;
  error: IApiError | null;
}
