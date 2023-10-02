import SubCategory from '../../../src/models/products/sub-category';
import Category from '../../../src/models/products/category';

describe('SubCategory', () => {
  const categoryId = 1;
  const subCategoryId = 1;
  const subCategoryValue = 'SubCategory 1';
  const category = new Category(categoryId, 'Category 1');
  const subCategory = new SubCategory(subCategoryId, subCategoryValue, category, category.id);

  it('returns SubCategory object', () => {
    const response = subCategory;
    const expectedResponse: SubCategory = {
      id: subCategoryId,
      value: subCategoryValue,
      category,
      categoryId: category.id,
    };

    expect(response).toEqual(expectedResponse);
  });
});
