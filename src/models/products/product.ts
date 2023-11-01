/* eslint-disable import/no-cycle */
import SubCategory from './sub-category';
import Condition from './condition';
import ListingSiteProduct from './listing-site-product';
import Constants from '../../constants';

export default class Product {
  sizeTypeValue: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public size: string,
    public sizeType: number,
    public condition: Condition,
    public conditionId: number,
    public isSold: boolean,
    public subCategory: SubCategory,
    public subCategoryId: number,
    public brand?: string,
    public purchasePrice?: number,
    public purchaseDate?: string,
    listingSiteProducts?: ListingSiteProduct[]
  ) {
    this.sizeTypeValue = Constants.SIZE_TYPES[sizeType].value;
    this.listingSiteProducts = listingSiteProducts ?? [];
  }
}
