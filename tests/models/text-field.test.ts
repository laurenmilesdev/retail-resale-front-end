import TextField from '../../src/models/text-field';

describe('TextField', () => {
  const name = 'Text Field 1';
  const value = 'Text field value';

  it('returns TextField object', () => {
    const response = new TextField(name, value);
    const expectedResponse: TextField = { name, value, multiline: false };

    expect(response).toEqual(expectedResponse);
  });

  it('returns TextField object with muli line true', () => {
    const response = new TextField(name, value, true);
    const expectedResponse: TextField = { name, value, multiline: true };

    expect(response).toEqual(expectedResponse);
  });
});
