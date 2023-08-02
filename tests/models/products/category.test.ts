import Category from '../../../src/models/products/category';

describe('Category', () => {
  const id = 1;
  const value = 'Value';

  it('returns Category object', () => {
    const response = new Category(id, value);
    const expectedResponse: Category = { id, value };

    expect(response).toEqual(expectedResponse);
  });
});
