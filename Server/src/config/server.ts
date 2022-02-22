import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from '../controllers';
import errorHandler from '../config/errorHandler';

export default (app: express.Application): void => {
  dotenv.config();

  app.use(
    cors({
      credentials: true,
      origin: process.env.ALLOWED_ORIGINS,
    })
  );
  app.use(routes());
  app.use(errorHandler);
};
