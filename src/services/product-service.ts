import ApiService from './api-service';
import ProductModel from '../models/products/product';

export default class ProductService extends ApiService {
  baseApiUrl: string;

  constructor(baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getProducts(config?: object): Promise<ProductModel[]> {
    const url = `${this.baseApiUrl}/Products`;
    const response = await super.get(url, config);
    let products: ProductModel[] = [];

    if (response.status === 200 && response.data) products = response.data as ProductModel[];

    return products;
  }
}
