import { Response } from 'express';
import { IApiError } from '../interfaces/apiError.interface';
import { IApiResponseData } from '../interfaces/apiResponseData.interface';
import { IApiResponsePayload } from '../interfaces/apiResponsePayload.interface';

export const sendResponse = async (res: Response, error: IApiError, data: IApiResponseData): Promise<Response> => {
  let e = null;
  if (error) {
    console.error(error);
    e = Object.assign({}, error);
    delete e.stack;
  }
  return res.json({
    success: !error && (res.statusCode >= 200 && res.statusCode <= 299),
    error: e,
    data
  } as IApiResponsePayload);
};
