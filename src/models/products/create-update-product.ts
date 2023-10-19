/* eslint-disable import/no-cycle */
import ListingSiteProduct from './listing-site-product';

export default class CreateUpdateProduct {
  id?: number;

  name?: string;

  description?: string;

  size?: string;

  sizeType?: number;

  conditionId?: number;

  isSold?: boolean;

  subCategoryId?: number;

  brand?: string;

  purchasePrice?: number;

  purchaseDate?: string;

  listingSiteProducts?: ListingSiteProduct[];

  constructor(
    id?: number,
    name?: string,
    description?: string,
    size?: string,
    sizeType?: number,
    conditionId?: number,
    isSold?: boolean,
    subCategoryId?: number,
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
    this.conditionId = conditionId;
    this.isSold = isSold;
    this.subCategoryId = subCategoryId;
    this.brand = brand;
    this.purchasePrice = purchasePrice;
    this.purchaseDate = purchaseDate;
    this.listingSiteProducts = listingSiteProducts ?? [];
  }
}
