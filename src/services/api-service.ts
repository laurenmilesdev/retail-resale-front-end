import axios from 'axios';
import ApiServiceInterface from './interfaces/api-service.interface';
import ApiResponseModel from '../models/api-response';

export default class ApiService implements ApiServiceInterface {
  get<T>(url: string, config?: object): Promise<ApiResponseModel<T>> {
    return axios.get<T>(url, config);
  }

  post<T>(url: string, data?: object, config?: object): Promise<ApiResponseModel<T>> {
    return axios.post<T>(url, data, config);
  }

  put<T>(url: string, data?: object, config?: object): Promise<ApiResponseModel<T>> {
    return axios.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: object): Promise<ApiResponseModel<T>> {
    return axios.delete<T>(url, config);
  }
}
