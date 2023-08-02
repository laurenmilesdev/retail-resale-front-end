import axios from 'axios';
import ApiServiceResponse from '../models/api-service-response';

export default class ApiService {
  get<T>(url: string, config?: object): Promise<ApiServiceResponse<T>> {
    return axios.get<T>(url, config);
  }

  post<T>(url: string, data?: object, config?: object): Promise<ApiServiceResponse<T>> {
    return axios.post<T>(url, data, config);
  }

  put<T>(url: string, data?: object, config?: object): Promise<ApiServiceResponse<T>> {
    return axios.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: object): Promise<ApiServiceResponse<T>> {
    return axios.delete<T>(url, config);
  }
}
