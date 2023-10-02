import Category from '../../../src/models/products/category';

describe('Category', () => {
  const id = 1;
  const value = 'Category 1';

  it('returns Category object', () => {
    const response = new Category(id, value);
    const expectedResponse: Category = { id, value };

    expect(response).toEqual(expectedResponse);
  });
});
