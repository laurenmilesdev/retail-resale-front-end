import Condition from '../../../src/models/products/condition';

describe('Condition', () => {
  const id = 1;
  const value = 'Condition 1';

  it('returns Condition object', () => {
    const response = new Condition(id, value);
    const expectedResponse: Condition = { id, value };

    expect(response).toEqual(expectedResponse);
  });
});
