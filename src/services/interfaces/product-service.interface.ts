import ServiceResponseModel from '../../models/service-response';
import ProductModel from '../../models/products/product';

export default interface ProductServiceInterface {
  getProductById(id: number, config?: object): Promise<ServiceResponseModel<ProductModel>>;

  getProducts(config?: object): Promise<ServiceResponseModel<ProductModel[]>>;
}
