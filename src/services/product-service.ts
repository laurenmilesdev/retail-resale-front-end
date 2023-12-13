import ApiService from './api-service';
import ProductServiceInterface from './interfaces/product-service.interface';
import ServiceResponseModel from '../models/service-response';
import ProductModel from '../models/products/product';
import Constants from '../constants';
import Utils from '../utils';

export default class ProductService extends ApiService implements ProductServiceInterface {
  constructor(public baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getProductById(id: number, config?: object): Promise<ServiceResponseModel<ProductModel>> {
    let product: ProductModel = <ProductModel>{};
    const serviceResponse = new ServiceResponseModel(product);
    const url = `${this.baseApiUrl}/Products/${id}`;

    try {
      const response = await super.get<ProductModel>(url, config);

      if (response.status === 200 && response.data) {
        product = response.data;
        product.sizeTypeValue = Constants.SIZE_TYPES[product.sizeType].value;
        serviceResponse.data = product;
      }
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }

  async getProducts(config?: object): Promise<ServiceResponseModel<ProductModel[]>> {
    let products: ProductModel[] = [];
    const serviceResponse = new ServiceResponseModel(products);
    const url = `${this.baseApiUrl}/Products`;

    try {
      const response = await super.get<ProductModel[]>(url, config);

      if (response.status === 200 && response.data) {
        products = response.data;
        serviceResponse.data = products;
      }
    } catch (error: any) {
      serviceResponse.error = Utils.errorHandler(error);
    }

    return serviceResponse;
  }
}
