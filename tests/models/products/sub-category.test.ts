import SubCategory from '../../../src/models/products/sub-category';
import Category from '../../../src/models/products/category';

describe('SubCategory', () => {
  const categoryId = 1;
  const category = new Category(categoryId, 'category');
  const value = 'sub category';

  it('returns SubCategory object', () => {
    const response = new SubCategory(category, categoryId, value);
    const expectedResponse: SubCategory = { category, categoryId, value };

    expect(response).toEqual(expectedResponse);
  });
});
