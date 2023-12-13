import ApiResponse from '../../src/models/api-response';

describe('ApiResponse', () => {
  const data = { id: 1, value: 'value' };
  const status = 200;
  const statusText = 'OK';

  it('returns ApiResponse object', () => {
    const response = new ApiResponse(data, status, statusText);
    const expectedResponse: ApiResponse<typeof data> = { data, status, statusText };

    expect(response).toEqual(expectedResponse);
  });
});
