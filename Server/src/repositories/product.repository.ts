import { EntityRepository, Repository, getCustomRepository } from 'typeorm';
import { Product } from '../models/products.model';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {}

export function getProductRepository(): ProductRepository {
  return getCustomRepository(ProductRepository);
}
