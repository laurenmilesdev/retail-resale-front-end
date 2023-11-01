import ApiService from './api-service';
import ProductServiceInterface from './interfaces/product-service.interface';
import ProductModel from '../models/products/product';
import Constants from '../constants';

export default class ProductService extends ApiService implements ProductServiceInterface {
  constructor(public baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getProductById(id: number, config?: object): Promise<ProductModel> {
    const url = `${this.baseApiUrl}/Products/${id}`;
    const response = await super.get<ProductModel>(url, config);
    let product: ProductModel = <ProductModel>{};

    if (response.status === 200 && response.data) {
      product = response.data;
      product.sizeTypeValue = Constants.SIZE_TYPES[product.sizeType].value;
    }

    return product;
  }

  async getProducts(config?: object): Promise<ProductModel[]> {
    const url = `${this.baseApiUrl}/Products`;
    const response = await super.get<ProductModel[]>(url, config);
    let products: ProductModel[] = [];

    if (response.status === 200 && response.data) products = response.data;

    return products;
  }
}
