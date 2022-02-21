import { NextFunction, Request, Response } from 'express';
import { ApplicationErrorInterface } from '../interfaces/applicationError.interface';

type AnyError = ApplicationErrorInterface;

const errorHandler = (err: AnyError, _req: Request, res: Response, next: NextFunction): void => {

  const error = {
    code: 'E0001',
    message: 'There is a problem with the application. If the error continues, contact Technical Support',
  };

  res.status(err.status || 500).json({ error });
};

export default errorHandler;