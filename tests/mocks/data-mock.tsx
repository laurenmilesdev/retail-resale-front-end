import Product from '../../src/models/products/product';
import Category from '../../src/models/products/category';
import SubCategory from '../../src/models/products/sub-category';
import { SizeType } from '../../src/enums/size-type';

const name = 'Product Name';
const description = 'This is a product description';
const size = 'S';
const sizeType = SizeType.Mens;
const condition = 'New';
const isSold = false;
const category = new Category(1, 'category');
const subCategory = new SubCategory(category, 1, 'sub category');
const subCategoryId = 1;

export const product = new Product(
  name,
  description,
  size,
  sizeType,
  condition,
  isSold,
  subCategory,
  subCategoryId
);

export const products = [product];
