import { Request, Response } from 'express';
import * as CoreModules from '../index';
import { HttpStatusEnum } from '../interfaces/enums/httpStatus.enum';
import { InternalErrorCodeEnum } from '../interfaces/enums/internalErrorCode.enum';

export const handleUnmatchedRoutes = async (req: Request, res: Response): Promise<Response> => {
  return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.NOT_FOUND),
    {
      code: InternalErrorCodeEnum.UNEXPECTED_ROUTE,
      message: 'unexpected-route'
    },
    null
  );
};
