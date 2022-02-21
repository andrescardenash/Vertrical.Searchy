import { Like } from 'typeorm';
import { Product } from '../models/products.model';
import { ProductRepository, getProductRepository } from '../repositories/product.repository';

export default class ProductService {
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = getProductRepository();
  }

  public async getProducts(title: string): Promise<Product[]> {
    const products = await this._productRepository.find({
      title: Like(`%${title}%`),
    });

    return products;
  }
}
