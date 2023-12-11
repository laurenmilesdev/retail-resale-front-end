import ApiError from '../../src/models/api-error';

describe('ApiError', () => {
  const name = 'AxiosError';
  const code = 'ERR_NETWORK';
  const message = 'Network Error';

  it('returns ApiError object', () => {
    const response = new ApiError(name, code, message);
    const expectedResponse: ApiError = { name, code, message };

    expect(response).toEqual(expectedResponse);
  });
});
