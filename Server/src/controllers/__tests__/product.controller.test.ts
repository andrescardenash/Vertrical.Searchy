import express from 'express';
import applyServerConfig from '../../config/server';
import request from 'supertest';
import { Response } from 'superagent';

const app = express();
applyServerConfig(app);
const httpRequest = request(app);

let mockProductService: { getProducts: jest.Mock<any, any> };
jest.mock('../../services/product.service.ts', () => jest.fn().mockImplementation(() => mockProductService));

describe('/v1/product', () => {
  beforeAll(() => {
    mockProductService = {
      getProducts: jest.fn(),
    };
  });

  describe('GET', () => {
    let result: Response;
    describe('when successful', () => {
      const productsColletion = [
        {
          title: 'test title',
          photo: 'https://mytestpic.com/test.png',
          description: 'large description',
          short_description: 'short description',
        },
      ];

      beforeAll(async () => {
        mockProductService.getProducts.mockResolvedValue(productsColletion);
        result = await httpRequest.get('/v1/product').query({ title: 'test title' });
      });

      afterAll(() => {
        mockProductService.getProducts.mockClear();
        result = null;
      });

      it('should return a valid json within the body', () => {
        expect(result.body).toEqual(productsColletion);
      });

      it('should return 200 status', () => {
        expect(result.statusCode).toEqual(200);
      });

      it('should call get function', () => {
        expect(mockProductService.getProducts).toHaveBeenCalledTimes(1);
      });
    });

    describe('when failing', () => {
      beforeAll(async () => {
        mockProductService.getProducts.mockImplementation(() => {
          throw new Error('fake message error');
        });
        result = await httpRequest.get('/v1/product');
      });

      afterAll(() => {
        mockProductService.getProducts.mockClear();
        result = null;
      });

      it('should return 500 status ', () => {
        expect(result.statusCode).toEqual(500);
      });

      it('should return a json with general error data', () => {
        const errorResponse = {
          error: {
            code: 'E0001',
            message: 'There is a problem with the application. If the error continues, contact Technical Support',
          },
        };

        expect(result.body).toEqual(errorResponse);
      });
    });
  });
});
