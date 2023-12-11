import Error from '../../src/models/error';
import ApiError from '../../src/models/api-error';

describe('Error', () => {
  const name = 'AxiosError';
  const code = 'ERR_NETWORK';
  const message = 'Network Error';

  const title = 'Error';
  const description = 'There was an error.';
  const apiError = new ApiError(name, code, message);

  it('returns Error object with ApiError object if not undefined', () => {
    const response = new Error(title, description, apiError);
    const expectedResponse: Error = { title, description, apiError };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Error object with ApiError undefined', () => {
    const response = new Error(title, description);
    const expectedResponse: Error = { title, description, apiError: undefined };

    expect(response).toEqual(expectedResponse);
  });
});
