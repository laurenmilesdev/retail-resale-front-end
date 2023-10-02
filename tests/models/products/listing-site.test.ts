import ListingSite from '../../../src/models/products/listing-site';

describe('ListingSite', () => {
  const id = 1;
  const siteName = 'Site Name 1';

  it('returns ListingSite object', () => {
    const response = new ListingSite(id, siteName);
    const expectedResponse: ListingSite = { id, siteName };

    expect(response).toEqual(expectedResponse);
  });
});
