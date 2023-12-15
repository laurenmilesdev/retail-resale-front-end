import ProductCreateUpdate from '../../../src/models/products/product-create-update';
import { product } from '../../mocks/data-mock';

describe('ProductCreateUpdate', () => {
  it('returns ProductCreateUpdate object', () => {
    const response = product;
    const expectedResponse: ProductCreateUpdate = {
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
