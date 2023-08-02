import axios from 'axios';
import ProductService from '../../src/services/product-service';
import ApiServiceResponse from '../../src/models/api-service-response';
import Product from '../../src/models/products/product';
import { products } from '../mocks/data-mock';

jest.mock('axios');

describe('ProductService', () => {
  let productService: ProductService;
  const baseApiUrl = 'http://url.com/api';

  beforeEach(() => {
    productService = new ProductService(baseApiUrl);
  });

  describe('getProducts', () => {
    it('returns an array of products if successful', async () => {
      const expectedResponse: ApiServiceResponse<Product[]> = {
        data: products,
        status: 200,
        statusText: 'OK',
      };

      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await productService.getProducts();
      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products`, undefined);
      expect(response).toEqual(expectedResponse.data);
    });
  });
});
