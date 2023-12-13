import Product from '../../src/models/products/product';
import ProductDetail from '../../src/models/product-detail';
import Category from '../../src/models/products/category';
import SubCategory from '../../src/models/products/sub-category';
import Condition from '../../src/models/products/condition';
import ListingSiteProduct from '../../src/models/products/listing-site-product';
import ListingSite from '../../src/models/products/listing-site';
import Utils from '../../src/utils';

const id = 1;
const name = 'Product Name';
const description = 'This is a product description';
const size = 'S';
const sizeType = 0;
const condition = new Condition(1, 'New');
const isSold = false;
const category = new Category(1, 'category');
const subCategory = new SubCategory(1, 'sub category', category, category.id);
const subCategoryId = 1;

export const product = new Product(
  id,
  name,
  description,
  size,
  sizeType,
  condition,
  condition.id,
  isSold,
  subCategory,
  subCategoryId
);

export const products = [product];

const listingSiteId = 1;
const siteName = 'Site Name 1';

export const listingSite = new ListingSite(listingSiteId, siteName);

const listingSiteProductId = 1;
const price = 5;

export const listingSiteProduct = new ListingSiteProduct(
  listingSiteProductId,
  product,
  product.id,
  listingSite,
  listingSite.id,
  price
);

export const productDetails = [
  new ProductDetail('Name', product.name),
  new ProductDetail('Description', product.description),
  new ProductDetail('Size', product.size),
  new ProductDetail('Size Type', product.sizeTypeValue),
  new ProductDetail('Category', product.subCategory.category.value),
  new ProductDetail('SubCategory', product.subCategory.value),
  new ProductDetail('Condition', product.condition.value),
  new ProductDetail('Brand', product.brand),
  new ProductDetail('Purchase Price', product.purchasePrice),
  new ProductDetail('Purchase Date', Utils.formatDate(product.purchaseDate ?? '')),
];
