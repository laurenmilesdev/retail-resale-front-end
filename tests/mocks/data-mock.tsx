import Product from '../../src/models/products/product';
import Category from '../../src/models/products/category';
import SubCategory from '../../src/models/products/sub-category';
import { SizeType } from '../../src/enums/size-type';

const id = 1;
const name = 'Product Name';
const description = 'This is a product description';
const size = 'S';
const sizeType = 0;
const sizeTypeValue = SizeType[sizeType];
const condition = 'New';
const isSold = false;
const category = new Category(1, 'category');
const subCategory = new SubCategory(category, 1, 'sub category');
const subCategoryId = 1;

export const product = new Product(
  id,
  name,
  description,
  size,
  sizeType,
  sizeTypeValue,
  condition,
  isSold,
  subCategory,
  subCategoryId
);

export const products = [product];
