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
export const retrievePost = async (req: CustomizedRequestInterface, res: Response): Promise<Response> => {

  // destructure incoming payload
  const { post_id } = req.payload.params;

  const posts: { id: number, title: string, author: string }[] = [
    { id: 1, title: 'Hello World!', author: 'ciccio@pasticcio.com' },
    { id: 2, title: 'It\s too late', author: 'ciccio@pasticcio.com' },
    { id: 3, title: 'I need some rest', author: 'ciccio@pasticcio.com' }
  ];

  const post: { id: number, title: string, author: string } | undefined = posts
    .find((post: { id: number, title: string, author: string }) => post.id === post_id);

  // welcome back ciccio pasticcio, success response for you
  return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.OK),
    null,
    {
      post
    }
  );

};
