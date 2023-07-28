import { SizeType } from '../../enums/size-type';
import SubCategory from './sub-category';

export default class Product {
  name: string;

  description: string;

  size: string;

  sizeType: SizeType;

  condition: string;

  isSold: boolean;

  subCategory: SubCategory;

  subCategoryId: number;

  brand?: string;

  purchasePrice?: number;

  purchaseDate?: Date;

  constructor(
    name: string,
    description: string,
    size: string,
    sizeType: SizeType,
    condition: string,
    isSold: boolean,
    subCategory: SubCategory,
    subCategoryId: number,
    brand?: string,
    purchasePrice?: number,
    purchaseDate?: Date
  ) {
    this.name = name;
    this.description = description;
    this.size = size;
    this.sizeType = sizeType;
    this.condition = condition;
    this.isSold = isSold;
    this.subCategory = subCategory;
    this.subCategoryId = subCategoryId;
    this.brand = brand;
    this.purchasePrice = purchasePrice;
    this.purchaseDate = purchaseDate;
  }
}
