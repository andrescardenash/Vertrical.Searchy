import { mocked } from 'jest-mock';
import { Product } from '../../models/products.model';
import { getProductRepository } from '../../repositories/product.repository';
import ProductService from '../product.service';

jest.mock('../../repositories/product.repository.ts');

let productService: ProductService;
let mockProductRepository;

mockProductRepository = {
  find: jest.fn(),
};

mocked(getProductRepository).mockReturnValue(mockProductRepository);

describe('Product service', () => {
  beforeAll(() => {
    productService = new ProductService();
  });

  describe('getProducts', () => {
    let result: Product[];
    const title = 'test title';

    describe('when successful', () => {
      const productsFromDb: Product[] = [
        {
          id: '798d2cb5-ed20-462e-a160-a1b6d80a92fc',
          title: title,
          photo: 'https://mytestpic.com/test.png',
          description: 'large description',
          shortDescription: 'short description',
        },
      ];

      beforeAll(async () => {
        mockProductRepository.find.mockResolvedValue(productsFromDb);
        result = await productService.getProducts(title);
      });

      afterAll(() => {
        mockProductRepository.find.mockClear();
        result = null;
      });

      it('should return valid product array', () => {
        expect(result).toEqual(productsFromDb);
      });

      it('should call find function', () => {
        expect(mockProductRepository.find).toHaveBeenCalledTimes(1);
      });
    });
  });
});
