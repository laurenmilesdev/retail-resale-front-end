import Product from '../../../src/models/products/product';
import { product } from '../../mocks/data-mock';

describe('Product', () => {
  it('returns Product object', () => {
    const response = product;
    const expectedResponse: Product = {
      id: product.id,
      name: product.name,
      description: product.description,
      size: product.size,
      sizeType: product.sizeType,
      sizeTypeValue: product.sizeTypeValue,
      condition: product.condition,
      conditionId: product.condition.id,
      isSold: product.isSold,
      subCategory: product.subCategory,
      subCategoryId: product.subCategoryId,
      categoryId: product.subCategory.categoryId,
      brand: undefined,
      purchasePrice: undefined,
      purchaseDate: undefined,
      listingSiteProducts: [],
    };

    expect(response).toEqual(expectedResponse);
  });
});
