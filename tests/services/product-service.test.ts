import axios from 'axios';
import ProductService from '../../src/services/product-service';
import ApiResponse from '../../src/models/api-response';
import ServiceResponse from '../../src/models/service-response';
import Error from '../../src/models/error';
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
      const mockResponse: ApiResponse<Product> = {
        data: product,
        status: 200,
        statusText: 'OK',
      };
      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
      const response = await productService.getProductById(product.id);
      const expectedResponse = new ServiceResponse(mockResponse.data);

      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products/${product.id}`, undefined);
      expect(response).toEqual(expectedResponse);
    });

    // it('returns an empty product and error if not successful', async () => {
    //   const mockResponse: ApiResponse<Product> = {
    //     data: <Product>{},
    //     status: 404,
    //     statusText: 'Not found',
    //   };
    //   const error = new Error(
    //     'AxiosError',
    //     'ERR_BAD_REQUEST',
    //     'Request failed with status code 404',
    //     mockResponse.status,
    //     mockResponse.statusText
    //   );
    //   const mock = (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    //   const response = await productService.getProductById(product.id);
    //   const expectedResponse = new ServiceResponse(mockResponse.data, error);

    //   expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products/${product.id}`, undefined);
    //   expect(response).toEqual(expectedResponse);
    // });
  });

  describe('getProducts', () => {
    it('returns an array of products if successful', async () => {
      const mockResponse: ApiResponse<Product[]> = {
        data: products,
        status: 200,
        statusText: 'OK',
      };
      const mock = (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
      const response = await productService.getProducts();
      const expectedResponse = new ServiceResponse(mockResponse.data);

      expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products`, undefined);
      expect(response).toEqual(expectedResponse);
    });

    // it('returns an empty array of products if not successful', async () => {
    //   const mockResponse: ApiResponse<Product[]> = {
    //     data: [],
    //     status: 404,
    //     statusText: 'Not found',
    //   };
    //   const error = new Error(
    //     'AxiosError',
    //     'ERR_BAD_REQUEST',
    //     'Request failed with status code 404',
    //     mockResponse.status,
    //     mockResponse.statusText
    //   );
    //   const mock = (axios.get as jest.Mock).mockResolvedValueOnce(mockResponse);
    //   const expectedResponse = new ServiceResponse(mockResponse.data, error);
    //   const response = await productService.getProducts();

    //   expect(mock).toHaveBeenCalledWith(`${baseApiUrl}/Products`, undefined);
    //   expect(response).toEqual(expectedResponse);
    // });
  });
});
