import axios from 'axios';
import ProductService from '../../src/services/product-service';
import ApiServiceResponse from '../../src/models/api-service-response';
import Product from '../../src/models/products/product';
import { product, products } from '../mocks/data-mock';

jest.mock('axios');

describe('ProductService', () => {
  let productService: ProductService;
  const baseApiUrl = 'http://url.com/api';

  beforeEach(() => {
    productService = new ProductService(baseApiUrl);
  });

  describe('getProductById', () => {
    it('returns a product if successful', async () => {
      const expectedResponse: ApiServiceResponse<Product> = {
        data: product,
        status: 200,
        statusText: 'OK',
      };

      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await productService.getProductById(product.id);
      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products/${product.id}`, undefined);
      expect(response).toEqual(expectedResponse.data);
    });

    it('returns an empty product if not successful', async () => {
      const expectedResponse: ApiServiceResponse<Product> = {
        data: <Product>{},
        status: 404,
        statusText: 'NOT_FOUND',
      };

      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await productService.getProductById(product.id);
      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products/${product.id}`, undefined);
      expect(response).toEqual(expectedResponse.data);
    });
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

    it('returns an empty array of products if not successful', async () => {
      const expectedResponse: ApiServiceResponse<Product[]> = {
        data: [],
        status: 400,
        statusText: 'ERR_NETWORK',
      };

      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(expectedResponse);

      const response = await productService.getProducts();
      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products`, undefined);
      expect(response).toEqual(expectedResponse.data);
    });
  });
});
