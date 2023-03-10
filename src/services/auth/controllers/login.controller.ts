import { Response } from 'express';
import * as CoreModules from '../../../core';
import { CustomizedRequestInterface } from '../../../core/interfaces/customizedRequest.interface';
import { HttpStatusEnum } from '../../../core/interfaces/enums/httpStatus.enum';
import { InternalErrorCodeEnum } from '../../../core/interfaces/enums/internalErrorCode.enum';

/**
 * DISCLAIMER
 *
 * This is a purely exemplary code.
 * Obviously all the necessary business logic and controls must be present inside the controller.
 */
export const login = async (req: CustomizedRequestInterface, res: Response): Promise<Response> => {

  // destructure incoming payload
  const { email, password } = req.payload.body;

  // make your fantastic validation logic here
  const isEmailAndPasswordValid: boolean = email === 'ciccio@pasticcio.com' && password === 'Cambiami01';

  // early return with error response
  if (!isEmailAndPasswordValid) {
    return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.UNAUTHORIZED),
      {
        code: InternalErrorCodeEnum.INVALID_CREDENTIALS,
        message: 'invalid-credentials'
      },
      null
    );
  }

  // welcome back ciccio pasticcio, success response for you
  return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.OK),
    null,
    {
      logged: true
    }
  );

};
