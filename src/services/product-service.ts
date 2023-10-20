import ApiService from './api-service';
import ProductModel from '../models/products/product';
import CreateUpdateProductModel from '../models/products/create-update-product';
import { SizeType } from '../enums/size-type';

export default class ProductService extends ApiService {
  baseApiUrl: string;

  constructor(baseApiUrl: string) {
    super();
    this.baseApiUrl = baseApiUrl;
  }

  async getProductById(id: number, config?: object): Promise<ProductModel> {
    const url = `${this.baseApiUrl}/Products/${id}`;
    const response = await super.get(url, config);
    let product: ProductModel = <ProductModel>{};

    if (response.status === 200 && response.data) {
      product = response.data as ProductModel;
      product.sizeTypeValue = SizeType[product.sizeType];
    }

    return product;
  }

  async getProducts(config?: object): Promise<ProductModel[]> {
    const url = `${this.baseApiUrl}/Products`;
    const response = await super.get(url, config);
    let products: ProductModel[] = [];

    if (response.status === 200 && response.data) products = response.data as ProductModel[];

    return products;
  }

  async createUpdateProduct(
    product: CreateUpdateProductModel,
    id?: number,
    config?: object
  ): Promise<boolean> {
    if (id) {
      const url = `${this.baseApiUrl}/Products/${id}`;
      const response = await super.put(url, product, config);

      return !!(response.status === 204);
    }

    const url = `${this.baseApiUrl}/Products`;
    const response = await super.post(url, product, config);

    return !!(response.status === 200 && response.data);
  }
}
