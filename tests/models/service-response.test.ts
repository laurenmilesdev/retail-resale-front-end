import ServiceResponse from '../../src/models/service-response';
import Error from '../../src/models/error';

describe('ServiceResponse', () => {
  const name = 'AxiosError';
  const code = 'ERR_NETWORK';
  const message = 'Network Error';
  const status = 200;
  const statusText = 'OK';
  const data = {
    name: 'test',
  };
  const error = new Error(name, code, message, status, statusText);

  it('returns ServiceResponse object with error if defined', () => {
    const response = new ServiceResponse(data, error);
    const expectedResponse: ServiceResponse<object> = { data, error };

    expect(response).toEqual(expectedResponse);
  });

  it('returns ServiceResponse object without error if undefined', () => {
    const response = new ServiceResponse(data);
    const expectedResponse: ServiceResponse<object> = { data, error: undefined };

    expect(response).toEqual(expectedResponse);
  });
});
