import Product from '../../../src/models/products/product';
import { product } from '../../mocks/data-mock';

describe('Product', () => {
  it('returns Product object', () => {
    const response = product;
    const expectedResponse: Product = {
      name: product.name,
      description: product.description,
      size: product.size,
      sizeType: product.sizeType,
      condition: product.condition,
      isSold: product.isSold,
      subCategory: product.subCategory,
      subCategoryId: product.subCategoryId,
    };

    expect(response).toEqual(expectedResponse);
  });
});
