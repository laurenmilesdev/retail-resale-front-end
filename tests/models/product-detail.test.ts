import ProductDetail from '../../src/models/product-detail';

describe('ProductDetail', () => {
  const name = 'Name';
  const value = 'Value';

  it('returns ProductDetail object', () => {
    const response = new ProductDetail(name, value);
    const expectedResponse: ProductDetail = { name, value };

    expect(response).toEqual(expectedResponse);
  });
});
