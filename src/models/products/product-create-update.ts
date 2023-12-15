/* eslint-disable import/no-cycle */
import ListingSiteProduct from './listing-site-product';
import Condition from './condition';
import SubCategory from './sub-category';
import Constants from '../../constants';
import Product from './product';

export default class ProductCreateUpdate {
  sizeTypeValue: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public size?: string,
    public sizeType?: number,
    public condition?: Condition,
    public conditionId?: number,
    public isSold?: boolean,
    public subCategory?: SubCategory,
    public subCategoryId?: number,
    public categoryId?: number,
    public brand?: string,
    public purchasePrice?: number,
    public purchaseDate?: string,
    listingSiteProducts?: ListingSiteProduct[]
  ) {
    this.sizeTypeValue = sizeType ? Constants.SIZE_TYPES[sizeType].value : '';
    this.listingSiteProducts = listingSiteProducts ?? [];
  }

  static mapFromProduct(product: Product) {
    return new ProductCreateUpdate(
      product.id,
      product.name,
      product.description,
      product.size,
      product.sizeType,
      product.condition,
      product.conditionId,
      product.isSold,
      product.subCategory,
      product.subCategoryId,
      product.categoryId,
      product.brand,
      product.purchasePrice,
      product.purchaseDate,
      product.listingSiteProducts
    );
  }
}
