import Dropdown from '../../src/models/dropdown';

describe('Dropdown', () => {
  const id = 1;
  const value = 'Dropdown 1';

  it('returns Dropdown object', () => {
    const response = new Dropdown(id, value);
    const expectedResponse: Dropdown = { id, value };

    expect(response).toEqual(expectedResponse);
  });
});
