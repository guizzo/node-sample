import { Response } from 'express';
import * as CoreModules from '../../../core';
import { CustomizedRequestInterface } from '../../../core/interfaces/customizedRequest.interface';
import { HttpStatusEnum } from '../../../core/interfaces/enums/httpStatus.enum';

/**
 * DISCLAIMER
 *
 * This is a purely exemplary code.
 * Obviously all the necessary business logic and controls must be present inside the controller.
 */
export const logout = async (req: CustomizedRequestInterface, res: Response): Promise<Response> => {

  // destroy user session
  if (req.user) {
    delete req.user;
  }

  // see ya ciccio pasticcio
  return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.OK),
    null,
    {
      logged: false
    }
  );

};
