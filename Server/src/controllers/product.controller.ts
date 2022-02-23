import { Router, Request, Response } from 'express';
import PromiseRouter from 'express-promise-router';
import ProductService from '../services/product.service';

const route = PromiseRouter();

export const ProductController = (app: Router): void => {
  app.use('/v1', route);

  route.get('/products', async (req: Request, res: Response) => {
    const productTitle = req.query && req.query.title ? (req.query.title as string) : '';
    const productService = new ProductService();
    const products = await productService.getProducts(productTitle);

    return res.status(200).json(products);
  });
};
