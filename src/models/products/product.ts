import SubCategory from './sub-category';

export default class Product {
  id: number;

  name: string;

  description: string;

  size: string;

  sizeType: number;

  sizeTypeValue: string;

  condition: string;

  isSold: boolean;

  subCategory: SubCategory;

  subCategoryId: number;

  brand?: string;

  purchasePrice?: number;

  purchaseDate?: Date;

  constructor(
    id: number,
    name: string,
    description: string,
    size: string,
    sizeType: number,
    sizeTypeValue: string,
    condition: string,
    isSold: boolean,
    subCategory: SubCategory,
    subCategoryId: number,
    brand?: string,
    purchasePrice?: number,
    purchaseDate?: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.size = size;
    this.sizeType = sizeType;
    this.sizeTypeValue = sizeTypeValue;
    this.condition = condition;
    this.isSold = isSold;
    this.subCategory = subCategory;
    this.subCategoryId = subCategoryId;
    this.brand = brand;
    this.purchasePrice = purchasePrice;
    this.purchaseDate = purchaseDate;
  }
}
