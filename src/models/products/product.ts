/* eslint-disable import/no-cycle */
import SubCategory from './sub-category';
import Condition from './condition';
import ListingSiteProduct from './listing-site-product';

export default class Product {
  id: number;

  name: string;

  description: string;

  size: string;

  sizeType: number;

  sizeTypeValue: string;

  condition: Condition;

  conditionId: number;

  isSold: boolean;

  subCategory: SubCategory;

  subCategoryId: number;

  brand?: string;

  purchasePrice?: number;

  purchaseDate?: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(
    id: number,
    name: string,
    description: string,
    size: string,
    sizeType: number,
    sizeTypeValue: string,
    condition: Condition,
    conditionId: number,
    isSold: boolean,
    subCategory: SubCategory,
    subCategoryId: number,
    brand?: string,
    purchasePrice?: number,
    purchaseDate?: string,
    listingSiteProducts?: ListingSiteProduct[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.size = size;
    this.sizeType = sizeType;
    this.sizeTypeValue = sizeTypeValue;
    this.condition = condition;
    this.conditionId = conditionId;
    this.isSold = isSold;
    this.subCategory = subCategory;
    this.subCategoryId = subCategoryId;
    this.brand = brand;
    this.purchasePrice = purchasePrice;
    this.purchaseDate = purchaseDate;
    this.listingSiteProducts = listingSiteProducts;
  }
}
