import axios from 'axios';
import ApiService from '../../src/services/api-service';
import ApiResponse from '../../src/models/api-response';

jest.mock('axios');

describe('ApiService', () => {
  let apiService: ApiService;
  const data = { id: 1, value: 'test' };

  beforeEach(() => {
    apiService = new ApiService();
  });

  it('get', async () => {
    const expectedResponse: ApiResponse<typeof data> = {
      data,
      status: 200,
      statusText: 'OK',
    };

    const mock = (axios.get as jest.Mock).mockResolvedValueOnce({
      data,
      status: 200,
      statusText: 'OK',
    });

    const response = await apiService.get<typeof data>('/api/data');
    expect(mock).toHaveBeenCalledWith('/api/data', undefined);
    expect(response).toEqual(expectedResponse);
  });

  it('post', async () => {
    const expectedResponse: ApiResponse<typeof data> = {
      data,
      status: 201,
      statusText: 'Created',
    };

    const mock = (axios.post as jest.Mock).mockResolvedValueOnce({
      data,
      status: 201,
      statusText: 'Created',
    });

    const response = await apiService.post<typeof data>('/api/data', data);
    expect(mock).toHaveBeenCalledWith('/api/data', data, undefined);
    expect(response).toEqual(expectedResponse);
  });

  it('put', async () => {
    const expectedResponse: ApiResponse<typeof data> = {
      data,
      status: 200,
      statusText: 'OK',
    };

    const mock = (axios.put as jest.Mock).mockResolvedValueOnce({
      data,
      status: 200,
      statusText: 'OK',
    });

    const response = await apiService.put<typeof data>('/api/data/1', data);
    expect(mock).toHaveBeenCalledWith('/api/data/1', data, undefined);
    expect(response).toEqual(expectedResponse);
  });

  it('delete', async () => {
    const expectedResponse: ApiResponse<undefined> = {
      data: undefined,
      status: 204,
      statusText: 'No Content',
    };

    const mock = (axios.delete as jest.Mock).mockResolvedValueOnce({
      status: 204,
      statusText: 'No Content',
    });

    const response = await apiService.delete('/api/data/1');
    expect(mock).toHaveBeenCalledWith('/api/data/1', undefined);
    expect(response).toEqual(expectedResponse);
  });
});
