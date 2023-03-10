import { NextFunction, Request, Response } from 'express';

export const Logger = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  console.debug('NEW REQUEST *********************************************************************');
  console.debug(`[Incoming request Endpoint]: ${ req.method.toUpperCase() } "${ req.originalUrl }"`);
  console.debug('[Incoming request Headers]:', req.headers);
  next();
};
