import SelectList from '../../src/models/select-list';
import Dropdown from '../../src/models/dropdown';

describe('SelectList', () => {
  const name = 'Select List 1';
  const value = '1';
  const selectListItems = [new Dropdown(1, 'value 1'), new Dropdown(2, 'value 2')];

  it('returns SelectList object', () => {
    const response = new SelectList(name, value, selectListItems);
    const expectedResponse: SelectList = { name, value, selectListItems };

    expect(response).toEqual(expectedResponse);
  });
});
