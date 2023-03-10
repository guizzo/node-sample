import express, { Router } from 'express';
import * as CoreModules from '../../../../core';
import * as Controllers from '../../controllers';
import { RetrievePostParamsDto } from '../../dto/retrievePostParams.dto';

const router: Router = express.Router();

router.get('/',
  Controllers.retrievePosts
);

router.post('/:post_id',
  CoreModules.Middlewares.ValidateDto(RetrievePostParamsDto, 'params'),
  Controllers.retrievePost
);

export const Posts = router;
