import { Router } from 'express';
import { ProductController } from './product.controller';

export const routes = (): Router => {
  const router = Router();

  ProductController(router);

  return router;
};
