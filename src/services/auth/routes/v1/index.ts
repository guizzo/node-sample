import express, { Router } from 'express';
import * as CoreModules from '../../../../core';
import * as Controllers from '../../controllers';
import { LoginBodyDto } from '../../dto/loginBody.dto';

const router: Router = express.Router();

router.post('/login',
  CoreModules.Middlewares.ValidateDto(LoginBodyDto, 'body'),
  Controllers.login
);

router.post('/logout',
  Controllers.logout
);

export const Auth = router;
