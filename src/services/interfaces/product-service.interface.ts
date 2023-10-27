import ProductModel from '../../models/products/product';

export default interface ProductServiceInterface {
  getProductById(id: number, config?: object): Promise<ProductModel>;

  getProducts(config?: object): Promise<ProductModel[]>;
}
