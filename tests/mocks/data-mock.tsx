import WindowModel from '../../src/models/window';
import Product from '../../src/models/products/product';
import Category from '../../src/models/products/category';
import SubCategory from '../../src/models/products/sub-category';
import { SizeType } from '../../src/enums/size-type';

export const windows = [
  new WindowModel('Page', <>Page</>, 'window-id-1', 'start-bar-button-id-1'),
  new WindowModel('Page 2', <>Page 2</>, 'window-id-2', 'start-bar-button-id-2'),
];

export const menuItems = [
  new WindowModel('Item 1', undefined, undefined, 'item-1-id'),
  new WindowModel('Item 2', undefined, undefined, 'item-2-id'),
  new WindowModel('Item 3', undefined, undefined, 'item-3-id'),
];

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
