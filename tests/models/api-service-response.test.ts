import ApiServiceResponse from '../../src/models/api-service-response';

describe('ApiServiceResponse', () => {
  const data = { id: 1, value: 'value' };
  const status = 200;
  const statusText = 'OK';

  it('returns ApiServiceResponse object', () => {
    const response = new ApiServiceResponse(data, status, statusText);
    const expectedResponse: ApiServiceResponse<typeof data> = { data, status, statusText };

    expect(response).toEqual(expectedResponse);
  });
});
