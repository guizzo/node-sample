import { NextFunction, Response } from 'express';
import { validate, ValidationError } from 'class-validator';
import cleanDeep from 'clean-deep';
import * as CoreModules from '../';
import { plainToInstance } from 'class-transformer';
import { ValidationType } from '../interfaces/enums/validationType.enum';
import { HttpStatusEnum } from '../interfaces/enums/httpStatus.enum';
import { InternalErrorCodeEnum } from '../interfaces/enums/internalErrorCode.enum';
import { CustomizedRequestInterface } from '../interfaces/customizedRequest.interface';

const VALIDATION_OPTIONS = {
  skipMissingProperties: true,
  enableDebugMessages: process.env.NODE_ENV === 'development',
  whitelist: true,
  forbidUnknownValues: true
};

export function ValidateDto(dtoClass: any, type: ValidationType = 'body') {
  return function (req: CustomizedRequestInterface, res: Response, next: NextFunction) {
    let output: any;
    switch (type) {
      case 'body': {
        output = plainToInstance(dtoClass, req.body);
        break;
      }
      case 'params': {
        output = plainToInstance(dtoClass, req.params);
        break;
      }
      case 'query': {
        output = plainToInstance(dtoClass, req.query);
        break;
      }
      default: {
        break;
      }
    }
    if (!output) {
      return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.BAD_REQUEST),
        {
          code: InternalErrorCodeEnum.DTO_VALIDATION_UNKNOWN,
          message: 'internal.errors.unknown-validation-type'
        },
        null
      );
    }
    validate(output, VALIDATION_OPTIONS).then((e: ValidationError[]) => {
      if (e.length) {
        return CoreModules.Api.sendResponse(res.status(HttpStatusEnum.BAD_REQUEST),
          {
            stack: e,
            code: InternalErrorCodeEnum.DTO_VALIDATION_FAILED,
            message: 'validation-error'
          },
          null
        );
      } else {
        if (!req.payload) {
          req.payload = {};
        }
        req.payload[type] = cleanDeep(output);
        next();
      }
    });
  };
}
