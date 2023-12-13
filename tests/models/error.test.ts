import Error from '../../src/models/error';

describe('Error', () => {
  const name = 'AxiosError';
  const code = 'ERR_NETWORK';
  const message = 'Network Error';
  const status = 200;
  const statusText = 'OK';

  it('returns Error object', () => {
    const response = new Error(name, code, message, status, statusText);
    const expectedResponse: Error = { name, code, message, status, statusText };

    expect(response).toEqual(expectedResponse);
  });
});
